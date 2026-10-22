/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SERVICES_DATA, PRODUCTS_DATA, Language } from './data/siteData';
import { RouteView, parseRoute, buildRouteUrl } from './utils/siteLogic';
import { SiteLayout } from './components/SiteLayout';
import { HomeView } from './components/HomeView';
import { ServicesIndexView, ServiceDetailView } from './components/ServicesViews';
import { ProductsIndexView, ProductDetailView } from './components/ProductsViews';
import { AboutView, ContactView } from './components/AboutAndContactViews';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [route, setRoute] = useState<RouteView>(() => {
    if (typeof window !== 'undefined') {
      const initialPath =
        window.location.hash && window.location.hash.length > 1
          ? window.location.hash
          : window.location.pathname;
      return parseRoute(initialPath);
    }
    return { type: 'home' };
  });

  const [contactSubject, setContactSubject] = useState<string>('');

  // Listen to browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const activePath =
        window.location.hash && window.location.hash.length > 1
          ? window.location.hash
          : window.location.pathname;
      setRoute(parseRoute(activePath));
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Sync document title & direction when route or language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const baseTitle =
      lang === 'ar'
        ? 'الشركة المصرية للتجارة والتوريدات العمومية'
        : 'El Masria Trading & Supplies';

    if (route.type === 'service-detail') {
      const srv = SERVICES_DATA.find((s) => s.slug === route.slug);
      if (srv) {
        document.title = `${lang === 'ar' ? srv.title.ar : srv.title.en} | ${baseTitle}`;
        return;
      }
    }
    if (route.type === 'product-detail') {
      const prod = PRODUCTS_DATA.find((p) => p.slug === route.slug);
      if (prod) {
        document.title = `${lang === 'ar' ? prod.name.ar : prod.name.en} | ${baseTitle}`;
        return;
      }
    }
    document.title = baseTitle;
  }, [route, lang]);

  const navigate = (nextRoute: RouteView) => {
    const nextUrl = buildRouteUrl(nextRoute);
    try {
      window.history.pushState({}, '', nextUrl);
    } catch {
      window.location.hash = nextUrl;
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuoteWithSubject = (subject: string) => {
    setContactSubject(subject);
    navigate({ type: 'contact', subject });
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const renderActiveView = () => {
    switch (route.type) {
      case 'home':
        return (
          <HomeView
            lang={lang}
            onNavigate={navigate}
            onRequestQuoteWithSubject={handleRequestQuoteWithSubject}
          />
        );
      case 'services-index':
        return (
          <ServicesIndexView
            lang={lang}
            onNavigate={navigate}
            onRequestQuoteWithSubject={handleRequestQuoteWithSubject}
          />
        );
      case 'service-detail': {
        const service =
          SERVICES_DATA.find((s) => s.slug === route.slug) || SERVICES_DATA[0];
        return (
          <ServiceDetailView
            service={service}
            lang={lang}
            onNavigate={navigate}
            onRequestQuoteWithSubject={handleRequestQuoteWithSubject}
          />
        );
      }
      case 'products-index':
        return (
          <ProductsIndexView
            lang={lang}
            onNavigate={navigate}
            onRequestQuoteWithSubject={handleRequestQuoteWithSubject}
          />
        );
      case 'product-detail': {
        const product =
          PRODUCTS_DATA.find((p) => p.slug === route.slug) || PRODUCTS_DATA[0];
        return (
          <ProductDetailView
            product={product}
            lang={lang}
            onNavigate={navigate}
            onRequestQuoteWithSubject={handleRequestQuoteWithSubject}
          />
        );
      }
      case 'about':
        return <AboutView lang={lang} onNavigate={navigate} />;
      case 'contact':
        return (
          <ContactView
            lang={lang}
            initialSubject={contactSubject}
            onNavigate={navigate}
          />
        );
      default:
        return (
          <HomeView
            lang={lang}
            onNavigate={navigate}
            onRequestQuoteWithSubject={handleRequestQuoteWithSubject}
          />
        );
    }
  };

  return (
    <SiteLayout
      lang={lang}
      currentRoute={route}
      onNavigate={navigate}
      onToggleLanguage={toggleLanguage}
    >
      {renderActiveView()}
    </SiteLayout>
  );
}

