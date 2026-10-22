import React from 'react';
import {
  Ship,
  Plane,
  Truck,
  PackageCheck,
  Warehouse,
  FileCheck2,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Award,
  Factory,
  Citrus,
  Apple,
  Wheat,
  Snowflake,
  Sparkles,
  Droplets,
  Palmtree,
  Building2,
  Layers,
  Hammer,
  FlaskConical,
  Boxes
} from 'lucide-react';
import { ServiceItem, ExportProduct } from '../data/siteData';

export const ElMasriaLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <circle cx="32" cy="32" r="30" className="stroke-slate-900" strokeWidth="2.5" fill="#FFFFFF" />
    <circle cx="32" cy="32" r="25" className="stroke-red-700" strokeWidth="1.2" strokeDasharray="4 2" />
    {/* Ship hull */}
    <path
      d="M16 38L20 46H44L48 38L32 34L16 38Z"
      fill="#0F172A"
    />
    {/* Containers */}
    <rect x="22" y="27" width="9" height="7" rx="1" fill="#B91C1C" />
    <rect x="33" y="27" width="9" height="7" rx="1" fill="#1E3A8A" />
    {/* Airplane silhouette */}
    <path
      d="M20 18L42 13L37 21L29 20L24 23L23 20L20 18Z"
      fill="#B91C1C"
    />
    {/* Sea waves */}
    <path
      d="M14 49C19 47 23 51 28 49C33 47 37 51 42 49C46 47.5 48 49 50 49"
      stroke="#0284C7"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const IsoSealBadge: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className} aria-label="ISO 9001:2015 Certified Company">
    <circle cx="60" cy="60" r="56" fill="#0F172A" stroke="#D97706" strokeWidth="3" />
    <circle cx="60" cy="60" r="48" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
    <text x="60" y="34" textAnchor="middle" fill="#FBBF24" fontSize="9" fontWeight="700" letterSpacing="1.5">
      CERTIFIED
    </text>
    <text x="60" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="800" letterSpacing="1">
      ISO
    </text>
    <text x="60" y="79" textAnchor="middle" fill="#FDE68A" fontSize="10" fontWeight="700">
      9001:2015
    </text>
    <text x="60" y="96" textAnchor="middle" fill="#FBBF24" fontSize="8.5" fontWeight="700" letterSpacing="1.5">
      COMPANY
    </text>
  </svg>
);

export const ServiceVisualBanner: React.FC<{
  type: ServiceItem['illustrationType'];
  code: string;
  title: string;
  subtitle?: string;
  className?: string;
}> = ({ type, code, title, subtitle, className = 'h-64' }) => {
  const getTheme = () => {
    switch (type) {
      case 'sea':
        return {
          bg: 'from-slate-900 via-sky-950 to-slate-900',
          accent: 'text-sky-300',
          border: 'border-sky-500/30',
          Icon: Ship,
          tag: 'OCEAN FREIGHT · FCL / LCL / CHARTER'
        };
      case 'air':
        return {
          bg: 'from-slate-900 via-indigo-950 to-slate-900',
          accent: 'text-indigo-300',
          border: 'border-indigo-500/30',
          Icon: Plane,
          tag: 'AIR CARGO · IATA EXPRESS NETWORK'
        };
      case 'land':
        return {
          bg: 'from-slate-900 via-stone-900 to-slate-950',
          accent: 'text-amber-300',
          border: 'border-amber-500/30',
          Icon: Truck,
          tag: 'LAND TRANSPORT · DRY & REEFER FLEET'
        };
      case 'door':
        return {
          bg: 'from-slate-900 via-red-950 to-slate-900',
          accent: 'text-red-300',
          border: 'border-red-500/30',
          Icon: PackageCheck,
          tag: 'DOOR-TO-DOOR · MULTIMODAL LOGISTICS'
        };
      case 'warehouse':
        return {
          bg: 'from-slate-900 via-emerald-950 to-slate-900',
          accent: 'text-emerald-300',
          border: 'border-emerald-500/30',
          Icon: Warehouse,
          tag: 'EX-WORKS PICKUP · 4-STAGE QC INSPECTION'
        };
      case 'customs':
        return {
          bg: 'from-slate-900 via-blue-950 to-slate-900',
          accent: 'text-blue-300',
          border: 'border-blue-500/30',
          Icon: FileCheck2,
          tag: 'CUSTOMS BROKERAGE · ACI & NAFEZA'
        };
      case 'import-export':
        return {
          bg: 'from-slate-900 via-cyan-950 to-slate-900',
          accent: 'text-cyan-300',
          border: 'border-cyan-500/30',
          Icon: Globe2,
          tag: 'GLOBAL TRADE · IMPORT & EXPORT ADVISORY'
        };
      case 'insurance':
        return {
          bg: 'from-slate-900 via-teal-950 to-slate-900',
          accent: 'text-teal-300',
          border: 'border-teal-500/30',
          Icon: ShieldCheck,
          tag: 'CARGO INSURANCE · ICC ALL-RISK COVERAGE'
        };
      case 'rebate':
        return {
          bg: 'from-slate-900 via-rose-950 to-slate-900',
          accent: 'text-rose-300',
          border: 'border-rose-500/30',
          Icon: TrendingUp,
          tag: 'EXPORT REBATES · SUBSIDY & DRAWBACK'
        };
      case 'iso':
        return {
          bg: 'from-slate-900 via-amber-950 to-slate-900',
          accent: 'text-amber-300',
          border: 'border-amber-500/30',
          Icon: Award,
          tag: 'ISO 9001 / 22000 / 14001 / 45001'
        };
      case 'industrial':
      default:
        return {
          bg: 'from-slate-900 via-slate-800 to-slate-950',
          accent: 'text-orange-300',
          border: 'border-orange-500/30',
          Icon: Factory,
          tag: 'INDUSTRIAL DEVELOPMENT · IDA LICENSING'
        };
    }
  };

  const { bg, accent, border, Icon, tag } = getTheme();

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${bg} p-6 text-white flex flex-col justify-between border border-slate-800 ${className}`}
    >
      {/* Subtle architectural grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${type}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${type})`} />
      </svg>

      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-wider text-slate-300 tabular-nums">
          {code} · {tag}
        </span>
        <div className={`w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm border ${border} flex items-center justify-center shrink-0`}>
          <Icon className={`w-5 h-5 ${accent}`} />
        </div>
      </div>

      {/* Decorative vector schematic lines */}
      <div className="relative z-10 my-auto py-4">
        <div className="flex items-center gap-3 opacity-80">
          <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent" />
          <Icon className={`w-12 h-12 ${accent} opacity-90`} strokeWidth={1.5} />
          <div className="h-px flex-1 bg-gradient-to-l from-white/40 to-transparent" />
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-base font-bold text-white leading-snug">{title}</p>
        {subtitle && <p className="text-xs text-slate-300 mt-1 line-clamp-1">{subtitle}</p>}
      </div>
    </div>
  );
};

