import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseRoute,
  buildRouteUrl,
  filterServices,
  filterProducts,
  calculateFreightEstimate,
  validateContactForm
} from './siteLogic';
import { SERVICES_DATA, PRODUCTS_DATA } from '../data/siteData';

test('parseRoute resolves all 11 original service URL slugs directly', () => {
  const slugs = [
    'sea-freight',
    'air-freight',
    'land-freight',
    'door-to-door',
    'warehouse-pickup',
    'customs-clearance',
    'import-export',
    'cargo-insurance',
    'rebate-services',
    'iso-certs',
    'industrial-dev'
  ];

  for (const slug of slugs) {
    const parsedDirect = parseRoute(`/${slug}`);
    assert.deepEqual(parsedDirect, { type: 'service-detail', slug });

    const parsedNested = parseRoute(`/services/${slug}`);
    assert.deepEqual(parsedNested, { type: 'service-detail', slug });
  }
});

test('parseRoute and buildRouteUrl handle product and index routes accurately', () => {
  assert.deepEqual(parseRoute('/'), { type: 'home' });
  assert.deepEqual(parseRoute('/index'), { type: 'home' });
  assert.deepEqual(parseRoute('/products'), { type: 'products-index' });
  assert.deepEqual(parseRoute('/products/valencia-navel-oranges'), {
    type: 'product-detail',
    slug: 'valencia-navel-oranges'
  });
  assert.equal(buildRouteUrl({ type: 'service-detail', slug: 'iso-certs' }), '/iso-certs');
  assert.equal(buildRouteUrl({ type: 'product-detail', slug: 'valencia-navel-oranges' }), '/products/valencia-navel-oranges');
});

test('filterServices filters by category and Arabic/English search query', () => {
  const freightOnly = filterServices(SERVICES_DATA, 'freight', '');
  assert.equal(freightOnly.length, 5);

  const isoSearch = filterServices(SERVICES_DATA, 'all', 'الأيزو');
  assert.equal(isoSearch.length, 1);
  assert.equal(isoSearch[0].slug, 'iso-certs');
});

test('filterProducts filters by category and HS code or Arabic name', () => {
  const agri = filterProducts(PRODUCTS_DATA, 'agricultural', '');
  assert.equal(agri.length, 3);

  const hsMatch = filterProducts(PRODUCTS_DATA, 'all', '0805.10');
  assert.equal(hsMatch.length, 1);
  assert.equal(hsMatch[0].slug, 'valencia-navel-oranges');
});

test('calculateFreightEstimate returns positive deterministic breakdown', () => {
  const quote = calculateFreightEstimate({
    mode: 'sea',
    weightTons: 24,
    containerCount: 2,
    includeCustoms: true,
    includeInsurance: true,
    cargoValueUsd: 50000
  });
  assert.equal(quote.baseFreightUsd > 2900, true);
  assert.equal(quote.customsFeeUsd > 0, true);
  assert.equal(quote.insuranceFeeUsd, 225);
  assert.equal(quote.estimatedRebateSupportUsd, 3000);
});

test('validateContactForm enforces valid email, phone, and required fields', () => {
  const invalid = validateContactForm({
    fullName: 'أ',
    companyName: '',
    phone: '123',
    email: 'invalid-email',
    serviceOrProduct: '',
    message: 'ق'
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);

  const valid = validateContactForm({
    fullName: 'أحمد محمود',
    companyName: 'شركة النيل للتصدير',
    phone: '01012345678',
    email: 'ahmed@nile-export.com',
    serviceOrProduct: 'الشحن البحري',
    message: 'نرغب في عرض سعر شحن حاويتين برتقال إلى روتردام'
  });
  assert.equal(valid.valid, true);
});
