import React, { useState } from 'react';
import { SERVICES_DATA, Language, ServiceItem } from '../data/siteData';
import { RouteView, filterServices } from '../utils/siteLogic';
import { ServiceVisualBanner } from './VisualArt';
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  Copy,
  Search,
  ChevronLeft,
  ChevronRight,
  FileText,
  CheckCircle2
} from 'lucide-react';

interface ServicesIndexViewProps {
  lang: Language;
  onNavigate: (route: RouteView) => void;
  onRequestQuoteWithSubject: (subject: string) => void;
}

export const ServicesIndexView: React.FC<ServicesIndexViewProps> = ({
  lang,
  onNavigate,
  onRequestQuoteWithSubject
}) => {
  const isAr = lang === 'ar';
  const [category, setCategory] = useState<'all' | 'freight' | 'customs-trade' | 'corporate-industrial'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const filtered = filterServices(SERVICES_DATA, category, searchQuery);

  const handleCopyUrl = (slug: string) => {
    const fullUrl = `${window.location.origin}/${slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl).catch(() => {});
    }
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div>
      {/* Clean High-Contrast Page Header (No Ghost Text / Overlapping Watermarks) */}
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
              {isAr ? 'دليل الخدمات المتكاملة (/services)' : 'Services Directory (/services)'}
            </span>
          </div>

          <h1
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}
          >
            {isAr
              ? 'جميع خدمات الشحن والتخليص الجمركي والأعمال (11 خدمة)'
              : 'All 11 Freight, Customs & Industrial Services'}
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {isAr
              ? 'تصفح كافة خدمات الشركة المصرية للتجارة والتوريدات العمومية. تم تخصيص صفحة مستقلة ورابط مباشر لكل خدمة لسهولة الوصول والمشاركة.'
              : 'Browse the complete operational portfolio of El Masria Trading. Every service has its own dedicated page and direct shareable link.'}
          </p>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="bg-white border-b border-slate-200 sticky top-[69px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {[
              { id: 'all', ar: 'الكل (11)', en: 'All (11)' },
              { id: 'freight', ar: 'الشحن الدولي والنقل (5)', en: 'International Freight (5)' },
              { id: 'customs-trade', ar: 'التخليص والتجارة والتأمين (3)', en: 'Customs & Trade (3)' },
              { id: 'corporate-industrial', ar: 'رد الأعباء والأيزو والصناعة (3)', en: 'Rebates, ISO & IDA (3)' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCategory(tab.id as typeof category)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  category === tab.id
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {isAr ? tab.ar : tab.en}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute top-1/2 -translate-y-1/2 start-3 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في الخدمات...' : 'Search services...'}
              aria-label={isAr ? 'ابحث في الخدمات' : 'Search services'}
              className="w-full ps-9 pe-4 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-red-700"
            />
          </div>
        </div>
      </section>

      {/* Services Directory List */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
              <p className="text-base font-bold text-slate-900">
                {isAr ? 'لا توجد خدمات مطابقة لبحثك' : 'No matching services found'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 text-xs font-bold text-white bg-red-700 rounded-lg cursor-pointer"
              >
                {isAr ? 'إعادة ضبط الفلتر' : 'Reset Filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service) => (
                <article
                  key={service.slug}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between transition-all"
                >
                  <div>
                    <ServiceVisualBanner
                      type={service.illustrationType}
                      code={service.number}
                      title={isAr ? service.title.ar : service.title.en}
                      subtitle={`/${service.slug}`}
                      className="h-44 mb-5"
                    />

                    <div className="flex items-center justify-between gap-2 text-xs text-slate-600 mb-2">
                      <span>
                        <strong className="font-mono text-red-700 tabular-nums">{service.number}.</strong>{' '}
                        {isAr ? service.categoryLabel.ar : service.categoryLabel.en}
                      </span>
                      
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-950">
                      <a
                        href={`/${service.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate({ type: 'service-detail', slug: service.slug });
                        }}
                        className="hover:text-red-700 transition-colors"
                      >
                        {isAr ? service.title.ar : service.title.en}
                      </a>
                    </h2>

                    <p className="mt-2.5 text-sm text-slate-700 leading-relaxed">
                      {isAr ? service.shortDescription.ar : service.shortDescription.en}
                    </p>

                    <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                      {service.benefits.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-700 font-bold">•</span>
                          <span>
                            <strong className="text-slate-900">
                              {isAr ? b.title.ar : b.title.en}:
                            </strong>{' '}
                            {isAr ? b.description.ar : b.description.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                    <a
                      href={`/${service.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate({ type: 'service-detail', slug: service.slug });
                      }}
                      className="px-4 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
                    >
                      <span>{isAr ? 'افتح صفحة الخدمة' : 'Open Service Page'}</span>
                      {isAr ? <ArrowUpLeft className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        onRequestQuoteWithSubject(
                          isAr
                            ? `طلب خدمة: ${service.title.ar} (/${service.slug})`
                            : `Service Inquiry: ${service.title.en} (/${service.slug})`
                        )
                      }
                      className="px-3 py-2 text-xs font-bold text-red-700 hover:bg-red-50 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {isAr ? 'اطلب الخدمة' : 'Inquire'}
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

interface ServiceDetailViewProps {
  service: ServiceItem;
  lang: Language;
  onNavigate: (route: RouteView) => void;
  onRequestQuoteWithSubject: (subject: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  lang,
  onNavigate,
  onRequestQuoteWithSubject
}) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);

  const currentIndex = SERVICES_DATA.findIndex((s) => s.slug === service.slug);
  const prevService = SERVICES_DATA[(currentIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const nextService = SERVICES_DATA[(currentIndex + 1) % SERVICES_DATA.length];

  const handleCopyDirectLink = () => {
    const url = `${window.location.origin}/${service.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Clean Dedicated Service Hero Header (Fixes the ugly grey banner with black overlapping text from screenshots) */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            {/* Breadcrumb */}
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
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate({ type: 'services-index' });
                }}
                className="hover:text-white transition-colors"
              >
                {isAr ? 'خدماتنا' : 'Services'}
              </a>
              <span>/</span>
              <span className="text-red-400 font-bold">
                {isAr ? service.title.ar : service.title.en}
              </span>
            </nav>

            {/* Dedicated Page Link Copy Control */}
            
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                <span className="font-mono tabular-nums">{service.number}</span>
                <span>·</span>
                <span>{isAr ? service.categoryLabel.ar : service.categoryLabel.en}</span>
              </div>
              <h1
                className="font-extrabold text-white tracking-tight"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
              >
                {isAr ? service.title.ar : service.title.en}
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {isAr ? service.shortDescription.ar : service.shortDescription.en}
              </p>
            </div>

            {/* Key Metrics Box */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-3">
              {service.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 flex items-center justify-between"
                >
                  <span className="text-xs text-slate-300">
                    {isAr ? h.label.ar : h.label.en}
                  </span>
                  <span className="text-sm font-extrabold font-mono tabular-nums text-amber-400">
                    {h.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body with Sidebar Directory of All 11 Service URLs */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Primary Service Detail Column (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Visual Artwork + Overview Split */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                <div className="md:col-span-5 flex flex-col">
                  <ServiceVisualBanner
                    type={service.illustrationType}
                    code={service.number}
                    title={isAr ? service.title.ar : service.title.en}
                    subtitle={`elmasria-trading.com/${service.slug}`}
                    className="h-full min-h-[240px]"
                  />
                </div>
                <div className="md:col-span-7 flex flex-col justify-center space-y-4">
                  <h2 className="text-xl font-extrabold text-slate-950">
                    {isAr ? `نبذة عن ${service.title.ar}` : `About ${service.title.en}`}
                  </h2>
                  <p className="text-base text-slate-800 leading-relaxed">
                    {isAr ? service.fullIntro.ar : service.fullIntro.en}
                  </p>
                  {service.secondaryIntro && (
                    <p className="text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-200">
                      {isAr ? service.secondaryIntro.ar : service.secondaryIntro.en}
                    </p>
                  )}
                </div>
              </div>

              {/* Benefits & Advantages Section */}
              <div>
                <h2 className="text-2xl font-extrabold text-slate-950 pb-3 border-b-2 border-red-700 inline-block">
                  {isAr ? service.benefitsTitle.ar : service.benefitsTitle.en}
                </h2>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 tabular-nums mb-1.5">
                        <span>0{index + 1}.</span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-950">
                        {isAr ? benefit.title.ar : benefit.title.en}
                      </h3>
                      <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                        {isAr ? benefit.description.ar : benefit.description.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Sub-Sections (e.g. Full Vessel Charter, Required Customs Docs, Export Rebate Steps, Warehouse QC Checklist) */}
              {service.subSections &&
                service.subSections.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6"
                  >
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold text-slate-950">
                        {isAr ? sub.title.ar : sub.title.en}
                      </h2>
                      {sub.description && (
                        <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
                          {isAr ? sub.description.ar : sub.description.en}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {sub.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4"
                        >
                          <div className="w-8 h-8 rounded-lg bg-red-50 text-red-700 font-mono text-xs font-extrabold flex items-center justify-center shrink-0 tabular-nums">
                            0{iIdx + 1}
                          </div>
                          <div>
                            {item.label && (
                              <h3 className="text-base font-extrabold text-slate-950">
                                {isAr ? item.label.ar : item.label.en}
                              </h3>
                            )}
                            <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                              {isAr ? item.text.ar : item.text.en}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              {/* Direct Service Inquiry CTA Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold text-white">
                    {isAr
                      ? `هل تحتاج إلى عرض سعر أو استشارة في ${service.title.ar}؟`
                      : `Need a quote or consultation for ${service.title.en}?`}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {isAr
                      ? 'فريق العمليات والتخليص الجمركي جاهز للرد على استفساراتكم على مدار الساعة.'
                      : 'Our operations and customs specialists are ready to assist you 24/7.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onRequestQuoteWithSubject(
                      isAr
                        ? `طلب عرض سعر: ${service.title.ar} (/${service.slug})`
                        : `Quote Request: ${service.title.en} (/${service.slug})`
                    )
                  }
                  className="px-6 py-3 text-sm font-bold text-white bg-red-700 hover:bg-red-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {isAr ? 'اطلب الخدمة الآن' : 'Request This Service'}
                </button>
              </div>

              {/* Next / Previous Service Navigation */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`/${prevService.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ type: 'service-detail', slug: prevService.slug });
                  }}
                  className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 flex items-center justify-between gap-3 group"
                >
                  <div>
                    <span className="text-xs text-slate-500 block">
                      {isAr ? 'الخدمة السابقة' : 'Previous Service'}
                    </span>
                    <span className="text-sm font-extrabold text-slate-950 group-hover:text-red-700">
                      {prevService.number}. {isAr ? prevService.title.ar : prevService.title.en}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-500" dir="ltr">
                    /{prevService.slug}
                  </span>
                </a>

                <a
                  href={`/${nextService.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ type: 'service-detail', slug: nextService.slug });
                  }}
                  className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 flex items-center justify-between gap-3 group"
                >
                  <div>
                    <span className="text-xs text-slate-500 block">
                      {isAr ? 'الخدمة التالية' : 'Next Service'}
                    </span>
                    <span className="text-sm font-extrabold text-slate-950 group-hover:text-red-700">
                      {nextService.number}. {isAr ? nextService.title.ar : nextService.title.en}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-500" dir="ltr">
                    /{nextService.slug}
                  </span>
                </a>
              </div>
            </div>

            {/* Sidebar: Direct Links to All 11 Services */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-base font-extrabold text-slate-950 pb-3 border-b border-slate-200">
                  {isAr ? 'دليل روابط الخدمات المباشرة (11)' : 'All 11 Direct Service Links'}
                </h3>
                <nav aria-label={isAr ? 'قائمة جميع الخدمات' : 'All Services Menu'} className="mt-4 space-y-1.5">
                  {SERVICES_DATA.map((item) => {
                    const active = item.slug === service.slug;
                    return (
                      <a
                        key={item.slug}
                        href={`/${item.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate({ type: 'service-detail', slug: item.slug });
                        }}
                        className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                          active
                            ? 'bg-red-700 text-white'
                            : 'text-slate-800 hover:bg-white hover:text-red-700 border border-transparent hover:border-slate-200'
                        }`}
                      >
                        <span className="truncate">
                          <span className="font-mono tabular-nums me-1.5">{item.number}.</span>
                          {isAr ? item.title.ar : item.title.en}
                        </span>
                        <span
                          dir="ltr"
                          className={`font-mono text-[11px] shrink-0 ${
                            active ? 'text-red-100' : 'text-slate-500'
                          }`}
                        >
                          /{item.slug}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Related Products Promo Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
                <p className="text-xs font-mono text-amber-400">EXPORT & SUPPLY CATALOG</p>
                <h3 className="text-lg font-extrabold text-white">
                  {isAr ? 'استكشف منتجات التصدير والتوريد' : 'Explore Our Export Products'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isAr
                    ? 'تصفح 12 قسماً من الحاصلات الزراعية والمواد الغذائية ومواد البناء والأسمدة المتاحة للتصدير.'
                    : 'Browse 12 export-ready agricultural commodities, frozen foods, building materials, and industrial supplies.'}
                </p>
                <a
                  href="/products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ type: 'products-index' });
                  }}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>{isAr ? 'انتقل إلى صفحة المنتجات (/products)' : 'Go to Products Catalog (/products)'}</span>
                  {isAr ? <ArrowUpLeft className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