export const ProductVisualCardHeader: React.FC<{
  theme: ExportProduct['visualTheme'];
  code: string;
  hsCode: string;
  origin: string;
  className?: string;
}> = ({ theme, code, hsCode, origin, className = 'h-48' }) => {
  const getProductTheme = () => {
    switch (theme) {
      case 'citrus':
        return {
          bg: 'from-orange-950 via-amber-900 to-slate-900',
          accent: 'text-orange-300',
          Icon: Citrus
        };
      case 'pomegranate':
        return {
          bg: 'from-rose-950 via-red-900 to-slate-900',
          accent: 'text-rose-300',
          Icon: Apple
        };
      case 'potato':
        return {
          bg: 'from-amber-950 via-yellow-900 to-slate-900',
          accent: 'text-amber-300',
          Icon: Wheat
        };
      case 'strawberry':
        return {
          bg: 'from-red-950 via-rose-900 to-slate-900',
          accent: 'text-red-300',
          Icon: Snowflake
        };
      case 'legumes':
        return {
          bg: 'from-emerald-950 via-teal-900 to-slate-900',
          accent: 'text-emerald-300',
          Icon: Sparkles
        };
      case 'olive-oil':
        return {
          bg: 'from-lime-950 via-emerald-900 to-slate-900',
          accent: 'text-lime-300',
          Icon: Droplets
        };
      case 'dates':
        return {
          bg: 'from-stone-900 via-amber-950 to-slate-900',
          accent: 'text-amber-300',
          Icon: Palmtree
        };
      case 'cement':
        return {
          bg: 'from-slate-800 via-slate-900 to-zinc-950',
          accent: 'text-sky-300',
          Icon: Building2
        };
      case 'marble':
        return {
          bg: 'from-stone-800 via-stone-900 to-slate-950',
          accent: 'text-stone-300',
          Icon: Layers
        };
      case 'steel':
        return {
          bg: 'from-slate-900 via-blue-950 to-zinc-950',
          accent: 'text-blue-300',
          Icon: Hammer
        };
      case 'fertilizer':
        return {
          bg: 'from-cyan-950 via-slate-900 to-slate-950',
          accent: 'text-cyan-300',
          Icon: FlaskConical
        };
      case 'packaging':
      default:
        return {
          bg: 'from-indigo-950 via-slate-900 to-slate-950',
          accent: 'text-indigo-300',
          Icon: Boxes
        };
    }
  };

  const { bg, accent, Icon } = getProductTheme();

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${bg} p-5 text-white flex flex-col justify-between ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`prod-grid-${theme}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#prod-grid-${theme})`} />
      </svg>

      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-200 tabular-nums">
        <span>{code}</span>
        <span>HS {hsCode}</span>
      </div>

      <div className="relative z-10 flex items-center justify-center my-auto">
        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center">
          <Icon className={`w-9 h-9 ${accent}`} strokeWidth={1.6} />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-slate-200">
        <span className="truncate">{origin}</span>
        <span className="font-mono text-[11px] text-white/90">EXPORT GRADE</span>
      </div>
    </div>
  );
};
