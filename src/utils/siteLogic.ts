import { SERVICES_DATA, PRODUCTS_DATA, ProductCategory, ServiceItem, ExportProduct } from '../data/siteData';

export type RouteView =
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'services-index'; category?: string }
  | { type: 'service-detail'; slug: string }
  | { type: 'products-index'; category?: ProductCategory }
  | { type: 'product-detail'; slug: string }
  | { type: 'contact'; subject?: string };

/**
 * Parses URL pathname or hash path into a strongly typed RouteView.
 * Supports both clean pathnames (e.g. `/sea-freight`, `/services/sea-freight`, `/products/valencia-navel-oranges`)
 * and hash paths (`#/sea-freight`).
 */
export function parseRoute(pathInput: string): RouteView {
  let clean = pathInput.trim();
  if (clean.startsWith('#')) {
    clean = clean.slice(1);
  }
  const [pathnamePart] = clean.split('?');
  const segments = pathnamePart
    .split('/')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  if (segments.length === 0 || segments[0] === 'index' || segments[0] === 'home') {
    return { type: 'home' };
  }

  if (segments[0] === 'about') {
    return { type: 'about' };
  }

  if (segments[0] === 'contact') {
    return { type: 'contact' };
  }

  if (segments[0] === 'services') {
    if (segments[1]) {
      const matched = SERVICES_DATA.find((s) => s.slug === segments[1]);
      if (matched) {
        return { type: 'service-detail', slug: matched.slug };
      }
    }
    return { type: 'services-index' };
  }

  if (segments[0] === 'products') {
    if (segments[1]) {
      const matchedProd = PRODUCTS_DATA.find((p) => p.slug === segments[1]);
      if (matchedProd) {
        return { type: 'product-detail', slug: matchedProd.slug };
      }
    }
    return { type: 'products-index' };
  }

  // Direct top-level slug match for original site URLs (e.g. /sea-freight, /iso-certs, /rebate-services)
  const directService = SERVICES_DATA.find((s) => s.slug === segments[0]);
  if (directService) {
    return { type: 'service-detail', slug: directService.slug };
  }

  const directProduct = PRODUCTS_DATA.find((p) => p.slug === segments[0]);
  if (directProduct) {
    return { type: 'product-detail', slug: directProduct.slug };
  }

  return { type: 'home' };
}

/**
 * Builds a clean canonical URL path for any route view.
 */
export function buildRouteUrl(route: RouteView): string {
  switch (route.type) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'services-index':
      return '/services';
    case 'service-detail':
      return `/${route.slug}`;
    case 'products-index':
      return '/products';
    case 'product-detail':
      return `/products/${route.slug}`;
    case 'contact':
      return '/contact';
  }
}

/**
 * Filters Services by category and search query (Arabic & English).
 */
export function filterServices(
  services: ServiceItem[],
  category: 'all' | 'freight' | 'customs-trade' | 'corporate-industrial',
  searchQuery: string
): ServiceItem[] {
  const q = searchQuery.trim().toLowerCase();
  return services.filter((service) => {
    const matchesCat = category === 'all' || service.category === category;
    if (!matchesCat) return false;
    if (!q) return true;
    return (
      service.title.ar.toLowerCase().includes(q) ||
      service.title.en.toLowerCase().includes(q) ||
      service.shortDescription.ar.toLowerCase().includes(q) ||
      service.shortDescription.en.toLowerCase().includes(q) ||
      service.slug.toLowerCase().includes(q)
    );
  });
}

/**
 * Filters Export/Import Products by category and search query (Arabic, English, HS Code, Product Code).
 */
export function filterProducts(
  products: ExportProduct[],
  category: ProductCategory,
  searchQuery: string
): ExportProduct[] {
  const q = searchQuery.trim().toLowerCase();
  return products.filter((prod) => {
    const matchesCat = category === 'all' || prod.category === category;
    if (!matchesCat) return false;
    if (!q) return true;
    return (
      prod.name.ar.toLowerCase().includes(q) ||
      prod.name.en.toLowerCase().includes(q) ||
      prod.summary.ar.toLowerCase().includes(q) ||
      prod.summary.en.toLowerCase().includes(q) ||
      prod.code.toLowerCase().includes(q) ||
      prod.hsCode.toLowerCase().includes(q)
    );
  });
}

export interface FreightQuoteInput {
  mode: 'sea' | 'air' | 'land' | 'door';
  weightTons: number;
  containerCount: number;
  includeCustoms: boolean;
  includeInsurance: boolean;
  cargoValueUsd: number;
}

export interface FreightQuoteEstimate {
  baseFreightUsd: number;
  customsFeeUsd: number;
  insuranceFeeUsd: number;
  estimatedRebateSupportUsd: number;
  totalEstimatedUsd: number;
  transitDaysRange: string;
}

/**
 * Pure deterministic freight & customs cost estimator for exporters/importers.
 */
export function calculateFreightEstimate(input: FreightQuoteInput): FreightQuoteEstimate {
  const safeTons = Math.max(0.5, Number(input.weightTons) || 1);
  const safeContainers = Math.max(1, Math.round(Number(input.containerCount) || 1));
  const safeValue = Math.max(1000, Number(input.cargoValueUsd) || 10000);

  let baseFreightUsd = 0;
  let transitDaysRange = '7 - 14';

  if (input.mode === 'sea') {
    baseFreightUsd = safeContainers * 1450 + safeTons * 18;
    transitDaysRange = '8 - 16';
  } else if (input.mode === 'air') {
    baseFreightUsd = safeTons * 1850;
    transitDaysRange = '1 - 3';
  } else if (input.mode === 'land') {
    baseFreightUsd = safeContainers * 1150 + safeTons * 22;
    transitDaysRange = '3 - 6';
  } else {
    // door-to-door
    baseFreightUsd = safeContainers * 1890 + safeTons * 35;
    transitDaysRange = '5 - 10';
  }

  const customsFeeUsd = input.includeCustoms ? 280 + safeContainers * 65 : 0;
  const insuranceFeeUsd = input.includeInsurance ? Math.round(safeValue * 0.0045) : 0;
  const estimatedRebateSupportUsd = Math.round(safeValue * 0.06);
  const totalEstimatedUsd = Math.round(baseFreightUsd + customsFeeUsd + insuranceFeeUsd);

  return {
    baseFreightUsd: Math.round(baseFreightUsd),
    customsFeeUsd: Math.round(customsFeeUsd),
    insuranceFeeUsd,
    estimatedRebateSupportUsd,
    totalEstimatedUsd,
    transitDaysRange
  };
}

export interface ContactFormInput {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceOrProduct: string;
  message: string;
}

export function validateContactForm(input: ContactFormInput): { valid: boolean; errors: Partial<Record<keyof ContactFormInput, string>> } {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};
  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName = 'الاسم مطلوب (حرفين على الأقل)';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'البريد الإلكتروني غير صحيح';
  }
  const phoneClean = (input.phone || '').replace(/[\s\-+()]/g, '');
  if (!phoneClean || phoneClean.length < 8 || !/^\d+$/.test(phoneClean)) {
    errors.phone = 'رقم الهاتف غير صحيح (8 أرقام على الأقل)';
  }
  if (!input.message || input.message.trim().length < 5) {
    errors.message = 'يرجى كتابة تفاصيل الطلب';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
