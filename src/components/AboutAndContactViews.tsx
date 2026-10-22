import React, { useState, useEffect } from 'react';
import {
  SERVICES_DATA,
  PRODUCTS_DATA,
  CLIENT_PARTNERS,
  Language
} from '../data/siteData';
import {
  RouteView,
  validateContactForm,
  ContactFormInput
} from '../utils/siteLogic';
import { IsoSealBadge, ElMasriaLogo } from './VisualArt';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpLeft,
  ArrowUpRight,
  Send
} from 'lucide-react';

interface AboutViewProps {
  lang: Language;
  onNavigate: (route: RouteView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <div>
      {/* Clean High-Contrast About Header */}
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
              {isAr ? 'من نحن (/about)' : 'About Us (/about)'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-bold text-amber-400">
                ISO 9001:2015 CERTIFIED TRADING & LOGISTICS HOUSE
              </p>
              <h1
                className="font-extrabold text-white tracking-tight"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
              >
                {isAr
                  ? 'الشركة المصرية للتجارة والتوريدات العمومية'
                  : 'El Masria for General Trading & Supplies'}
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {isAr
                  ? 'شريكك الاستراتيجي الموثوق لتحقيق النجاح في التصدير، الاستيراد، الشحن الدولي (البحري والجوي والبري)، التخليص الجمركي، وخدمات التنمية الصناعية ورد أعباء الصادرات.'
                  : 'Your strategic partner for international export/import trading, ocean/air/land freight forwarding, customs brokerage, industrial licensing, and export rebate consulting.'}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4">
                <IsoSealBadge className="w-20 h-20 shrink-0" />
                <div>
                  <h2 className="text-base font-extrabold text-white">
                    {isAr ? 'جودة معتمدة دولياً' : 'Internationally Certified'}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {isAr
                      ? 'نلتزم بأعلى معايير نظام إدارة الجودة ISO 9001:2015 في كافة عملياتنا اللوجستية.'
                      : 'Operating under strict ISO 9001:2015 quality management standards across all branches.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Core Pillars */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
              <span className="font-mono text-xs font-bold text-red-700">01. VISION</span>
              <h2 className="mt-2 text-xl font-extrabold text-slate-950">
                {isAr ? 'رؤيتنا' : 'Our Vision'}
              </h2>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'أن نكون الخيار الأول والشريك اللوجستي والتجاري الأكثر موثوقية للمصدرين والمستوردين والمصانع في مصر والشرق الأوسط من خلال تقديم حلول متكاملة تربط الإنتاج المحلي بالأسواق العالمية.'
                  : 'To be the premier, most reliable logistics and trading bridge connecting Egyptian manufacturers and agricultural producers with international markets.'}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
              <span className="font-mono text-xs font-bold text-red-700">02. MISSION</span>
              <h2 className="mt-2 text-xl font-extrabold text-slate-950">
                {isAr ? 'رسالتنا' : 'Our Mission'}
              </h2>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'تيسير حركة التجارة الدولية وتقليل زمن وتكلفة الشحن والتخليص الجمركي، مع تعظيم عوائد المصدرين عبر برامج رد أعباء الصادرات وتأهيل المصانع بشهادات الجودة العالمية.'
                  : 'Streamlining international trade by reducing transit times and customs clearance costs while maximizing exporter returns through rebate programs and ISO compliance.'}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
              <span className="font-mono text-xs font-bold text-red-700">03. QUALITY & SUSTAINABILITY</span>
              <h2 className="mt-2 text-xl font-extrabold text-slate-950">
                {isAr ? 'قيمنا والالتزام' : 'Core Values'}
              </h2>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'الشفافية التامة في التسعير، الدقة المستندية لتجنب أي غرامات جمركية، المتابعة اللحظية للشحنات على مدار الساعة، وبناء شراكات استراتيجية طويلة الأمد.'
                  : 'Transparent pricing, zero-defect customs documentation, 24/7 shipment monitoring, and sustainable long-term industrial partnerships.'}
              </p>
            </div>
          </div>

