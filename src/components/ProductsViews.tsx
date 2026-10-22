import React, { useState } from 'react';
import {
  PRODUCTS_DATA,
  SERVICES_DATA,
  Language,
  ProductCategory,
  ExportProduct
} from '../data/siteData';
import { RouteView, buildRouteUrl, filterProducts } from '../utils/siteLogic';
import { ProductVisualCardHeader } from './VisualArt';
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  Copy,
  Search,
  Package,
  Truck,
  ShieldCheck,
  Globe2
} from 'lucide-react';

interface ProductsIndexViewProps {
  lang: Language;
  onNavigate: (route: RouteView) => void;
  onRequestQuoteWithSubject: (subject: string) => void;
}

export const ProductsIndexView: React.FC<ProductsIndexViewProps> = ({
  lang,
  onNavigate,
  onRequestQuoteWithSubject
}) => {
  const isAr = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const filteredProducts = filterProducts(PRODUCTS_DATA, selectedCategory, searchQuery);

  const handleCopyProductUrl = (slug: string) => {
    const url = `${window.location.origin}/products/${slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div>
      {/* Clean High-Contrast Products Page Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ type: 'home' });
              }}
              className="hover:text-white transition-colors"
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </a>
            <span>/</span>
            <span className="text-red-400 font-semibold">
              {isAr ? 'كتالوج المنتجات والتوريدات (/products)' : 'Products & Export Catalog (/products)'}
            </span>
          </div>

          <h1
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}
          >
            {isAr
              ? 'كتالوج المنتجات المصرية للتصدير والتوريدات العمومية'
              : 'Egyptian Export Commodities & General Supply Catalog'}
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {isAr
              ? 'نقدم مجموعة متكاملة من المنتجات التصديرية والتوريدات الصناعية المطابقة للمواصفات القياسية العالمية مع مواصفات التعبئة والأكواد الجمركية (HS Codes) ورابط مباشر لكل منتج.'
              : 'Explore our 12 export-grade product lines across fresh produce, IQF frozen foods, building materials, and industrial supplies—complete with HS codes, packaging specs, and dedicated URLs.'}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-[69px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {[
              { id: 'all', ar: 'جميع المنتجات (12)', en: 'All Products (12)' },
              { id: 'agricultural', ar: 'الحاصلات الزراعية (3)', en: 'Fresh Produce (3)' },
              { id: 'food-commodities', ar: 'المواد الغذائية والمجمدات (4)', en: 'Foodstuffs & IQF (4)' },
              { id: 'industrial-building', ar: 'مواد البناء والحديد والرخام (3)', en: 'Building & Metals (3)' },
              { id: 'chemicals-packaging', ar: 'الأسمدة ومواد التعبئة (2)', en: 'Fertilizers & Packaging (2)' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id as ProductCategory)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {isAr ? tab.ar : tab.en}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute top-1/2 -translate-y-1/2 start-3 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث بالاسم أو الكود الجمركي HS...' : 'Search by name or HS code...'}
              aria-label={isAr ? 'ابحث في المنتجات' : 'Search products'}
              className="w-full ps-9 pe-4 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-red-700"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
              <p className="text-base font-bold text-slate-900">
                {isAr ? 'لا توجد منتجات مطابقة لبحثك' : 'No matching products found'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 text-xs font-bold text-white bg-red-700 rounded-lg cursor-pointer"
              >
                {isAr ? 'إعادة ضبط البحث' : 'Reset Search'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 overflow-hidden flex flex-col justify-between transition-all"
                >
                  <div>
                    <ProductVisualCardHeader
                      theme={product.visualTheme}
                      code={product.code}
                      hsCode={product.hsCode}
                      origin={isAr ? product.origin.ar : product.origin.en}
                    />

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-600 mb-2">
                        <span className="font-bold text-red-700 whitespace-nowrap truncate">
                          {isAr ? product.categoryLabel.ar : product.categoryLabel.en}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyProductUrl(product.slug)}
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 hover:text-slate-950 cursor-pointer whitespace-nowrap shrink-0"
                          title={isAr ? 'نسخ رابط المنتج' : 'Copy product URL'}
                        >
                          {copiedSlug === product.slug ? (
                            <span className="text-emerald-700 font-sans font-bold">
                              {isAr ? 'تم النسخ' : 'Copied'}
                            </span>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 shrink-0" />
                              <span dir="ltr" className="truncate max-w-[140px]">/{product.slug}</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h2 className="text-lg font-extrabold text-slate-950 leading-snug">
                        <a
                          href={buildRouteUrl({ type: 'product-detail', slug: product.slug })}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate({ type: 'product-detail', slug: product.slug });
                          }}
                          className="hover:text-red-700 transition-colors"
                        >
                          {isAr ? product.name.ar : product.name.en}
                        </a>
                      </h2>

                      <p className="mt-2.5 text-sm text-slate-700 leading-relaxed">
                        {isAr ? product.summary.ar : product.summary.en}
                      </p>

                      {/* Technical Table Preview */}
                      <dl className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                        <div className="flex justify-between gap-2">
                          <dt className="text-slate-500 font-medium">
                            {isAr ? 'البند الجمركي (HS Code):' : 'HS Tariff Code:'}
                          </dt>
                          <dd className="text-slate-950 font-mono font-bold tabular-nums">
                            {product.hsCode}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-2">
                          <dt className="text-slate-500 font-medium">
                            {isAr ? 'موسم التوفر:' : 'Availability:'}
                          </dt>
                          <dd className="text-slate-900 font-semibold text-end">
                            {isAr ? product.seasonOrAvailability.ar : product.seasonOrAvailability.en}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-2">
                          <dt className="text-slate-500 font-medium">
                            {isAr ? 'الحد الأدنى للطلب:' : 'Minimum Order:'}
                          </dt>
                          <dd className="text-slate-900 font-semibold font-mono tabular-nums text-end">
                            {isAr ? product.minOrder.ar : product.minOrder.en}
                          </dd>
                        </div>
                      </dl>

                      {/* Quiet Unboxed Certifications Line */}
                      <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600 font-mono">
                        {product.certifications.join(' · ')}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                    <a
                      href={buildRouteUrl({ type: 'product-detail', slug: product.slug })}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate({ type: 'product-detail', slug: product.slug });
                      }}
                      className="px-4 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
                    >
                      <span>{isAr ? 'صفحة المنتج والمواصفات' : 'Product Specifications'}</span>
                      {isAr ? <ArrowUpLeft className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        onRequestQuoteWithSubject(
                          isAr
                            ? `طلب عرض سعر تصدير: ${product.name.ar} (${product.code})`
                            : `Export Quote Request: ${product.name.en} (${product.code})`
                        )
                      }
                      className="px-3 py-2 text-xs font-bold text-red-700 hover:bg-red-50 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {isAr ? 'اطلب عرض سعر' : 'Get Quote'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface ProductDetailViewProps {
  product: ExportProduct;
  lang: Language;
  onNavigate: (route: RouteView) => void;
  onRequestQuoteWithSubject: (subject: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  lang,
  onNavigate,
  onRequestQuoteWithSubject
}) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    const url = `${window.location.origin}/products/${product.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div>
      {/* Dedicated Product Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate({ type: 'home' });
                }}
                className="hover:text-white transition-colors"
              >
                {isAr ? 'الرئيسية' : 'Home'}
              </a>
              <span>/</span>
              <a
                href="/products"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate({ type: 'products-index' });
                }}
                className="hover:text-white transition-colors"
              >
                {isAr ? 'منتجاتنا' : 'Products'}
              </a>
              <span>/</span>
              <span className="text-red-400 font-bold">
                {isAr ? product.name.ar : product.name.en}
              </span>
            </nav>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">
                {isAr ? 'رابط المنتج المباشر:' : 'Direct Product URL:'}
              </span>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="px-3 py-1.5 text-xs font-mono bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <span dir="ltr">/products/{product.slug}</span>
                {copied ? (
                  <span className="text-emerald-400 font-sans font-bold">
                    {isAr ? 'تم النسخ!' : 'Copied!'}
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <span className="font-mono">{product.code}</span>
                <span>·</span>
                <span className="font-mono tabular-nums">HS CODE: {product.hsCode}</span>
                <span>·</span>
                <span>{isAr ? product.categoryLabel.ar : product.categoryLabel.en}</span>
              </div>

              <h1
                className="font-extrabold text-white tracking-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                {isAr ? product.name.ar : product.name.en}
              </h1>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {isAr ? product.summary.ar : product.summary.en}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div>
                  <span className="text-xs text-slate-400 block">
                    {isAr ? 'الحد الأدنى للطلب التصديري (MOQ)' : 'Minimum Export Order (MOQ)'}
                  </span>
                  <span className="text-base font-extrabold font-mono tabular-nums text-white mt-1 block">
                    {isAr ? product.minOrder.ar : product.minOrder.en}
                  </span>
                </div>
                <div className="pt-3 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">
                    {isAr ? 'شهادات الجودة والاعتماد' : 'Certifications & Compliance'}
                  </span>
                  <span className="text-xs font-mono text-amber-400 mt-1 block">
                    {product.certifications.join(' · ')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onRequestQuoteWithSubject(
                      isAr
                        ? `طلب عرض سعر تصدير: ${product.name.ar} (${product.code} - HS ${product.hsCode})`
                        : `Export Quote Request: ${product.name.en} (${product.code} - HS ${product.hsCode})`
                    )
                  }
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-red-700 hover:bg-red-600 rounded-lg transition-colors cursor-pointer"
                >
                  {isAr ? 'اطلب تسعير وعينة تجارية' : 'Request Export Pricing & Sample'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Specifications & Logistics Integration */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* Visual Overview Box */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 items-stretch">
                <div className="md:col-span-5">
                  <ProductVisualCardHeader
                    theme={product.visualTheme}
                    code={product.code}
                    hsCode={product.hsCode}
                    origin={isAr ? product.origin.ar : product.origin.en}
                    className="h-full min-h-[220px] rounded-xl"
                  />
                </div>
                <div className="md:col-span-7 flex flex-col justify-center space-y-4">
                  <h2 className="text-xl font-extrabold text-slate-950">
                    {isAr ? 'وصف المنتج ومميزات التصدير' : 'Product Description & Export Profile'}
                  </h2>
                  <p className="text-base text-slate-800 leading-relaxed">
                    {isAr ? product.description.ar : product.description.en}
                  </p>
                  <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-4 text-xs text-slate-700">
                    <span>
                      <strong className="text-slate-950">{isAr ? 'المنشأ:' : 'Origin:'}</strong>{' '}
                      {isAr ? product.origin.ar : product.origin.en}
                    </span>
                    <span>·</span>
                    <span>
                      <strong className="text-slate-950">{isAr ? 'التوفر:' : 'Availability:'}</strong>{' '}
                      {isAr ? product.seasonOrAvailability.ar : product.seasonOrAvailability.en}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications & Packaging Table */}
              <div>
                <h2 className="text-2xl font-extrabold text-slate-950 pb-3 border-b-2 border-red-700 inline-block">
                  {isAr ? 'المواصفات الفنية وبيانات التعبئة والشحن' : 'Technical Specifications & Packaging Data'}
                </h2>

                <div className="mt-6 bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <dl className="divide-y divide-slate-200 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-slate-50">
                      <dt className="font-bold text-slate-900">
                        {isAr ? 'كود المنتج المرجعي' : 'Product Reference Code'}
                      </dt>
                      <dd className="sm:col-span-2 font-mono font-bold text-slate-900 tabular-nums mt-1 sm:mt-0">
                        {product.code}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
                      <dt className="font-bold text-slate-900">
                        {isAr ? 'البند الجمركي الدولي (HS Code)' : 'Harmonized System (HS) Code'}
                      </dt>
                      <dd className="sm:col-span-2 font-mono font-bold text-red-700 tabular-nums mt-1 sm:mt-0">
                        {product.hsCode}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-slate-50">
                      <dt className="font-bold text-slate-900">
                        {isAr ? 'بلد ومناطق المنشأ' : 'Country & Region of Origin'}
                      </dt>
                      <dd className="sm:col-span-2 text-slate-800 mt-1 sm:mt-0">
                        {isAr ? product.origin.ar : product.origin.en}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
                      <dt className="font-bold text-slate-900">
                        {isAr ? 'مواصفات التعبئة والتغليف' : 'Standard Export Packaging'}
                      </dt>
                      <dd className="sm:col-span-2 text-slate-800 mt-1 sm:mt-0">
                        {isAr ? product.packaging.ar : product.packaging.en}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-slate-50">
                      <dt className="font-bold text-slate-900">
                        {isAr ? 'وسائل الشحن المتاحة' : 'Recommended Shipping Modes'}
                      </dt>
                      <dd className="sm:col-span-2 text-slate-800 mt-1 sm:mt-0">
                        {isAr ? product.shippingModes.ar : product.shippingModes.en}
                      </dd>
                    </div>
                    {product.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-1 sm:grid-cols-3 p-4 ${
                          idx % 2 === 1 ? 'bg-slate-50' : ''
                        }`}
                      >
                        <dt className="font-bold text-slate-900">
                          {isAr ? spec.label.ar : spec.label.en}
                        </dt>
                        <dd className="sm:col-span-2 text-slate-800 font-medium mt-1 sm:mt-0">
                          {isAr ? spec.value.ar : spec.value.en}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Integrated Logistics & Customs Support for this Product */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-extrabold text-slate-950">
                  {isAr
                    ? 'خدمات الشحن والتخليص المرتبطة بهذا المنتج'
                    : 'Integrated Freight & Customs Services for This Product'}
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  {isAr
                    ? 'لا نكتفي بتوريد المنتج فقط، بل نتولى كافة إجراءات الاستلام من المحطة أو المصنع، الفحص، التخليص الجمركي، والشحن حتى ميناء المستورد.'
                    : 'Beyond product supply, El Masria manages packhouse QC inspection, phytosanitary/origin certificates, customs clearance, and international freight.'}
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    SERVICES_DATA[0], // Sea freight
                    SERVICES_DATA[4], // Warehouse QC
                    SERVICES_DATA[5]  // Customs clearance
                  ].map((srv) => (
                    <a
                      key={srv.slug}
                      href={`/${srv.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate({ type: 'service-detail', slug: srv.slug });
                      }}
                      className="p-4 bg-white rounded-xl border border-slate-200 hover:border-red-700 transition-colors block"
                    >
                      <span className="text-xs font-mono text-red-700 block">/{srv.slug}</span>
                      <span className="text-sm font-bold text-slate-950 mt-1 block">
                        {isAr ? srv.title.ar : srv.title.en}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: All 12 Product Direct Links */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-base font-extrabold text-slate-950 pb-3 border-b border-slate-200">
                  {isAr ? 'دليل روابط المنتجات (12 منتج)' : 'All 12 Product Links'}
                </h3>
                <nav className="mt-4 space-y-1.5">
                  {PRODUCTS_DATA.map((item) => {
                    const active = item.slug === product.slug;
                    return (
                      <a
                        key={item.id}
                        href={buildRouteUrl({ type: 'product-detail', slug: item.slug })}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate({ type: 'product-detail', slug: item.slug });
                        }}
                        className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                          active
                            ? 'bg-red-700 text-white'
                            : 'text-slate-800 hover:bg-white hover:text-red-700 border border-transparent hover:border-slate-200'
                        }`}
                      >
                        <span className="truncate">{isAr ? item.name.ar : item.name.en}</span>
                        <span
                          className={`font-mono text-[11px] shrink-0 tabular-nums ${
                            active ? 'text-red-100' : 'text-slate-500'
                          }`}
                        >
                          {item.code}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
