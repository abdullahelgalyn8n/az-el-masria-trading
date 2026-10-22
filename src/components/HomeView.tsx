import React, { useState } from 'react';
import {
  SERVICES_DATA,
  PRODUCTS_DATA,
  CLIENT_PARTNERS,
  Language,
  ProductCategory
} from '../data/siteData';
import {
  RouteView,
  buildRouteUrl,
  filterProducts,
  calculateFreightEstimate,
  FreightQuoteInput
} from '../utils/siteLogic';
import {
  ElMasriaLogo,
  ServiceVisualBanner,
  ProductVisualCardHeader
} from './VisualArt';
import {
  ArrowUpLeft,
  ArrowUpRight,
  CheckCircle2,
  Calculator,
  Search,
  Globe,
  ShieldCheck,
  Clock,
  Layers
} from 'lucide-react';

interface HomeViewProps {
  lang: Language;
  onNavigate: (route: RouteView) => void;
  onRequestQuoteWithSubject: (subject: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  lang,
  onNavigate,
  onRequestQuoteWithSubject
}) => {
  const isAr = lang === 'ar';
  const [selectedServiceCat, setSelectedServiceCat] = useState<'all' | 'freight' | 'customs-trade' | 'corporate-industrial'>('all');
  const [selectedProdCat, setSelectedProdCat] = useState<ProductCategory>('all');
  const [prodSearch, setProdSearch] = useState('');

  // Interactive Freight & Customs Estimator State
  const [quoteInput, setQuoteInput] = useState<FreightQuoteInput>({
    mode: 'sea',
    weightTons: 24,
    containerCount: 1,
    includeCustoms: true,
    includeInsurance: true,
    cargoValueUsd: 35000
  });

  const estimate = calculateFreightEstimate(quoteInput);

  const visibleServices = SERVICES_DATA.filter(
    (s) => selectedServiceCat === 'all' || s.category === selectedServiceCat
  );

  const visibleProducts = filterProducts(PRODUCTS_DATA, selectedProdCat, prodSearch).slice(0, 6);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, route: RouteView) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <div>
      {/* Section 1: High-Contrast Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        {/* Subtle industrial port background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3 text-xs font-semibold text-red-400">
                <ElMasriaLogo className="w-9 h-9" />
                <span>
                  {isAr
                    ? 'مرحباً بك في الشركة المصرية للتجارة والتوريدات العمومية · ISO 9001:2015'
                    : 'WELCOME TO EL MASRIA FOR GENERAL TRADING & SUPPLIES · ISO 9001:2015'}
                </span>
              </div>

              <h1
                className="font-extrabold tracking-tight text-white leading-tight"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
              >
                {isAr
                  ? 'شريكك الموثوق لتحقيق النجاح في التصدير والشحن وخدمات الأعمال'
                  : 'Your Trusted Partner for Global Export, Freight & Customs Excellence'}
              </h1>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {isAr
                  ? 'نقدم حلولاً متكاملة في التصدير، الشحن البحري والجوي والبري، التخليص الجمركي، رد أعباء الصادرات، والتوريدات العمومية مع التزام تام بالدقة والجودة في كافة الموانئ المصرية والعالمية.'
                  : 'We deliver integrated solutions across export trading, ocean/air/land freight, customs clearance, export subsidy rebates, and industrial supplies with uncompromising reliability.'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate({ type: 'contact' })}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-red-700 hover:bg-red-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{isAr ? 'تواصل معنا الآن' : 'Contact Us Now'}</span>
                  {isAr ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                </button>
                <a
                  href={buildRouteUrl({ type: 'services-index' })}
                  onClick={(e) => handleAnchor(e, { type: 'services-index' })}
                  className="px-5 py-3.5 text-sm font-semibold text-slate-100 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  {isAr ? 'استكشف جميع الخدمات (11 خدمة)' : 'Explore All 11 Services'}
                </a>
                <a
                  href={buildRouteUrl({ type: 'products-index' })}
                  onClick={(e) => handleAnchor(e, { type: 'products-index' })}
                  className="px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  {isAr ? 'تصفح كتالوج المنتجات (12 منتج)' : 'Browse Export Catalog (12 Products)'}
                </a>
              </div>
            </div>

            {/* Hero Interactive Freight & Rebate Estimator Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <h2 className="text-base font-bold text-white flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-red-400" />
                        <span>
                          {isAr ? 'حاسبة تكلفة الشحن ورد الأعباء التقديرية' : 'Instant Freight & Rebate Estimator'}
                        </span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {isAr
                          ? 'احسب التكلفة المبدئية للشحن والتخليص ونسبة دعم الصادرات'
                          : 'Estimate freight, customs clearance, and export rebate support'}
                      </p>
                    </div>
                  </div>

                  {/* Mode Selector Tabs */}
                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {isAr ? 'وسيلة الشحن المطلوبة' : 'Shipping Mode'}
                    </label>
                    <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
                      {[
                        { id: 'sea', ar: 'بحري', en: 'Sea' },
                        { id: 'air', ar: 'جوي', en: 'Air' },
                        { id: 'land', ar: 'بري', en: 'Land' },
                        { id: 'door', ar: 'للباب', en: 'Door' }
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setQuoteInput({ ...quoteInput, mode: m.id as FreightQuoteInput['mode'] })}
                          className={`py-2 px-2 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            quoteInput.mode === m.id
                              ? 'bg-red-700 text-white'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          {isAr ? m.ar : m.en}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Numeric Inputs */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div>
                      <label htmlFor="calc-tons" className="block text-xs font-medium text-slate-300 mb-1">
                        {isAr ? 'الوزن الإجمالي (طن)' : 'Total Weight (MT)'}
                      </label>
                      <input
                        id="calc-tons"
                        type="number"
                        min={1}
                        max={5000}
                        value={quoteInput.weightTons}
                        onChange={(e) =>
                          setQuoteInput({ ...quoteInput, weightTons: Number(e.target.value) || 1 })
                        }
                        className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="calc-containers" className="block text-xs font-medium text-slate-300 mb-1">
                        {isAr ? 'عدد الحاويات / الشاحنات' : 'Containers / Trucks'}
                      </label>
                      <input
                        id="calc-containers"
                        type="number"
                        min={1}
                        max={100}
                        value={quoteInput.containerCount}
                        onChange={(e) =>
                          setQuoteInput({ ...quoteInput, containerCount: Number(e.target.value) || 1 })
                        }
                        className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-300">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quoteInput.includeCustoms}
                        onChange={(e) => setQuoteInput({ ...quoteInput, includeCustoms: e.target.checked })}
                        className="rounded border-slate-600 text-red-600 focus:ring-red-500"
                      />
                      <span>{isAr ? 'شامل التخليص الجمركي' : 'Include Customs Clearance'}</span>
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quoteInput.includeInsurance}
                        onChange={(e) => setQuoteInput({ ...quoteInput, includeInsurance: e.target.checked })}
                        className="rounded border-slate-600 text-red-600 focus:ring-red-500"
                      />
                      <span>{isAr ? 'شامل تأمين البضائع' : 'Include Cargo Insurance'}</span>
                    </label>
                  </div>
                </div>

                {/* Output Results Box */}
                <div className="mt-5 pt-4 border-t border-slate-800 space-y-3">
                  <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <div>
                      <span className="text-[11px] text-slate-400 block">
                        {isAr ? 'إجمالي الشحن والتخليص التقديري' : 'Estimated Total Freight'}
                      </span>
                      <span className="text-lg font-extrabold font-mono tabular-nums text-white">
                        ${estimate.totalEstimatedUsd.toLocaleString()} USD
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">
                        {isAr ? 'زمن التوصيل المتوقع' : 'Est. Transit Time'}
                      </span>
                      <span className="text-sm font-bold text-amber-400">
                        <span className="font-mono tabular-nums" dir="ltr">{estimate.transitDaysRange}</span>{' '}
                        <span>{isAr ? 'يوم' : 'Days'}</span>
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onRequestQuoteWithSubject(
                        isAr
                          ? `طلب عرض سعر رسمي (${quoteInput.mode.toUpperCase()} - ${quoteInput.weightTons} طن)`
                          : `Official Quote Request (${quoteInput.mode.toUpperCase()} - ${quoteInput.weightTons} MT)`
                      )
                    }
                    className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {isAr ? 'احصل على عرض سعر رسمي لهذه الشحنة' : 'Request Official Quote for This Shipment'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Operational Pillar Strip below Hero Split */}
          <div className="mt-12 pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: isAr ? 'تتبع الشحنة ومراقبتها' : 'Shipment Tracking & Visibility',
                desc: isAr
                  ? 'نستخدم أحدث التقنيات لتتبع الشحنات على مدار الساعة مما يوفر للعملاء رؤية دقيقة.'
                  : '24/7 shipment monitoring providing clients with real-time milestone visibility.',
                linkSlug: 'door-to-door'
              },
              {
                title: isAr ? 'دعم العملاء 24/7' : '24/7 Dedicated Client Support',
                desc: isAr
                  ? 'يقدم فريق العمل خدمة عملاء استثنائية مع التزامنا بتلبية احتياجات عملائنا وتجاوز توقعاتهم.'
                  : 'Dedicated operations specialists ensuring rapid response across all time zones.',
                linkSlug: 'customs-clearance'
              },
              {
                title: isAr ? 'الاستدامة والكفاءة' : 'Sustainability & Efficiency',
                desc: isAr
                  ? 'نسعى جاهدين لتحقيق التوازن بين النجاح التجاري والاستدامة من خلال اعتماد ممارسات مسؤولة.'
                  : 'Balancing commercial speed with responsible, compliant global supply chain practices.',
                linkSlug: 'iso-certs'
              },
              {
                title: isAr ? 'حلول الأعمال المتكاملة' : 'Integrated Trade Solutions',
                desc: isAr
                  ? 'نقدم حلولاً شاملة في التصدير والشحن والتخليص ورد أعباء الصادرات وتراخيص التنمية الصناعية.'
                  : 'Comprehensive execution covering freight, customs, export rebates, and IDA licensing.',
                linkSlug: 'rebate-services'
              }
            ].map((pillar) => (
              <div
                key={pillar.linkSlug}
                className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <a
                    href={`/${pillar.linkSlug}`}
                    onClick={(e) => handleAnchor(e, { type: 'service-detail', slug: pillar.linkSlug })}
                    className="text-xs font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1"
                  >
                    <span>{isAr ? 'اعرف المزيد' : 'Learn More'}</span>
                    {isAr ? <ArrowUpLeft className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: All 11 Services Organized with Dedicated Direct Links (Fixes high-contrast Light Mode) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
            <div>
              <p className="text-xs font-bold text-red-700">
                {isAr ? 'منظومة خدماتنا المتكاملة · 11 خدمة متخصصة' : 'OUR INTEGRATED CAPABILITIES · 11 SPECIALIZED SERVICES'}
              </p>
              <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-slate-950">
                {isAr ? 'خدماتنا اللوجستية والتجارية والصناعية' : 'Comprehensive Logistics, Customs & Industrial Services'}
              </h2>
              <p className="mt-3 text-base text-slate-700 max-w-2xl">
                {isAr
                  ? 'نقدم خدمات متكاملة تشمل التصدير والشحن بكافة أنواعه، التخليص الجمركي، وإدارة سلاسل الإمداد. كل خدمة لها صفحة مستقلة ورابط مباشر خاص بها.'
                  : 'Explore our 11 core services. Each service features a dedicated page with its own direct URL, operational checklist, and technical specifications.'}
              </p>
            </div>

            {/* Interactive Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200 self-start">
              {[
                { id: 'all', ar: 'جميع الخدمات (11)', en: 'All Services (11)' },
                { id: 'freight', ar: 'الشحن والنقل (5)', en: 'Freight & Shipping (5)' },
                { id: 'customs-trade', ar: 'الجمارك والتجارة (3)', en: 'Customs & Trade (3)' },
                { id: 'corporate-industrial', ar: 'دعم الصادرات والصناعة (3)', en: 'Export Support & ISO (3)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedServiceCat(tab.id as typeof selectedServiceCat)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedServiceCat === tab.id
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {isAr ? tab.ar : tab.en}
                </button>
              ))}
            </div>
          </div>

          {/* Numbered Asymmetric Bento Service Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleServices.map((service, idx) => {
              const isFeatured = idx === 0 && selectedServiceCat === 'all';
              return (
                <article
                  key={service.slug}
                  className={`group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all p-6 flex flex-col justify-between ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    {/* Visual Banner */}
                    <ServiceVisualBanner
                      type={service.illustrationType}
                      code={service.number}
                      title={isAr ? service.title.ar : service.title.en}
                      subtitle={`/${service.slug}`}
                      className="h-48 mb-6"
                    />

                    {/* Quiet unboxed metadata with middle dot separator */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-2">
                      <span className="font-mono text-red-700 tabular-nums">{service.number}.</span>
                      <span>{isAr ? service.categoryLabel.ar : service.categoryLabel.en}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-slate-500" dir="ltr">/{service.slug}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-950 group-hover:text-red-700 transition-colors">
                      <a
                        href={`/${service.slug}`}
                        onClick={(e) => handleAnchor(e, { type: 'service-detail', slug: service.slug })}
                      >
                        {service.number}. {isAr ? service.title.ar : service.title.en}
                      </a>
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-700 leading-relaxed">
                      {isAr ? service.shortDescription.ar : service.shortDescription.en}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-600 font-medium truncate">
                      {service.highlights.map((h) => h.metric).join(' · ')}
                    </div>
                    <a
                      href={`/${service.slug}`}
                      onClick={(e) => handleAnchor(e, { type: 'service-detail', slug: service.slug })}
                      className="text-xs font-extrabold text-red-700 hover:text-red-800 whitespace-nowrap shrink-0 inline-flex items-center gap-1"
                    >
                      <span>{isAr ? 'تفاصيل الخدمة' : 'Service Details'}</span>
                      {isAr ? <ArrowUpLeft className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose El Masria (High-Contrast Structured Section replacing washed-out gradient banner) */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-bold text-red-400">
                {isAr ? 'لماذا تختارنا · معايير الجودة والالتزام' : 'WHY PARTNER WITH EL MASRIA TRADING'}
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                {isAr
                  ? 'الشركة المصرية للتجارة والتوريدات العمومية'
                  : 'Decades of Proven Trade & Logistics Mastery'}
              </h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                {isAr
                  ? 'نجمع بين الخبرة الميدانية العميقة في الموانئ والجمارك المصرية وبين شبكة الوكلاء العالمية لنضمن لعملائنا انتقال بضائعهم بأعلى سرعة وأقل تكلفة تشغيلية.'
                  : 'We combine deep on-the-ground authority across Egyptian ports and regulatory bodies with an international freight network to move your cargo faster and at lower landed cost.'}
              </p>

              {/* Quantitative Proof Metrics */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                  <span className="text-2xl font-extrabold font-mono tabular-nums text-white block">
                    +11
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {isAr ? 'خدمة لوجستية وصناعية متكاملة' : 'Integrated Logistics & Trade Services'}
                  </span>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                  <span className="text-2xl font-extrabold font-mono tabular-nums text-amber-400 block">
                    ISO 9001:2015
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {isAr ? 'نظام إدارة جودة معتمد دولياً' : 'Certified Quality Management System'}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: isAr ? 'خبرة طويلة ومعتمدة' : 'Extensive Industry Experience',
                  text: isAr
                    ? 'نعتمد على سنوات من الخبرة في مجالات التصدير والشحن والتخليص الجمركي في كافة الموانئ.'
                    : 'Built on years of hands-on execution across export trading, multimodal freight, and customs clearance.'
                },
                {
                  num: '02',
                  title: isAr ? 'شراكات استراتيجية عالمية' : 'Strategic Global Partnerships',
                  text: isAr
                    ? 'تعاوننا مع كبريات شركات الشحن البحري والجوي يضمن تقديم خدمات على أعلى مستوى من الجودة.'
                    : 'Direct alliances with premier ocean carriers and airlines guarantee space allocation and competitive rates.'
                },
                {
                  num: '03',
                  title: isAr ? 'احترافية وموثوقية تامة' : 'Professionalism & Reliability',
                  text: isAr
                    ? 'نلتزم بتقديم حلول مخصصة تلبي احتياجات عملائنا بكفاءة ودقة في المواعيد والمستندات.'
                    : 'Tailored logistics solutions engineered for strict schedule adherence and zero documentary errors.'
                },
                {
                  num: '04',
                  title: isAr ? 'خدمات متكاملة ودعم متميز' : 'End-to-End Support & Continuity',
                  text: isAr
                    ? 'نوفر حلولاً شاملة تغطي كافة مراحل العمليات التجارية واللوجستية مع بناء علاقات طويلة الأمد.'
                    : 'Full lifecycle coverage from factory pickup and ISO certification to export rebate collection.'
                }
              ].map((reason) => (
                <div
                  key={reason.num}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-red-400 tabular-nums">
                      {reason.num}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white">{reason.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Expanded Products Catalog Showcase (Fixes empty "منتجاتنا" section in original site) */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <p className="text-xs font-bold text-red-700">
                {isAr ? 'منتجاتنا للتصدير والتوريدات العمومية · 12 خط إنتاج وتوريد' : 'EXPORT & GENERAL SUPPLY CATALOG · 12 PRODUCT LINES'}
              </p>
              <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-slate-950">
                {isAr ? 'كتالوج المنتجات المصرية للتصدير والتوريد' : 'Egyptian Export Commodities & Industrial Supplies'}
              </h2>
              <p className="mt-3 text-base text-slate-700 max-w-2xl">
                {isAr
                  ? 'نقدم مجموعة متنوعة من المنتجات التي تلبي احتياجات عملائنا في مجالات متعددة، بما في ذلك الحاصلات الزراعية، المواد الغذائية، مواد البناء، والمنتجات الصناعية ومواد التعبئة.'
                  : 'We supply high-grade Egyptian agricultural crops, IQF frozen foods, building materials, structural metals, and industrial packaging with full export documentation.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute top-1/2 -translate-y-1/2 start-3 pointer-events-none" />
                <input
                  type="search"
                  value={prodSearch}
                  onChange={(e) => setProdSearch(e.target.value)}
                  placeholder={isAr ? 'ابحث باسم المنتج أو الكود الجمركي...' : 'Search product or HS code...'}
                  aria-label={isAr ? 'ابحث في المنتجات' : 'Search products'}
                  className="ps-9 pe-4 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-red-700 w-full sm:w-64"
                />
              </div>
              <a
                href={buildRouteUrl({ type: 'products-index' })}
                onClick={(e) => handleAnchor(e, { type: 'products-index' })}
                className="px-4 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 text-center"
              >
                {isAr ? 'عرض الكتالوج الكامل (12 منتج)' : 'View All 12 Products'}
              </a>
            </div>
          </div>

          {/* Product Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              { id: 'all', ar: 'الكل', en: 'All Categories' },
              { id: 'agricultural', ar: 'الحاصلات الزراعية الطازجة', en: 'Fresh Produce' },
              { id: 'food-commodities', ar: 'المواد الغذائية والمجمدات', en: 'Foodstuffs & IQF' },
              { id: 'industrial-building', ar: 'مواد البناء والحديد والرخام', en: 'Building & Metals' },
              { id: 'chemicals-packaging', ar: 'الأسمدة ومواد التعبئة', en: 'Fertilizers & Packaging' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedProdCat(cat.id as ProductCategory)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedProdCat === cat.id
                    ? 'bg-red-700 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-950'
                }`}
              >
                {isAr ? cat.ar : cat.en}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map((product) => (
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
                    {/* Unboxed clean metadata */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-2">
                      <span className="text-red-700">
                        {isAr ? product.categoryLabel.ar : product.categoryLabel.en}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">HS {product.hsCode}</span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-950 leading-snug">
                      <a
                        href={buildRouteUrl({ type: 'product-detail', slug: product.slug })}
                        onClick={(e) =>
                          handleAnchor(e, { type: 'product-detail', slug: product.slug })
                        }
                        className="hover:text-red-700 transition-colors"
                      >
                        {isAr ? product.name.ar : product.name.en}
                      </a>
                    </h3>

                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      {isAr ? product.summary.ar : product.summary.en}
                    </p>

                    <dl className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs">
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-500 font-medium">
                          {isAr ? 'التعبئة القياسية:' : 'Packaging:'}
                        </dt>
                        <dd className="text-slate-900 font-semibold text-end truncate max-w-[65%]">
                          {isAr ? product.packaging.ar : product.packaging.en}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-500 font-medium">
                          {isAr ? 'الحد الأدنى للطلب:' : 'Min Order:'}
                        </dt>
                        <dd className="text-slate-900 font-semibold font-mono tabular-nums text-end">
                          {isAr ? product.minOrder.ar : product.minOrder.en}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <a
                    href={buildRouteUrl({ type: 'product-detail', slug: product.slug })}
                    onClick={(e) =>
                      handleAnchor(e, { type: 'product-detail', slug: product.slug })
                    }
                    className="text-xs font-extrabold text-slate-900 hover:text-red-700 inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>{isAr ? 'المواصفات الكاملة' : 'Full Specifications'}</span>
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
                    className="px-3 py-1.5 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isAr ? 'اطلب تسعير' : 'Get Quote'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Clients & Industrial Partners ("عملائنا" from screenshot) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold text-red-700">
              {isAr ? 'شركاء النجاح والثقة' : 'TRUSTED BY LEADING INDUSTRIAL ENTERPRISES'}
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-950">
              {isAr ? 'عملائنا وشركاء الأعمال' : 'Our Clients & Industrial Partners'}
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              {isAr
                ? 'نفتخر بخدمة مجموعة واسعة من العملاء تشمل الشركات الصغيرة والكبيرة، رجال الأعمال، المؤسسات التجارية والصناعية. نؤمن بأن نجاحنا يعتمد على رضا عملائنا وثقتهم.'
                : 'We are proud to serve leading regional and international manufacturers, construction groups, and FMCG enterprises with reliable logistics and supply solutions.'}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CLIENT_PARTNERS.map((partner) => (
              <div
                key={partner.code}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between text-center hover:border-slate-300 transition-colors"
              >
                <div className="py-3 border-b border-slate-200/80">
                  <span className="font-mono text-sm font-extrabold tracking-wider text-slate-900 block">
                    {partner.code}
                  </span>
                </div>
                <div className="pt-3">
                  <p className="text-sm font-bold text-slate-900">
                    {isAr ? partner.arabicName : partner.name}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {isAr ? partner.sector.ar : partner.sector.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