          {/* Complete URL Sitemap Table for Quick Access */}
          <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-extrabold text-slate-950">
              {isAr
                ? 'خريطة روابط الموقع المباشرة (دلـيل الصفحات المستقلة)'
                : 'Complete Site URL Directory (Dedicated Pages)'}
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              {isAr
                ? 'يمكنك الوصول مباشرة إلى أي خدمة أو منتج عبر الرابط المخصص له:'
                : 'Access any of our 11 services or 12 export product pages directly via its dedicated URL:'}
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-red-700 pb-2 border-b border-slate-200">
                  {isAr ? 'صفحات الخدمات (11 رابط مستقل)' : 'Service Pages (11 Direct URLs)'}
                </h3>
                <ul className="mt-3 space-y-2 text-xs">
                  {SERVICES_DATA.map((s) => (
                    <li key={s.slug} className="flex items-center justify-between py-1 border-b border-slate-200/60">
                      <a
                        href={`/${s.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate({ type: 'service-detail', slug: s.slug });
                        }}
                        className="font-bold text-slate-900 hover:text-red-700"
                      >
                        {s.number}. {isAr ? s.title.ar : s.title.en}
                      </a>
                      <span className="font-mono text-slate-500" dir="ltr">/{s.slug}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-red-700 pb-2 border-b border-slate-200">
                  {isAr ? 'صفحات المنتجات (12 رابط مستقل)' : 'Product Pages (12 Direct URLs)'}
                </h3>
                <ul className="mt-3 space-y-2 text-xs">
                  {PRODUCTS_DATA.map((p) => (
                    <li key={p.id} className="flex items-center justify-between py-1 border-b border-slate-200/60">
                      <a
                        href={`/products/${p.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate({ type: 'product-detail', slug: p.slug });
                        }}
                        className="font-bold text-slate-900 hover:text-red-700 truncate max-w-[65%]"
                      >
                        {isAr ? p.name.ar : p.name.en}
                      </a>
                      <span className="font-mono text-slate-500" dir="ltr">/products/{p.slug}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactViewProps {
  lang: Language;
  initialSubject?: string;
  onNavigate: (route: RouteView) => void;
}

export interface SubmittedInquiry extends ContactFormInput {
  referenceId: string;
  submittedAt: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  lang,
  initialSubject = '',
  onNavigate
}) => {
  const isAr = lang === 'ar';

  const [form, setForm] = useState<ContactFormInput>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceOrProduct: initialSubject || (isAr ? 'الشحن البحري' : 'Sea Freight Services'),
    message: initialSubject
      ? isAr
        ? `نرجو التكرم بإرسال عرض سعر وتفاصيل بخصوص: ${initialSubject}`
        : `Please provide an official quote and details regarding: ${initialSubject}`
      : ''
  });

  useEffect(() => {
    if (initialSubject) {
      setForm((prev) => ({
        ...prev,
        serviceOrProduct: initialSubject,
        message: isAr
          ? `نرجو التكرم بإرسال عرض سعر وتفاصيل بخصوص: ${initialSubject}`
          : `Please provide an official quote and details regarding: ${initialSubject}`
      }));
    }
  }, [initialSubject, isAr]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [submittedList, setSubmittedList] = useState<SubmittedInquiry[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const newInquiry: SubmittedInquiry = {
      ...form,
      referenceId: `ELM-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toLocaleTimeString(isAr ? 'ar-EG' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setSubmittedList((prev) => [newInquiry, ...prev]);
    setForm({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      serviceOrProduct: isAr ? 'الشحن البحري' : 'Sea Freight Services',
      message: ''
    });
  };

  return (
    <div>
      {/* High-Contrast Header */}
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
              {isAr ? 'إتصل بنا وطلب عروض الأسعار (/contact)' : 'Contact & Quote Request (/contact)'}
            </span>
          </div>

          <h1
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}
          >
            {isAr
              ? 'تواصل مع الشركة المصرية للتجارة والتوريدات العمومية'
              : 'Contact El Masria Trading & Request a Quote'}
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {isAr
              ? 'فريق خدمة العملاء والعمليات اللوجستية متاح على مدار الساعة (24/7) للرد على طلبات الشحن، التخليص الجمركي، وتوريد المنتجات التصديرية.'
              : 'Our logistics, customs brokerage, and export supply specialists are available 24/7 to provide rapid quotations and operational support.'}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-950">
                {isAr ? 'نموذج طلب عرض سعر أو استشارة مجانية' : 'Request an Official Quotation or Consultation'}
              </h2>
              <p className="mt-1 text-sm text-slate-700">
                {isAr
                  ? 'يرجى ملء البيانات التالية وسيقوم القسم المختص بالتواصل معكم فوراً.'
                  : 'Complete the form below and our relevant department will respond promptly.'}
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-900 mb-1.5">
                      {isAr ? 'الاسم بالكامل *' : 'Full Name *'}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder={isAr ? 'مثال: محمد عبد الرحمن' : 'e.g. Mohamed Abdelrahman'}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-red-700"
                    />
                    {errors.fullName && (
                      <p role="alert" className="mt-1 text-xs font-semibold text-red-700">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-bold text-slate-900 mb-1.5">
                      {isAr ? 'اسم الشركة أو المؤسسة' : 'Company / Organization'}
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      placeholder={isAr ? 'اسم المصنع أو الشركة التجارية' : 'Your company name'}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-red-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-900 mb-1.5">
                      {isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp Number *'}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+20 100 000 0000"
                      className="w-full px-3.5 py-2.5 text-sm font-mono bg-white border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-red-700"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1 text-xs font-semibold text-red-700">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-900 mb-1.5">
                      {isAr ? 'البريد الإلكتروني الرسمي *' : 'Business Email *'}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      dir="ltr"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-red-700"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-xs font-semibold text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-bold text-slate-900 mb-1.5">
                    {isAr ? 'الخدمة أو المنتج المطلوب' : 'Requested Service or Export Product'}
                  </label>
                  <select
                    id="contact-service"
                    value={form.serviceOrProduct}
                    onChange={(e) => setForm({ ...form, serviceOrProduct: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-red-700"
                  >
                    <optgroup label={isAr ? 'خدمات الشحن والتخليص والأعمال' : 'Logistics & Trade Services'}>
                      {SERVICES_DATA.map((s) => (
                        <option key={s.slug} value={isAr ? s.title.ar : s.title.en}>
                          {s.number}. {isAr ? s.title.ar : s.title.en} (/{s.slug})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label={isAr ? 'منتجات التصدير والتوريدات' : 'Export & Supply Products'}>
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={isAr ? p.name.ar : p.name.en}>
                          {isAr ? p.name.ar : p.name.en} ({p.code})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-900 mb-1.5">
                    {isAr ? 'تفاصيل الشحنة أو الطلب التجاري *' : 'Shipment or Order Details *'}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={
                      isAr
                        ? 'اذكر نوع البضاعة، الوزن أو عدد الحاويات، وميناء القيام والوصول...'
                        : 'Specify commodity, weight/containers, origin port, and destination...'
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-red-700"
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1 text-xs font-semibold text-red-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال الطلب وتأكيد الاستلام' : 'Submit Quote Request'}</span>
                </button>
              </form>

              {/* Submitted Inquiries List (End-to-End State Verification) */}
              {submittedList.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
                  <h3 className="text-sm font-extrabold text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>
                      {isAr
                        ? `تم تسجيل طلبك بنجاح (${submittedList.length})`
                        : `Submitted Requests (${submittedList.length})`}
                    </span>
                  </h3>
                  {submittedList.map((item) => (
                    <div
                      key={item.referenceId}
                      className="bg-white border border-emerald-200 rounded-xl p-4 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between font-mono text-slate-700">
                        <strong className="text-emerald-800">REF: {item.referenceId}</strong>
                        <span>{item.submittedAt}</span>
                      </div>
                      <p className="font-bold text-slate-950">
                        {item.fullName} {item.companyName ? `— ${item.companyName}` : ''}
                      </p>
                      <p className="text-slate-700">
                        <strong>{isAr ? 'القسم:' : 'Service/Product:'}</strong> {item.serviceOrProduct}
                      </p>
                      <p className="text-slate-600">{item.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Contact Channels & Ports Coverage (5 cols) */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-xs font-mono text-red-400">DIRECT CHANNELS · 24/7</p>
                  <h3 className="mt-1 text-xl font-extrabold text-white">
                    {isAr ? 'بيانات الاتصال المباشر' : 'Direct Contact Information'}
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        {isAr ? 'الهاتف والخط الساخن (24/7)' : 'Phone & 24/7 Operations'}
                      </span>
                      <span className="font-mono font-bold text-white tabular-nums block mt-0.5" dir="ltr">
                        +20 100 584 9210 / +20 2 2418 7900
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        {isAr ? 'البريد الإلكتروني الرسمي' : 'Official Email'}
                      </span>
                      <span className="font-mono font-bold text-white block mt-0.5">
                        info@elmasria-trading.com
                      </span>
                      <span className="font-mono text-xs text-slate-300 block">
                        export@elmasria-trading.com
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        {isAr ? 'المقر الرئيسي والفروع الجمركية' : 'Headquarters & Port Offices'}
                      </span>
                      <span className="text-white font-semibold block mt-0.5">
                        {isAr
                          ? 'القاهرة، جمهورية مصر العربية — مع مكاتب تمثيل وتخليص في موانئ الإسكندرية، الدخيلة، العين السخنة، دمياط، بورسعيد، وقرية البضائع بمطار القاهرة الدولي.'
                          : 'Cairo, Egypt — With licensed customs and port offices in Alexandria, Dekheila, Ain Sokhna, Damietta, Port Said, and Cairo Airport Cargo Village.'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        {isAr ? 'مواعيد العمل والدعم' : 'Operating Hours'}
                      </span>
                      <span className="text-white font-semibold block mt-0.5">
                        {isAr
                          ? 'متابعة الشحنات والتخليص الجمركي على مدار 24 ساعة طوال أيام الأسبوع.'
                          : '24/7 Continuous Shipment Monitoring & Customs Support.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
