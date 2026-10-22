import React from 'react';
import { Language } from '../data/siteData';
import { RouteView, buildRouteUrl } from '../utils/siteLogic';
import { IsoSealBadge } from './VisualArt';
import { Phone, Mail, MapPin, ArrowUpLeft, ArrowUpRight } from 'lucide-react';

interface LayoutProps {
  lang: Language;
  currentRoute: RouteView;
  onNavigate: (route: RouteView) => void;
  onToggleLanguage: () => void;
  children: React.ReactNode;
}

export const SiteLayout: React.FC<LayoutProps> = ({
  lang,
  currentRoute,
  onNavigate,
  onToggleLanguage,
  children
}) => {
  const isAr = lang === 'ar';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: RouteView) => {
    e.preventDefault();
    onNavigate(route);
  };

  const isNavActive = (type: RouteView['type']) => {
    if (type === 'services-index' && (currentRoute.type === 'services-index' || currentRoute.type === 'service-detail')) {
      return true;
    }
    if (type === 'products-index' && (currentRoute.type === 'products-index' || currentRoute.type === 'product-detail')) {
      return true;
    }
    return currentRoute.type === type;
  };

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Bar Contract: Strictly 3 zones */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 md:gap-8 px-4 md:px-6 py-3.5">
          {/* Zone 1: Single text element wordmark */}
          <a
            href={buildRouteUrl({ type: 'home' })}
            onClick={(e) => handleLinkClick(e, { type: 'home' })}
            className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0 hover:text-red-700 transition-colors"
          >
            {isAr ? 'الشركة المصرية للتجارة' : 'EL MASRIA TRADING'}
          </a>

          {/* Zone 2: 5 concise single-line text navigation links */}
          <nav aria-label={isAr ? 'التنقل الرئيسي' : 'Primary Navigation'} className="flex items-center gap-3 sm:gap-5 md:gap-7 text-xs sm:text-sm font-semibold text-slate-700 overflow-x-auto">
            <a
              href={buildRouteUrl({ type: 'home' })}
              onClick={(e) => handleLinkClick(e, { type: 'home' })}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                isNavActive('home')
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </a>
            <a
              href={buildRouteUrl({ type: 'about' })}
              onClick={(e) => handleLinkClick(e, { type: 'about' })}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                isNavActive('about')
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              {isAr ? 'من نحن' : 'About'}
            </a>
            <a
              href={buildRouteUrl({ type: 'services-index' })}
              onClick={(e) => handleLinkClick(e, { type: 'services-index' })}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                isNavActive('services-index')
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              {isAr ? 'خدماتنا' : 'Services'}
            </a>
            <a
              href={buildRouteUrl({ type: 'products-index' })}
              onClick={(e) => handleLinkClick(e, { type: 'products-index' })}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                isNavActive('products-index')
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              {isAr ? 'منتجاتنا' : 'Products'}
            </a>
            <a
              href={buildRouteUrl({ type: 'contact' })}
              onClick={(e) => handleLinkClick(e, { type: 'contact' })}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                isNavActive('contact')
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              {isAr ? 'إتصل بنا' : 'Contact'}
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => onNavigate({ type: 'contact' })}
              className="px-3 sm:px-4 py-2 text-xs md:text-sm font-bold text-white bg-red-700 rounded-lg hover:bg-red-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            >
              {isAr ? 'اطلب عرض سعر' : 'Request Quote'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Pre-Footer Corporate Callout Banner (Fixes low-contrast washed-out grey banner from original site) */}
      <section className="bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="text-xs font-bold tracking-wide text-red-400 mb-3">
            {isAr ? 'إتصل بنا في أي وقت · دعم لوجستي 24/7' : '24/7 LOGISTICS & TRADE SUPPORT'}
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            {isAr
              ? 'الشركة المصرية للتجارة والتوريدات العمومية'
              : 'El Masria for General Trading & Supplies'}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            {isAr
              ? 'ريادة واحترافية في التصدير والتجارة والخدمات اللوجستية والتخليص الجمركي لتحقيق نجاح شركائنا محلياً وعالمياً.'
              : 'Leadership and professionalism in export, international freight, customs brokerage, and industrial supply chain execution.'}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate({ type: 'contact' })}
              className="px-6 py-3 text-sm font-bold text-white bg-red-700 hover:bg-red-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer inline-flex items-center gap-2"
            >
              <span>{isAr ? 'تواصل معنا الآن' : 'Contact Our Team'}</span>
              {isAr ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onToggleLanguage}
              className="px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isAr ? 'Switch to English (EN)' : 'التبديل إلى العربية (AR)'}
            </button>
          </div>
        </div>
      </section>

      {/* Quiet Footer with full sitemap URLs & ISO 9001:2015 Seal */}
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Brand & ISO Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-4">
                <IsoSealBadge className="w-16 h-16 shrink-0" />
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    {isAr ? 'الشركة المصرية للتجارة' : 'El Masria Trading'}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">
                    ISO 9001:2015 CERTIFIED COMPANY
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {isAr
                  ? 'شريكك اللوجستي والتجاري المتكامل لخدمات الشحن البحري والجوي والبري، التخليص الجمركي، رد أعباء الصادرات، والتوريدات العمومية.'
                  : 'Your integrated logistics and trade partner for ocean, air, and land freight, customs brokerage, export rebates, and general supplies.'}
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-mono tabular-nums" dir="ltr">+20 100 584 9210 / +20 2 2418 7900</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-mono">info@elmasria-trading.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span>
                    {isAr
                      ? 'القاهرة، جمهورية مصر العربية - الموانئ الرئيسية (الإسكندرية، السخنة، دمياط، مطار القاهرة)'
                      : 'Cairo, Egypt — Operating at Alexandria, Sokhna, Damietta & Cairo Airport'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Service URLs (1-6) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white">
                {isAr ? 'روابط خدمات الشحن والتخليص' : 'Freight & Customs Links'}
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { slug: 'sea-freight', ar: 'الشحن البحري (/sea-freight)', en: 'Sea Freight (/sea-freight)' },
                  { slug: 'air-freight', ar: 'الشحن الجوي (/air-freight)', en: 'Air Freight (/air-freight)' },
                  { slug: 'land-freight', ar: 'الشحن البري (/land-freight)', en: 'Land Freight (/land-freight)' },
                  { slug: 'door-to-door', ar: 'من الباب للباب (/door-to-door)', en: 'Door-to-Door (/door-to-door)' },
                  { slug: 'warehouse-pickup', ar: 'الاستلام من المخزن (/warehouse-pickup)', en: 'Warehouse Pickup (/warehouse-pickup)' },
                  { slug: 'customs-clearance', ar: 'التخليص الجمركي (/customs-clearance)', en: 'Customs Clearance (/customs-clearance)' }
                ].map((item) => (
                  <li key={item.slug}>
                    <a
                      href={`/${item.slug}`}
                      onClick={(e) => handleLinkClick(e, { type: 'service-detail', slug: item.slug })}
                      className="text-slate-400 hover:text-white transition-colors block"
                    >
                      {isAr ? item.ar : item.en}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Service URLs (7-11) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white">
                {isAr ? 'خدمات الأعمال والصناعة' : 'Trade & Industrial Links'}
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { slug: 'import-export', ar: 'الاستيراد والتصدير (/import-export)', en: 'Import & Export (/import-export)' },
                  { slug: 'cargo-insurance', ar: 'التأمين على البضائع (/cargo-insurance)', en: 'Cargo Insurance (/cargo-insurance)' },
                  { slug: 'rebate-services', ar: 'رد أعباء الصادرات (/rebate-services)', en: 'Export Rebates (/rebate-services)' },
                  { slug: 'iso-certs', ar: 'إصدار شهادات الأيزو (/iso-certs)', en: 'ISO Certifications (/iso-certs)' },
                  { slug: 'industrial-dev', ar: 'التنمية الصناعية (/industrial-dev)', en: 'Industrial Development (/industrial-dev)' }
                ].map((item) => (
                  <li key={item.slug}>
                    <a
                      href={`/${item.slug}`}
                      onClick={(e) => handleLinkClick(e, { type: 'service-detail', slug: item.slug })}
                      className="text-slate-400 hover:text-white transition-colors block"
                    >
                      {isAr ? item.ar : item.en}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Navigation & Products */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold text-white">
                {isAr ? 'أقسام الموقع' : 'Site Directory'}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/products"
                    onClick={(e) => handleLinkClick(e, { type: 'products-index' })}
                    className="text-slate-400 hover:text-white transition-colors block"
                  >
                    {isAr ? 'كتالوج المنتجات (/products)' : 'Products Catalog (/products)'}
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => handleLinkClick(e, { type: 'services-index' })}
                    className="text-slate-400 hover:text-white transition-colors block"
                  >
                    {isAr ? 'دليل الخدمات (/services)' : 'All Services (/services)'}
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    onClick={(e) => handleLinkClick(e, { type: 'about' })}
                    className="text-slate-400 hover:text-white transition-colors block"
                  >
                    {isAr ? 'من نحن (/about)' : 'About Us (/about)'}
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={(e) => handleLinkClick(e, { type: 'contact' })}
                    className="text-slate-400 hover:text-white transition-colors block"
                  >
                    {isAr ? 'إتصل بنا (/contact)' : 'Contact Us (/contact)'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<p>جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">A.Z Agency</a> 2026 ©</p>
            <div className="flex items-center gap-4">
              <span>ISO 9001:2015</span>
              <span>·</span>
              <span>ACI / Nafeza Certified</span>
              <span>·</span>
              <span>Global Freight Network</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
