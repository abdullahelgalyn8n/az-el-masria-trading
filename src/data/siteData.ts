export type Language = 'ar' | 'en';

export interface BilingualText {
  ar: string;
  en: string;
}

export interface ServiceBenefit {
  title: BilingualText;
  description: BilingualText;
}

export interface ServiceSubSection {
  title: BilingualText;
  description?: BilingualText;
  items: {
    label?: BilingualText;
    text: BilingualText;
  }[];
}

export interface ServiceItem {
  slug: string;
  number: string;
  category: 'freight' | 'customs-trade' | 'corporate-industrial';
  categoryLabel: BilingualText;
  title: BilingualText;
  shortDescription: BilingualText;
  fullIntro: BilingualText;
  secondaryIntro?: BilingualText;
  illustrationType: 'sea' | 'air' | 'land' | 'door' | 'warehouse' | 'customs' | 'import-export' | 'insurance' | 'rebate' | 'iso' | 'industrial';
  benefitsTitle: BilingualText;
  benefits: ServiceBenefit[];
  subSections?: ServiceSubSection[];
  highlights: {
    metric: string;
    label: BilingualText;
  }[];
}

export type ProductCategory = 'all' | 'agricultural' | 'food-commodities' | 'industrial-building' | 'chemicals-packaging';

export interface ExportProduct {
  id: string;
  slug: string;
  code: string;
  hsCode: string;
  category: Exclude<ProductCategory, 'all'>;
  categoryLabel: BilingualText;
  name: BilingualText;
  summary: BilingualText;
  description: BilingualText;
  origin: BilingualText;
  seasonOrAvailability: BilingualText;
  packaging: BilingualText;
  minOrder: BilingualText;
  shippingModes: BilingualText;
  certifications: string[];
  specs: {
    label: BilingualText;
    value: BilingualText;
  }[];
  visualTheme: 'citrus' | 'pomegranate' | 'potato' | 'strawberry' | 'legumes' | 'olive-oil' | 'dates' | 'steel' | 'cement' | 'marble' | 'fertilizer' | 'packaging';
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: 'sea-freight',
    number: '01',
    category: 'freight',
    categoryLabel: { ar: 'الشحن الدولي', en: 'International Freight' },
    title: { ar: 'الشحن البحري', en: 'Sea Freight Services' },
    shortDescription: {
      ar: 'حلول شحن بحري متكاملة عبر الحاويات القياسية والمبردة أو استئجار السفن الكاملة بالتعاون مع كبرى الخطوط الملاحية العالمية.',
      en: 'Comprehensive ocean freight solutions via FCL/LCL containers and full vessel chartering with premier global shipping lines.'
    },
    fullIntro: {
      ar: 'تتعاون الشركة المصرية مع شركات شحن بحرية رائدة على مستوى العالم لضمان حصول عملائها على أفضل خدمة ممكنة. تتميز هذه الشركات بخبرتها الواسعة في مجال الشحن البحري، وشبكاتها العالمية، والتزامها بمعايير السلامة والجودة.',
      en: 'El Masria Trading partners with world-leading maritime carriers to guarantee optimal reliability, global port coverage, and strict adherence to international safety and quality standards.'
    },
    secondaryIntro: {
      ar: 'تُعد الحاويات الطريقة الأكثر شيوعاً لنقل البضائع عبر البحار، وهي مناسبة لمجموعة واسعة من السلع، من الملابس والأجهزة الإلكترونية إلى قطع غيار الآلات والمواد الغذائية المبردة والجافة.',
      en: 'Containerized shipping is the most efficient method for ocean cargo, suitable for textiles, electronics, machinery parts, and temperature-controlled food products.'
    },
    illustrationType: 'sea',
    benefitsTitle: { ar: 'مميزات استخدام الحاويات البحرية', en: 'Advantages of Containerized Sea Freight' },
    benefits: [
      {
        title: { ar: 'كفاءة عالية', en: 'High Capacity Efficiency' },
        description: { ar: 'تُتيح نقل كميات كبيرة من البضائع في رحلة واحدة بجدولة منتظمة.', en: 'Allows transporting large cargo volumes in a single voyage with regular sailing schedules.' }
      },
      {
        title: { ar: 'تقليل التلف', en: 'Maximum Cargo Protection' },
        description: { ar: 'توفر حماية قوية للبضائع من العوامل الجوية والخارجية طوال الرحلة.', en: 'Provides robust structural protection against weather and external handling risks.' }
      },
      {
        title: { ar: 'سهولة المناولة', en: 'Streamlined Handling' },
        description: { ar: 'تُسهل عمليات التحميل والتفريغ والنقل متعدد الوسائط بين الميناء والمخازن.', en: 'Simplifies loading, discharging, and intermodal transfer between ports and warehouses.' }
      },
      {
        title: { ar: 'خفض التكاليف', en: 'Cost Optimization' },
        description: { ar: 'تُقلل من تكاليف الشحن والتخزين للكميات التجارية والتصديرية الكبيرة.', en: 'Significantly reduces per-unit freight and storage costs for commercial bulk shipments.' }
      },
      {
        title: { ar: 'التنوع في الحاويات', en: 'Versatile Container Types' },
        description: { ar: 'تتوفر بأشكال وأحجام مختلفة (20 قدم، 40 قدم، High Cube، وحاويات مبردة Reefer).', en: 'Available in 20ft, 40ft, High Cube, Open Top, and temperature-controlled Reefer units.' }
      }
    ],
    subSections: [
      {
        title: { ar: 'الشحن في سفن كاملة (Full Vessel Charter)', en: 'Full Vessel Chartering (Bulk & Breakbulk)' },
        description: {
          ar: 'هو نوع من الشحن البحري حيث يتم استئجار سفينة كاملة لنقل كمية كبيرة من البضائع من مرسل واحد إلى مستلم واحد. تُستخدم هذه الطريقة عادةً لنقل الحبوب، الفحم، الخامات الصناعية، أو البضائع السائبة.',
          en: 'Chartering an entire vessel to transport massive quantities of commodities from a single shipper to a single consignee, ideal for grains, minerals, cement, and heavy project cargo.'
        },
        items: [
          {
            label: { ar: 'انخفاض التكلفة', en: 'Lower Unit Cost' },
            text: { ar: 'عادةً ما تكون تكلفة الشحن في سفن كاملة أرخص للكميات الضخمة لأنك تدفع مقابل المساحة الكلية للسفينة بدلاً من حاويات منفردة.', en: 'More economical for massive bulk tonnages compared to multiple individual containers.' }
          },
          {
            label: { ar: 'الكفاءة الزمنية', en: 'Time Efficiency' },
            text: { ar: 'يتم تحميل وتفريغ البضائع بشكل مباشر وأسرع دون الحاجة لتعبئة وتفريغ الحاويات الوسيطة.', en: 'Direct port loading and discharging eliminates intermediate container stuffing delays.' }
          },
          {
            label: { ar: 'المرونة الكاملة', en: 'Route & Schedule Flexibility' },
            text: { ar: 'يمكن تخصيص سفن الشحن الكاملة لتناسب احتياجات الشحن الخاصة بك من حيث نوع البضائع وكميتها وميناء الوجهة.', en: 'Tailored vessel selection and direct routing matched to your exact commodity and destination port.' }
          }
        ]
      }
    ],
    highlights: [
      { metric: '20ft / 40ft / Reefer', label: { ar: 'أنواع الحاويات المتاحة', en: 'Container Specifications' } },
      { metric: '120+ Ports', label: { ar: 'تغطية الموانئ العالمية', en: 'Global Port Coverage' } },
      { metric: 'FCL & LCL', label: { ar: 'حاويات كاملة ومجمعة', en: 'Full & Consolidated Loads' } }
    ]
  },
  {
    slug: 'air-freight',
    number: '02',
    category: 'freight',
    categoryLabel: { ar: 'الشحن الدولي', en: 'International Freight' },
    title: { ar: 'الشحن الجوي', en: 'Air Freight Services' },
    shortDescription: {
      ar: 'شحن جوي سريع وموثوق للبضائع عالية القيمة والسلع سريعة التلف والعينات التجارية عبر شبكة طيران الشحن والبريد السريع.',
      en: 'Rapid, high-priority air cargo solutions for perishables, high-value goods, and urgent commercial samples.'
    },
    fullIntro: {
      ar: 'مع الشركة المصرية يمكنك إرسال البضاعة عن طريق الجو سواء عبر طائرات الشحن المخصصة أو طيران الركاب التجاري أو البريد الجوي السريع. ينفرد الشحن الجوي بسرعة وصول البضاعة إلى المستورد، ولهذا يتم عادة نقل البضائع سريعة الفساد مثل اللحوم والمحاصيل الطازجة والمنتجات الدوائية.',
      en: 'With El Masria Trading, you can dispatch cargo via dedicated freighter aircraft, commercial passenger belly-hold, or express air courier. Air freight excels in transit speed, making it essential for fresh produce, chilled meats, and time-critical cargo.'
    },
    secondaryIntro: {
      ar: 'يُستخدم البريد الجوي السريع أيضاً عن طريق شركات متخصصة مثل DHL وغيرها في حالة البضائع عالية الثمن وذات الوزن الصغير أو عند شحن العينات التجارية لسرعته الفائقة في التوصيل حتى مقر شركة المستورد.',
      en: 'Express air courier partnerships (such as DHL and global express networks) are utilized for lightweight, high-value parcels and commercial export samples requiring direct delivery to the importer’s premises.'
    },
    illustrationType: 'air',
    benefitsTitle: { ar: 'مزايا وحلول الشحن الجوي', en: 'Key Advantages of Air Freight' },
    benefits: [
      {
        title: { ar: 'السرعة الفائقة في الوصول', en: 'Unmatched Transit Speed' },
        description: { ar: 'أسرع وسيلة شحن دولية تضمن وصول الشحنات الحرجة خلال 24 إلى 72 ساعة لأغلب المطارات العالمية.', en: 'Fastest international transit times, delivering critical shipments within 24–72 hours to major global hubs.' }
      },
      {
        title: { ar: 'مثالي للسلع سريعة التلف', en: 'Optimal for Perishables' },
        description: { ar: 'الحفاظ على جودة وطزاجة الخضروات والفواكه واللحوم المبردة بفضل سلسلة التبريد السريعة بالمطارات.', en: 'Preserves freshness of Egyptian fruits, vegetables, and chilled products with unbroken airport cold-chain handling.' }
      },
      {
        title: { ar: 'أمان عالٍ للبضائع الثمينة', en: 'High Security for Valuable Cargo' },
        description: { ar: 'إجراءات رقابة وأمن مشددة في المطارات تقلل احتمالات الفقد أو التلف للسلع الإلكترونية والثمينة.', en: 'Strict airport security protocols minimize risk of loss or damage for electronics and high-value items.' }
      },
      {
        title: { ar: 'خيارات المطار أو الباب للباب', en: 'Airport-to-Airport or Express Courier' },
        description: { ar: 'مرونة الاختيار بين الشحن الجوي التجاري للمطار أو البريد السريع المباشر لمقر العميل.', en: 'Flexible choice between consolidated airport-to-airport cargo or express door-to-door courier delivery.' }
      }
    ],
    subSections: [
      {
        title: { ar: 'معايير اختيار الشحن الجوي الاقتصادي', en: 'Guidelines for Cost-Effective Air Shipping' },
        items: [
          {
            label: { ar: 'القيمة مقابل الوزن', en: 'Value-to-Weight Ratio' },
            text: { ar: 'يُراعى أن تكون البضاعة المصدرة ذات قيمة تجارية مرتفعة لكي تصبح تكلفة الشحن صغيرة بالنسبة للسعر الإجمالي للشحنة.', en: 'Recommended when cargo value is high relative to weight, keeping freight cost proportional.' }
          },
          {
            label: { ar: 'تخفيضات الكميات الكبيرة', en: 'Volume Weight Brackets' },
            text: { ar: 'عند زيادة كمية البضاعة المشحونة جوياً نحصل لعملائنا على شرائح أسعار مخفضة من خطوط الطيران.', en: 'Larger tonnage shipments qualify for preferential airline rate breaks and charter space allocation.' }
          },
          {
            label: { ar: 'شحن العينات التجارية', en: 'Commercial Sample Dispatch' },
            text: { ar: 'إرسال عينات المنتجات للمستوردين في الخارج بسرعة قياسية لإتمام التعاقدات التصديرية.', en: 'Rapidly deliver product samples to overseas buyers to accelerate export contract approvals.' }
          }
        ]
      }
    ],
    highlights: [
      { metric: '24–72 Hours', label: { ar: 'متوسط زمن التوصيل الدولي', en: 'Average Global Transit' } },
      { metric: 'IATA Standards', label: { ar: 'معايير الشحن الجوي المعتمدة', en: 'Certified Air Cargo Handling' } },
      { metric: 'Cold Chain', label: { ar: 'تجهيزات مبردة للصادرات', en: 'Temperature-Controlled Air Cargo' } }
    ]
  },
  {
    slug: 'land-freight',
    number: '03',
    category: 'freight',
    categoryLabel: { ar: 'الشحن الدولي', en: 'International Freight' },
    title: { ar: 'الشحن البري', en: 'Land Freight Services' },
    shortDescription: {
      ar: 'نقل بري دولي ومحلي عبر أسطول متنوع من الشاحنات العادية والمبردة لتوصيل البضائع بكفاءة عالية للدول المجاورة والأسواق العربية.',
      en: 'Cross-border and domestic road transport using dry and refrigerated truck fleets across neighboring Arab and regional markets.'
    },
    fullIntro: {
      ar: 'يتم فيه نقل البضائع عبر الطرق البرية باستخدام المركبات والشاحنات الثقيلة والمبردات. يُعد هذا النوع من النقل من أكثر الوسائل شيوعاً ومرونة لنقل البضائع لمسافات قصيرة إلى متوسطة، خاصة بين مصر والدول العربية المجاورة.',
      en: 'Road freight transports commercial cargo across highway networks using heavy-duty trailers and refrigerated trucks. It is the most flexible and economical mode for short-to-medium distances, particularly across neighboring Arab states.'
    },
    illustrationType: 'land',
    benefitsTitle: { ar: 'مميزات النقل البري مع الشركة المصرية', en: 'Advantages of Land Freight' },
    benefits: [
      {
        title: { ar: 'التكلفة الاقتصادية', en: 'Cost-Effective Pricing' },
        description: { ar: 'يتميز النقل البري بتكلفته المنخفضة مقارنة بالنقل الجوي أو البحري، خاصة للمسافات القصيرة والمتوسطة.', en: 'Offers competitive rates compared to air freight, especially for regional cross-border routes.' }
      },
      {
        title: { ar: 'السرعة في المسافات الإقليمية', en: 'Fast Regional Transit' },
        description: { ar: 'يُعد النقل البري أسرع من النقل البحري في الوصول المباشر للأسواق المجاورة دون انتظار جداول السفن.', en: 'Faster than sea freight for neighboring countries with immediate dispatch upon loading.' }
      },
      {
        title: { ar: 'المرونة في الوصول', en: 'Direct Route Flexibility' },
        description: { ar: 'يتيح النقل البري إمكانية توصيل البضائع مباشرة إلى أماكن ومستودعات داخلية يصعب الوصول إليها بوسائل نقل أخرى.', en: 'Reaches inland industrial zones and rural warehouses inaccessible by maritime or rail networks.' }
      },
      {
        title: { ar: 'سهولة المتابعة والتتبع', en: 'Real-Time GPS Tracking' },
        description: { ar: 'يمكن تتبع مسار الشحنات بسهولة أكبر عبر أنظمة التتبع اللحظي والتواصل المباشر مع السائقين.', en: 'Continuous route monitoring and direct driver coordination throughout the journey.' }
      },
      {
        title: { ar: 'التنوع في الأسطول', en: 'Diverse Fleet Options' },
        description: { ar: 'تتوفر مجموعة متنوعة من المركبات (تريلات مسطحة، صندوق مغلق، برادات مبردة، وكساحات للمعدات الثقيلة).', en: 'Flatbeds, enclosed box trailers, temperature-controlled reefers, and low-bed heavy equipment carriers.' }
      }
    ],
    highlights: [
      { metric: 'Dry & Reefer', label: { ar: 'شاحنات جافة ومبردة', en: 'Dry & Refrigerated Fleet' } },
      { metric: 'MENA Network', label: { ar: 'تغطية برية للدول العربية', en: 'Regional Arab Road Network' } },
      { metric: '24/7 Tracking', label: { ar: 'متابعة مستمرة للشاحنات', en: 'Continuous Route Monitoring' } }
    ]
  },
  {
    slug: 'door-to-door',
    number: '04',
    category: 'freight',
    categoryLabel: { ar: 'الشحن الدولي', en: 'International Freight' },
    title: { ar: 'الشحن من الباب للباب', en: 'Door-to-Door Shipping' },
    shortDescription: {
      ar: 'خدمة لوجستية شاملة تبدأ من استلام البضائع من موقع المُرسل وتنتهي بتسليمها في مستودع المستلم شاملة التخليص والتأمين.',
      en: 'End-to-end logistics management from pickup at the shipper’s origin to final delivery at the consignee’s doorstep.'
    },
    fullIntro: {
      ar: 'هي خدمة شحن متكاملة يتم فيها استلام البضائع من موقع المرسل وتوصيلها مباشرة إلى موقع المستلم. تشمل هذه الخدمة عادةً النقل، التتبع، التأمين، والتغليف والتخزين والتخليص الجمركي الكامل.',
      en: 'Door-to-door shipping handles the entire logistics chain: picking up cargo at the supplier’s facility, managing export/import customs clearance, international carriage, and final delivery to the buyer’s warehouse.'
    },
    illustrationType: 'door',
    benefitsTitle: { ar: 'مزايا خدمة الشحن من الباب إلى الباب', en: 'Benefits of Door-to-Door Service' },
    benefits: [
      {
        title: { ar: 'الراحة التامة للعميل', en: 'Complete Peace of Mind' },
        description: { ar: 'توفر هذه الخدمة راحة كبيرة حيث لا يتعين على المرسل أو المستلم التعامل مع تعقيدات النقل المتعدد أو الجمارك.', en: 'Eliminates the burden of coordinating multiple carriers, port agents, and customs brokers.' }
      },
      {
        title: { ar: 'السرعة وتكامل المراحل', en: 'Accelerated End-to-End Transit' },
        description: { ar: 'تكون خدمات التوصيل من الباب إلى الباب أسرع بفضل التنسيق المسبق بين النقل الداخلي والشحن الدولي والتخليص.', en: 'Pre-coordinated handoffs between inland trucking, main carriage, and customs prevent port bottlenecks.' }
      },
      {
        title: { ar: 'الأمان والتأمين الشامل', en: 'Single-Point Accountability & Security' },
        description: { ar: 'توفر الخدمة تغطية تأمينية ومسؤولية موحدة لحماية البضائع ضد الفقد أو التلف من نقطة الانطلاق حتى الوصول.', en: 'Unified responsibility and optional all-risk insurance protect cargo from origin to final destination.' }
      },
      {
        title: { ar: 'التتبع الموحد', en: 'Unified Shipment Visibility' },
        description: { ar: 'تمكن المرسل والمستلم من متابعة حالة الشحنة عبر نقطة اتصال واحدة طوال مراحل الرحلة.', en: 'Track your shipment across all milestones through a single dedicated operations team.' }
      },
      {
        title: { ar: 'خدمات القيمة المضافة', en: 'Value-Added Packaging & Storage' },
        description: { ar: 'تشمل التغليف الاحترافي، التخزين المؤقت، وإصدار كافة الشهادات والمستندات الجمركية.', en: 'Includes export crating, palletizing, bonded warehousing, and full documentary compliance.' }
      }
    ],
    subSections: [
      {
        title: { ar: 'أنواع الشحنات المناسبة لخدمة الباب للباب', en: 'Shipment Categories Covered' },
        items: [
          {
            label: { ar: 'الطرود والأمتعة الشخصية', en: 'Personal Effects & Parcels' },
            text: { ar: 'تُستخدم لشحن الطرود والأمتعة الشخصية بين الأفراد أو الشركات بكل يسر.', en: 'Seamless relocation of personal effects and private parcels internationally.' }
          },
          {
            label: { ar: 'الشحنات التجارية والصناعية', en: 'Commercial & Industrial Cargo' },
            text: { ar: 'شحن البضائع بين الشركات بما في ذلك المواد الخام والمنتجات النهائية الجاهزة للتوزيع.', en: 'B2B supply chain deliveries of raw materials and finished retail goods.' }
          },
          {
            label: { ar: 'المنتجات الكبيرة والأثاث', en: 'Oversized Goods & Furniture' },
            text: { ar: 'شحن المنتجات الكبيرة مثل الأثاث، خطوط الإنتاج، والأجهزة الكهربائية بأمان تام.', en: 'Safe transport of furniture, appliances, and commercial equipment.' }
          },
          {
            label: { ar: 'المستندات والشحنات الحساسة', en: 'Sensitive & High-Value Items' },
            text: { ar: 'نقل المستندات التجارية الحساسة والسلع الثمينة وفق أعلى معايير الحماية.', en: 'Secure handling for confidential trade documents and high-value cargo.' }
          }
        ]
      }
    ],
    highlights: [
      { metric: 'Single Invoice', label: { ar: 'فاتورة موحدة شاملة كافة الرسوم', en: 'All-Inclusive Transparent Pricing' } },
      { metric: '100% Handled', label: { ar: 'إدارة كاملة من الاستلام للتسليم', en: 'Zero Hassle for Shipper/Buyer' } },
      { metric: 'Multi-Modal', label: { ar: 'ربط بري وبحري وجوي متكامل', en: 'Integrated Sea, Air & Land Links' } }
    ]
  },
  {
    slug: 'warehouse-pickup',
    number: '05',
    category: 'freight',
    categoryLabel: { ar: 'الشحن الدولي', en: 'International Freight' },
    title: { ar: 'الاستلام من مخزن المورد والفحص', en: 'Supplier Warehouse Pickup & QC' },
    shortDescription: {
      ar: 'استلام البضائع مباشرة من مخازن الموردين مع إجراء فحص شامل للجودة والتغليف ومطابقة المواصفات قبل الشحن.',
      en: 'Direct cargo collection from supplier warehouses coupled with rigorous pre-shipment quality inspection and packaging verification.'
    },
    fullIntro: {
      ar: 'تقدم الشركة المصرية خدمة الاستلام المباشر من مخزن المورد (Ex-Works Pickup) مع مراجعة الجودة الفنية والتغليف، وكذلك خدمات شحن الأمتعة الشخصية المعفاة من الرسوم الجمركية ضمن الشروط القانونية المعتمدة في دول العالم.',
      en: 'El Masria Trading coordinates direct Ex-Works pickup from your supplier’s warehouse, conducting thorough quality control and packaging inspections before loading, alongside compliant personal effects shipping.'
    },
    illustrationType: 'warehouse',
    benefitsTitle: { ar: 'خطوات عملية الاستلام والفحص من الشركة المصرية', en: 'Our Warehouse Pickup & Quality Control Process' },
    benefits: [
      {
        title: { ar: 'التنسيق المباشر مع المورد', en: 'Direct Supplier Coordination' },
        description: { ar: 'يتواصل فريق المصرية مع المورد لتنسيق موعد الاستلام الدقيق وتجهيز أذون التحميل.', en: 'Our operations team schedules pickup windows directly with your factory or supplier.' }
      },
      {
        title: { ar: 'انتقال مندوب الفحص والاستلام', en: 'On-Site Representative Dispatch' },
        description: { ar: 'يتوجه مندوب متخصص من الشركة المصرية إلى مخزن المورد لاستلام البضائع والإشراف على التحميل.', en: 'A dedicated El Masria inspector visits the supplier’s premises to supervise counting and loading.' }
      },
      {
        title: { ar: 'سلامة التغليف والتعبئة', en: 'Packaging Integrity Check' },
        description: { ar: 'التحقق من متانة الصناديق والطبالي (Pallets) ومناسبتها لظروف الشحن الدولي الطويل.', en: 'Verifies export-grade palletizing, shrink-wrapping, and labeling durability.' }
      },
      {
        title: { ar: 'مطابقة المواصفات والجودة', en: 'Specification & Quality Verification' },
        description: { ar: 'يقوم فريق متخصص بفحص البضائع للتأكد من مطابقتها للمواصفات المتفق عليها وخلوها من أي تلف أو عيوب ظاهرية.', en: 'Ensures goods match contract specifications and are free from visible defects prior to dispatch.' }
      }
    ],
    subSections: [
      {
        title: { ar: 'قائمة التحقق ومراجعة الجودة قبل الشحن', en: 'Pre-Shipment Quality Inspection Checklist' },
        items: [
          {
            label: { ar: 'سلامة التغليف', en: 'Export Packaging' },
            text: { ar: 'التأكد من استخدام مواد تغليف قياسية تحمي البضائع من الرطوبة والصدمات أثناء المناولة.', en: 'Confirming moisture-resistant, impact-safe export packaging and fumigated pallets.' }
          },
          {
            label: { ar: 'جودة المنتج ومطابقة العينة', en: 'Product Quality Match' },
            text: { ar: 'مراجعة العينات العشوائية من الشحنة ومقارنتها بأمر الشراء والعينة المعتمدة.', en: 'Random batch sampling checked against the approved purchase order specifications.' }
          },
          {
            label: { ar: 'خلو البضائع من التلف أو العيوب', en: 'Zero Defect Confirmation' },
            text: { ar: 'توثيق حالة البضاعة بالصور والتقارير الفنية قبل إغلاق الحاوية أو الشاحنة.', en: 'Photographic and written inspection report issued before container sealing.' }
          }
        ]
      }
    ],
    highlights: [
      { metric: '4-Point QC', label: { ar: 'فحص رباعي للجودة والتغليف', en: '4-Stage Quality Verification' } },
      { metric: 'EXW / FCA', label: { ar: 'دعم شروط التسليم من المصنع', en: 'Ex-Works & Free Carrier Support' } },
      { metric: 'Photo Report', label: { ar: 'تقرير مصور عند التحميل', en: 'Loading Inspection Documentation' } }
    ]
  },
  {
    slug: 'customs-clearance',
    number: '06',
    category: 'customs-trade',
    categoryLabel: { ar: 'الجمارك والتجارة الدولية', en: 'Customs & Trade Compliance' },
    title: { ar: 'التخليص الجمركي', en: 'Customs Clearance Services' },
    shortDescription: {
      ar: 'إنهاء كافة الإجراءات والبيانات الجمركية للصادرات والواردات بسرعة ودقة لتجنب الغرامات والأرضيات وضمان انسياب البضائع.',
      en: 'Fast, compliant import and export customs brokerage across Egyptian ports and airports, preventing demurrage and delays.'
    },
    fullIntro: {
      ar: 'التخليص الجمركي هو الإجراءات المُنظمة التي تُطبقها سلطات الجمارك في كل دولة على السلع الداخلة أو الخارجة من أراضيها. يتولى فريقنا المعتمد إنهاء كافة الإجراءات والرقابة النوعية ومنظومة النافذة الواحدة (ACI) بأعلى كفاءة.',
      en: 'Customs clearance encompasses all regulatory procedures applied by customs authorities on imported and exported goods. Our licensed brokers manage Single Window (ACI) filings, tariff classification, and inspection clearances seamlessly.'
    },
    illustrationType: 'customs',
    benefitsTitle: { ar: 'فوائد التخليص الجمركي الفعال مع المصرية', en: 'Benefits of Professional Customs Brokerage' },
    benefits: [
      {
        title: { ar: 'تجنب التأخيرات والأرضيات', en: 'Prevent Delays & Demurrage' },
        description: { ar: 'ضمان انسياب عملية الاستيراد أو التصدير دون عراقيل وتجنب دفع غرامات التأخير أو رسوم الأرضيات بالموانئ.', en: 'Ensures rapid release of containers to avoid costly port storage and container detention charges.' }
      },
      {
        title: { ar: 'الحصول على مستندات جمركية صحيحة', en: 'Accurate Documentary Compliance' },
        description: { ar: 'إعداد ومراجعة كافة الفواتير وشهادات المنشأ والبيانات الجمركية الضرورية لإثبات ملكية البضائع وشرعية التجارة.', en: 'Precise preparation of customs declarations, certificates of origin, and legalized commercial invoices.' }
      },
      {
        title: { ar: 'تسهيل تتبع حركة البضائع إلكترونياً', en: 'Electronic Customs Tracking (Nafeza / ACI)' },
        description: { ar: 'متابعة لحظية للشحنات من خلال أنظمة الجمارك الإلكترونية المحدثة ومنظومة التسجيل المسبق للشحنات.', en: 'Real-time status tracking through electronic customs portals and Advance Cargo Information (ACI) systems.' }
      },
      {
        title: { ar: 'الامتثال الكامل للقوانين واللوائح', en: 'Full Regulatory Compliance' },
        description: { ar: 'الالتزام الدقيق بالتعريفة الجمركية والقرارات الوزارية لتجنب المخالفات القانونية والجزاءات.', en: 'Strict adherence to HS tariff codes and regulatory agency approvals (GOEIC, NFSA, Quarantine).' }
      }
    ],
    subSections: [
      {
        title: { ar: 'المعلومات والمستندات المطلوبة لإتمام التخليص الجمركي', en: 'Required Information & Customs Documentation' },
        items: [
          {
            label: { ar: 'الفاتورة التجارية (Commercial Invoice)', en: 'Commercial Invoice' },
            text: { ar: 'توضح قيمة البضاعة، الكميات، شروط التسليم (Incoterms)، وبيانات المصدر والمستورد.', en: 'Detailing item values, quantities, Incoterms, and shipper/consignee particulars.' }
          },
          {
            label: { ar: 'بوليصة الشحن وقائمة التعبئة (B/L & Packing List)', en: 'Bill of Lading & Packing List' },
            text: { ar: 'بوليصة الشحن البحرية أو الجوية مع بيان العبوات والأوزان الصافية والقائمة بالتفصيل.', en: 'Ocean B/L or Air Waybill accompanied by detailed net/gross weights and package counts.' }
          },
          {
            label: { ar: 'شهادة المنشأ والشهادات الصحية/الزراعية', en: 'Certificate of Origin & Health Certificates' },
            text: { ar: 'شهادة المنشأ المصدقة للاستفادة من الإعفاءات الجمركية (مثل الكوميسا، الشراكة الأوروبية، تيسير العربية) وشهادات الفحص.', en: 'Authenticated Certificate of Origin (EUR.1, COMESA, Arab League) and phytosanitary/health certificates.' }
          },
          {
            label: { ar: 'البطاقة الاستيرادية / سجل المصدرين والرقم الضريبي', en: 'Importer/Exporter Registry & Tax ID' },
            text: { ar: 'المستندات القانونية الخاصة بالشركة ورقم التسجيل المسبق للشحنات (ACID).', en: 'Valid corporate registration, tax card, import/export license, and ACID number.' }
          }
        ]
      }
    ],
    highlights: [
      { metric: 'ACI / Nafeza', label: { ar: 'تخليص إلكتروني عبر نافذة', en: 'Single Window & ACI Certified' } },
      { metric: 'Zero Fines', label: { ar: 'مراجعة استباقية تمنع الغرامات', en: 'Proactive Compliance Audit' } },
      { metric: 'All Egyptian Ports', label: { ar: 'تغطية كافة الموانئ والمطارات', en: 'Nationwide Port Presence' } }
    ]
  },
  {
    slug: 'import-export',
    number: '07',
    category: 'customs-trade',
    categoryLabel: { ar: 'الجمارك والتجارة الدولية', en: 'Customs & Trade Compliance' },
    title: { ar: 'الاستيراد والتصدير والاستشارات التجارية', en: 'Import, Export & Trade Consultancy' },
    shortDescription: {
      ar: 'خدمات استيراد وتصدير لحساب الشركة ولحساب الغير مع تقديم استشارات متخصصة لفتح الأسواق الدولية ومراجعة اللوائح.',
      en: 'Full-cycle import and export execution along with strategic trade consultancy to enter global markets safely.'
    },
    fullIntro: {
      ar: 'يُعد الاستيراد والتصدير أدوات فعّالة لتحقيق التنمية الاقتصادية المستدامة وتوسيع أعمال الشركات. تقوم الشركة المصرية بتقديم خدمات الاستيراد والتصدير المتكاملة من خلال فريق متخصص في الاستشارات التجارية والدولية والتعاقدات.',
      en: 'Import and export operations are vital drivers of sustainable business growth. El Masria Trading provides end-to-end import/export execution and expert regulatory consultancy to connect local producers with global buyers.'
    },
    secondaryIntro: {
      ar: 'تختلف إجراءات الاستيراد والتصدير من دولة إلى أخرى، لذلك نقوم بمراجعة كافة اللوائح والقوانين المعمول بها في بلد المنشأ وبلد الوجهة قبل البدء بأي عملية لضمان نجاح الصفقة التجارية.',
      en: 'Because trade regulations vary across jurisdictions, our specialists audit both origin and destination compliance requirements prior to shipment execution.'
    },
    illustrationType: 'import-export',
    benefitsTitle: { ar: 'خدمات الشركة المصرية في الاستيراد والتصدير', en: 'Our Import & Export Capabilities' },
    benefits: [
      {
        title: { ar: 'تصدير المنتجات المصرية للأسواق العالمية', en: 'Exporting Egyptian Products Globally' },
        description: { ar: 'توريد وتصدير الحاصلات الزراعية، المواد الغذائية، ومواد البناء والمنتجات الصناعية إلى أوروبا، الخليج، وأفريقيا.', en: 'Supplying premium Egyptian agricultural produce, foodstuffs, and construction materials to Europe, GCC, and Africa.' }
      },
      {
        title: { ar: 'استيراد الخامات ومستلزمات الإنتاج', en: 'Importing Raw Materials & Production Inputs' },
        description: { ar: 'شراء وتوريد السلع والخامات الصناعية من أفضل الموردين العالميين لتلبية احتياجات المصانع والسوق المحلي.', en: 'Sourcing reliable industrial raw materials, machinery, and commercial commodities from verified international manufacturers.' }
      },
      {
        title: { ar: 'استشارات اللوائح والاتفاقيات الدولية', en: 'Trade Agreements & Regulatory Advisory' },
        description: { ar: 'توجيه المصدرين والمستوردين للاستفادة من الاتفاقيات التجارية الدولية وتقليل الرسوم الجمركية.', en: 'Advising clients on leveraging bilateral and multilateral free trade agreements to reduce tariff burdens.' }
      },
      {
        title: { ar: 'فحص الموردين وإدارة العقود والاعتمادات', en: 'Supplier Vetting & Documentary Credits' },
        description: { ar: 'صياغة العقود التجارية الدولية ومتابعة طرق الدفع الآمنة والاعتمادات المستندية (LC / CAD).', en: 'Structuring secure international sales contracts and managing Letters of Credit (L/C) and documentary collections.' }
      }
    ],
    highlights: [
      { metric: '35+ Countries', label: { ar: 'أسواق تصدير واستيراد نشطة', en: 'Active Trade Corridors' } },
      { metric: 'B2B Sourcing', label: { ar: 'توفير موردين ومشترين موثوقين', en: 'Verified Global Partners' } },
      { metric: 'Full Advisory', label: { ar: 'استشارات قانونية وتجارية', en: 'End-to-End Trade Consulting' } }
    ]
  },
  {
    slug: 'cargo-insurance',
    number: '08',
    category: 'customs-trade',
    categoryLabel: { ar: 'الجمارك والتجارة الدولية', en: 'Customs & Trade Compliance' },
    title: { ar: 'التأمين على البضائع', en: 'Marine & Cargo Insurance' },
    shortDescription: {
      ar: 'وثائق تأمين شاملة ومخصصة لحماية البضائع المشحونة بحراً أو جواً أو براً ضد مخاطر التلف، الحريق، السرقة، والكوارث الطبيعية.',
      en: 'Tailored all-risk cargo insurance policies protecting sea, air, and land shipments against damage, loss, and force majeure.'
    },
    fullIntro: {
      ar: 'تُقدم الشركة المصرية مجموعة واسعة من خدمات التأمين على البضائع، مصممة لتلبية احتياجات مختلف الشركات والأفراد، وحماية رأس المال التجاري من أي مخاطر غير متوقعة أثناء عمليات النقل الدولي والمحلي.',
      en: 'El Masria Trading offers comprehensive cargo insurance solutions tailored to businesses and individuals, safeguarding your commercial capital against unforeseen transit hazards across sea, air, and land.'
    },
    illustrationType: 'insurance',
    benefitsTitle: { ar: 'ميزات تأمين البضائع لدى الشركة المصرية', en: 'Key Features of Our Cargo Insurance' },
    benefits: [
      {
        title: { ar: 'تغطية شاملة للمخاطر', en: 'Comprehensive All-Risk Coverage' },
        description: { ar: 'تشمل التغطية مجموعة واسعة من المخاطر، بما في ذلك الخسائر الناتجة عن الحريق، السرقة، التلف أثناء النقل، والكوارث الطبيعية.', en: 'Protects against fire, theft, handling damage, water ingress, vessel stranding, and natural disasters.' }
      },
      {
        title: { ar: 'خيارات تأمين مخصصة', en: 'Customized Policy Structuring' },
        description: { ar: 'يمكن تصميم بوليصة التأمين لتناسب احتياجاتك الخاصة، مع مراعاة نوع البضائع، مسار الشحن، والقيمة المُؤمّنة.', en: 'Policies tailored to your specific commodity profile, transit corridor, and insured invoice value.' }
      },
      {
        title: { ar: 'أسعار تنافسية', en: 'Competitive Premium Rates' },
        description: { ar: 'نقدم أسعاراً تنافسية لخدمات تأمين البضائع، مع مراعاة مستوى التغطية والمخاطر المُغطاة.', en: 'Cost-effective insurance premiums negotiated through top-tier underwriting partners.' }
      },
      {
        title: { ar: 'شبكة عالمية لمعاينة المطالبات', en: 'Global Claims Survey Network' },
        description: { ar: 'نمتلك شبكة واسعة من الشركاء في جميع أنحاء العالم، مما يضمن حصولك على خدمة سريعة وفعالة عند تقديم مطالبة تأمين.', en: 'Worldwide network of marine surveyors ensures rapid inspection and fair settlement if a claim arises.' }
      },
      {
        title: { ar: 'خدمة عملاء ومتابعة ممتازة', en: 'Dedicated Claims Assistance' },
        description: { ar: 'يلتزم فريق خدمة العملاء لدينا بتقديم الدعم والتوجيه الكامل طوال عملية إصدار الوثيقة وحتى تسوية المطالبات.', en: 'Full support from policy issuance through documentation and claims recovery.' }
      }
    ],
    highlights: [
      { metric: 'ICC (A / B / C)', label: { ar: 'تغطيات معهد مكتتبي التأمين بلندن', en: 'Institute Cargo Clauses' } },
      { metric: '110% Value', label: { ar: 'تأمين كامل القيمة والربح المتوقع', en: 'Full CIF +10% Coverage' } },
      { metric: 'Fast Settlement', label: { ar: 'سرعة معاينة وصرف التعويضات', en: 'Rapid Claim Resolution' } }
    ]
  },
  {
    slug: 'rebate-services',
    number: '09',
    category: 'corporate-industrial',
    categoryLabel: { ar: 'دعم الصادرات والتنمية الصناعية', en: 'Export Support & Industrial Growth' },
    title: { ar: 'خدمات رد أعباء الصادرات', en: 'Export Rebate & Subsidy Services' },
    shortDescription: {
      ar: 'إدارة وتجهيز ملفات المساندة التصديرية ورد الأعباء المالية والجمركية للمصدرين لتعزيز تنافسية المنتجات المصرية عالمياً.',
      en: 'Complete preparation and follow-up of export subsidy and duty drawback files to maximize financial returns for exporters.'
    },
    fullIntro: {
      ar: 'رد أعباء الصادرات هو برنامج حكومي تُقدمه الدولة لدعم وتحفيز الشركات والمصدرين المحليين. يهدف هذا البرنامج إلى تخفيف الأعباء المالية والتكاليف المرتبطة بالتصدير، مما يساعد على تعزيز القدرة التنافسية للمنتجات المحلية في الأسواق العالمية.',
      en: 'The Export Rebate Program is a government-backed initiative designed to incentivize domestic manufacturers and exporters by reimbursing financial and logistical burdens, boosting international price competitiveness.'
    },
    illustrationType: 'rebate',
    benefitsTitle: { ar: 'أهداف ومزايا برنامج رد أعباء الصادرات', en: 'Objectives & Benefits of Export Rebates' },
    benefits: [
      {
        title: { ar: 'تخفيف الأعباء المالية عن المصدرين', en: 'Reduce Financial & Production Costs' },
        description: { ar: 'استرداد نسبة من تكاليف الإنتاج والشحن والرسوم لزيادة هامش الربح للمصدر المصري.', en: 'Reimburses a percentage of production, freight, and customs costs to strengthen exporter margins.' }
      },
      {
        title: { ar: 'تعزيز التنافسية في الأسواق الخارجية', en: 'Boost Global Price Competitiveness' },
        description: { ar: 'تمكين الشركات من تقديم أسعار تنافسية للمستوردين الأجانب وفتح أسواق تصديرية جديدة.', en: 'Enables Egyptian exporters to offer sharper pricing in fiercely competitive overseas markets.' }
      },
      {
        title: { ar: 'دعم شحن الصادرات لأفريقيا والأسواق المستهدفة', en: 'Extra Incentives for Strategic Markets' },
        description: { ar: 'الاستفادة من نسب المساندة الإضافية المخصصة للشحن إلى دول أفريقيا والأسواق ذات الأولوية.', en: 'Captures additional freight subsidies allocated for exports to African and emerging markets.' }
      },
      {
        title: { ar: 'إدارة مستندية دقيقة مع صندوق تنمية الصادرات', en: 'End-to-End File Management' },
        description: { ar: 'يتولى فريقنا تسجيل الشركة وتجهيز ومراجعة كافة الفواتير وشهادات الصادر والبنوك حتى صرف المستحقات.', en: 'Our specialists handle registration, document auditing, and submission to the Export Development Fund until payout.' }
      }
    ],
    subSections: [
      {
        title: { ar: 'كيف يعمل البرنامج مع الشركة المصرية؟', en: 'How Our Export Rebate Workflow Operates' },
        items: [
          {
            label: { ar: '1. التسجيل وتحديث البيانات', en: '1. Fund Registration & Qualification' },
            text: { ar: 'تسجيل المنشأة الصناعية أو التصديرية في صندوق تنمية الصادرات واستيفاء شروط القيمة المضافة والجودة.', en: 'Registering your company with the Export Development Fund and verifying industrial value-added criteria.' }
          },
          {
            label: { ar: '2. مراجعة وتجهيز ملفات الشحنات', en: '2. Shipment Dossier Preparation' },
            text: { ar: 'تجميع نماذج الصادر (نموذج 13)، الفواتير الضريبية، بوالص الشحن، وشهادات التحصيل البنكي.', en: 'Compiling Form 13 customs certificates, electronic tax invoices, bills of lading, and bank transfer proofs.' }
          },
          {
            label: { ar: '3. التقديم والمتابعة المالية', en: '3. Submission & Payout Follow-Up' },
            text: { ar: 'تقديم الملفات المعتمدة ومتابعتها فنياً ومالياً حتى إصدار شهادات المساندة وصرف المستحقات.', en: 'Tracking technical audits and coordinating financial disbursement or tax/customs offset settlements.' }
          }
        ]
      }
    ],
    highlights: [
      { metric: 'Form 13 & Bank', label: { ar: 'مراجعة كاملة لمستندات الصادر', en: 'Complete Documentary Audit' } },
      { metric: 'Fast Approval', label: { ar: 'تسريع دورة اعتماد الملفات', en: 'Accelerated File Acceptance' } },
      { metric: 'Export Fund', label: { ar: 'تمثيل معتمد أمام صندوق الصادرات', en: 'Direct Fund Coordination' } }
    ]
  },
  {
    slug: 'iso-certs',
    number: '10',
    category: 'corporate-industrial',
    categoryLabel: { ar: 'دعم الصادرات والتنمية الصناعية', en: 'Export Support & Industrial Growth' },
    title: { ar: 'خدمات إصدار شهادات الأيزو', en: 'ISO Certification & Quality Systems' },
    shortDescription: {
      ar: 'تأهيل الشركات والمصانع وإصدار شهادات الأيزو المعتمدة دولياً لتعزيز الثقة وفتح أبواب التصدير والمناقصات العالمية.',
      en: 'Qualifying factories and enterprises for internationally accredited ISO certifications to unlock global export markets.'
    },
    fullIntro: {
      ar: 'نقدم خدمات إصدار شهادات الأيزو بمختلف أنواعها للشركات والمؤسسات والمصانع، مع ضمان الالتزام بالمعايير الدولية لتطوير الأداء المؤسسي وتعزيز الثقة والمصداقية في السوق المحلي والعالمي.',
      en: 'We provide end-to-end consulting and issuance services for international ISO certifications across industries, ensuring compliance with global quality, food safety, and environmental standards.'
    },
    illustrationType: 'iso',
    benefitsTitle: { ar: 'مزايا استخراج شهادة الأيزو لشركتك', en: 'Benefits of Obtaining ISO Certification' },
    benefits: [
      {
        title: { ar: 'تحسين الكفاءة التشغيلية', en: 'Operational Efficiency' },
        description: { ar: 'تضمن شهادات الأيزو تنظيم العمليات الإدارية والإنتاجية وتحسين الأداء التشغيلي وتقليل الهدر.', en: 'Standardizes internal workflows, enhances production efficiency, and reduces operational waste.' }
      },
      {
        title: { ar: 'تعزيز الثقة والمصداقية', en: 'Enhanced Brand Credibility' },
        description: { ar: 'تعكس التزام المؤسسة بالمعايير الدولية، مما يعزز مصداقيتها أمام العملاء والشركاء والجهات الرقابية.', en: 'Demonstrates strict commitment to international standards in front of buyers, partners, and regulators.' }
      },
      {
        title: { ar: 'التوسع في الأسواق والتصدير', en: 'Global Market & Tender Access' },
        description: { ar: 'تعتبر الشهادة مفتاحاً أساسياً للوصول إلى أسواق تصديرية جديدة وتلبية متطلبات المناقصات الدولية وصندوق الصادرات.', en: 'Acts as a mandatory prerequisite for international tenders, European/Gulf exports, and export subsidy programs.' }
      },
      {
        title: { ar: 'تحقيق رضا العملاء', en: 'Superior Customer Satisfaction' },
        description: { ar: 'تركز معايير الأيزو على جودة المنتجات والخدمات المستمرة، مما يؤدي إلى تحسين تجربة وولاء العملاء.', en: 'Focuses on consistent product quality and continuous improvement to drive long-term client retention.' }
      },
      {
        title: { ar: 'تقليل المخاطر والخسائر', en: 'Proactive Risk Management' },
        description: { ar: 'تساعد على تحديد المشكلات وإدارتها بشكل استباقي، مما يقلل التكاليف التشغيلية والخسائر.', en: 'Identifies operational hazards early, minimizing costly recalls and compliance disruptions.' }
      }
    ],
    subSections: [
      {
        title: { ar: 'أهم شهادات الأيزو التي نوفرها للمصانع والشركات', en: 'Core ISO Standards We Deliver' },
        items: [
          {
            label: { ar: 'ISO 9001:2015', en: 'ISO 9001:2015 (Quality Management)' },
            text: { ar: 'نظام إدارة الجودة الشاملة لكافة المؤسسات الصناعية والتجارية والخدمية.', en: 'Quality Management System certification for manufacturing, trading, and service organizations.' }
          },
          {
            label: { ar: 'ISO 22000 & HACCP', en: 'ISO 22000 & HACCP (Food Safety)' },
            text: { ar: 'نظام إدارة سلامة الغذاء الضروري لمصانع الأغذية ومحطات تعبئة الحاصلات الزراعية المصدرة.', en: 'Food Safety Management systems essential for food processors and agricultural packing stations.' }
          },
          {
            label: { ar: 'ISO 14001 & ISO 45001', en: 'ISO 14001 & ISO 45001 (Environment & Safety)' },
            text: { ar: 'نظم الإدارة البيئية والسلامة والصحة المهنية للمنشآت الصناعية الكبرى.', en: 'Environmental Management and Occupational Health & Safety standards for industrial plants.' }
          }
        ]
      }
    ],
    highlights: [
      { metric: 'ISO 9001 / 22000', label: { ar: 'شهادات الجودة وسلامة الغذاء', en: 'Quality & Food Safety Certs' } },
      { metric: '14001 / 45001', label: { ar: 'البيئة والسلامة المهنية', en: 'Environment & OHS Standards' } },
      { metric: 'IAF Accredited', label: { ar: 'شهادات معتمدة دولياً', en: 'Internationally Recognized' } }
    ]
  },
  {
    slug: 'industrial-dev',
    number: '11',
    category: 'corporate-industrial',
    categoryLabel: { ar: 'دعم الصادرات والتنمية الصناعية', en: 'Export Support & Industrial Growth' },
    title: { ar: 'خدمات التنمية الصناعية', en: 'Industrial Development & Licensing' },
    shortDescription: {
      ar: 'إنهاء كافة الإجراءات والتراخيص والسجلات الصناعية المطلوبة لدى هيئة التنمية الصناعية للمصانع والمشروعات الإنتاجية.',
      en: 'Completing industrial licenses, factory registries, and regulatory approvals with the Industrial Development Authority (IDA).'
    },
    fullIntro: {
      ar: 'التنمية الصناعية هي أحد أهم عناصر التنمية الاقتصادية، ويُقصد بها مجموعة الخطط والجهود التي تبذلها الدولة بهدف إحداث تغييرات إيجابية في قطاع الصناعة عن طريق الاستغلال الأمثل للموارد المتاحة سواء كانت طبيعية أو بشرية أو تكنولوجية.',
      en: 'Industrial development is a cornerstone of economic growth, optimizing natural, human, and technological resources to expand manufacturing capacity and export readiness.'
    },
    secondaryIntro: {
      ar: 'تقدم الشركة المصرية كافة الجهود والإجراءات السليمة والخبرات الفنية والقانونية من أجل إنهاء كافة الإجراءات والمتطلبات المطلوبة للتنمية الصناعية وتراخيص المصانع في جمهورية مصر العربية.',
      en: 'El Masria Trading provides comprehensive technical and regulatory representation to finalize all Industrial Development Authority (IDA) procedures and factory licensing across Egypt.'
    },
    illustrationType: 'industrial',
    benefitsTitle: { ar: 'خدماتنا لدى هيئة التنمية الصناعية', en: 'Our Industrial Development Services' },
    benefits: [
      {
        title: { ar: 'إصدار وتجديد السجل الصناعي', en: 'Industrial Registry Issuance & Renewal' },
        description: { ar: 'استخراج السجل الصناعي المؤقت والدائم وتعديله وإضافة خطوط الإنتاج والمنتجات الجديدة.', en: 'Obtaining and renewing permanent or temporary industrial registries and adding new production capacities.' }
      },
      {
        title: { ar: 'رخص التشغيل وتراخيص المنشآت الصناعية', en: 'Factory Operating Licenses' },
        description: { ar: 'إنهاء إجراءات رخص التشغيل بالإخطار أو المسبقة واستيفاء اشتراطات الحماية المدنية والبيئة.', en: 'Securing factory operating licenses, civil defense approvals, and environmental impact clearances.' }
      },
      {
        title: { ar: 'تقدير نسب المكون المحلي والقيمة المضافة', en: 'Local Content & Value-Added Certificates' },
        description: { ar: 'استخراج شهادات نسبة المكون الصناعي المحلي اللازمة للمناقصات الحكومية وبرامج دعم الصادرات.', en: 'Issuing local content certificates required for government tenders and export rebate eligibility.' }
      },
      {
        title: { ar: 'تخصيص الأراضي الصناعية والدراسات الفنية', en: 'Industrial Land Allocation & Feasibility' },
        description: { ar: 'إعداد الملفات الفنية والاقتصادية اللازمة للتقديم على الأراضي والوحدات الصناعية في المناطق المعتمدة.', en: 'Preparing technical and financial feasibility files for industrial land and Complex unit allocations.' }
      }
    ],
    highlights: [
      { metric: 'IDA Licensing', label: { ar: 'تراخيص وسجلات صناعية كاملة', en: 'Full IDA Registry Support' } },
      { metric: 'Local Content', label: { ar: 'شهادات المكون المحلي للمصانع', en: 'Industrial Value-Added Certs' } },
      { metric: 'Fast-Track', label: { ar: 'إنجاز قانوني وفني دقيق', en: 'Expert Engineering & Legal Team' } }
    ]
  }
];

export const PRODUCTS_DATA: ExportProduct[] = [
  {
    id: 'prod-01',
    slug: 'valencia-navel-oranges',
    code: 'AGR-CIT-01',
    hsCode: '0805.10',
    category: 'agricultural',
    categoryLabel: { ar: 'الحاصلات الزراعية الطازجة', en: 'Fresh Agricultural Produce' },
    name: { ar: 'البرتقال المصري الطازج (أبو سرة وفالنسيا)', en: 'Fresh Egyptian Navel & Valencia Oranges' },
    summary: {
      ar: 'برتقال مصري فرز أول للتصدير من أفضل مزارع الدلتا والصحراء، معبأ في محطات معتمدة دولياً.',
      en: 'Class-A export quality Egyptian Navel and Valencia oranges, sorted and packed in GlobalGAP-certified stations.'
    },
    description: {
      ar: 'تتصدر مصر قائمة مصدري البرتقال عالمياً بفضل المذاق الحلو المتوازن ونسبة العصير العالية. نوفر البرتقال (أبو سرة وفالنسيا) بمقاسات قياسية ومعالجة شمعية غذائية معتمدة تضمن وصوله طازجاً لأبعد الأسواق الأوروبية والآسيوية والعربية.',
      en: 'Egypt leads global orange exports thanks to high juice content, vibrant peel color, and natural sweetness. We supply calibrated sizes packed in telescopic cartons for European, Gulf, and Asian importers.'
    },
    origin: { ar: 'مصر (النوبارية / الإسماعيلية)', en: 'Egypt (Nubaria / Ismailia)' },
    seasonOrAvailability: { ar: 'ديسمبر حتى يونيو (موسم التصدير)', en: 'December to June' },
    packaging: { ar: 'كرتون تلسكوبي 15 كجم أو صناديق بلاستيكية / 20 باليت بالحاوية 40 قدم مبردة', en: '15 kg Telescopic Cartons or Open-Top Boxes / 20 Pallets per 40ft Reefer' },
    minOrder: { ar: 'حاوية مبردة 40 قدم (24 - 26 طن)', en: '1x 40ft High Cube Reefer (24–26 MT)' },
    shippingModes: { ar: 'شحن بحري مبرد (Reefer) / شحن بري مبرد', en: 'Sea Freight (Reefer) / Refrigerated Land Truck' },
    certifications: ['GlobalG.A.P', 'ISO 22000', 'Phytosanitary Certificate'],
    specs: [
      { label: { ar: 'الأحجام المتاحة (Counts)', en: 'Calibers / Counts' }, value: { ar: '36 / 42 / 48 / 56 / 64 / 72 / 80 / 88', en: '36 / 42 / 48 / 56 / 64 / 72 / 80 / 88' } },
      { label: { ar: 'نسبة العصير', en: 'Juice Content' }, value: { ar: 'أعلى من 45% - Brix 11+', en: 'Minimum 45% — Brix 11+' } },
      { label: { ar: 'درجة حرارة الشحن', en: 'Transit Temperature' }, value: { ar: '+4°C إلى +6°C مع تهوية قياسية', en: '+4°C to +6°C Controlled Ventilation' } }
    ],
    visualTheme: 'citrus'
  },
  {
    id: 'prod-02',
    slug: 'wonderful-pomegranates',
    code: 'AGR-POM-02',
    hsCode: '0810.90',
    category: 'agricultural',
    categoryLabel: { ar: 'الحاصلات الزراعية الطازجة', en: 'Fresh Agricultural Produce' },
    name: { ar: 'الرمان المصري الطازج (وندرل ومنفلوطي)', en: 'Fresh Egyptian Wonderful & Manfalouty Pomegranates' },
    summary: {
      ar: 'رمان مصري ذو قشرة حمراء زاهية وحبوب غنية بمضادات الأكسدة، مجهز للتصدير للأسواق الأوروبية والعربية.',
      en: 'Deep ruby-red Egyptian pomegranates with high sugar content and long cold-storage shelf life.'
    },
    description: {
      ar: 'يتميز الرمان المصري وخاصة صنف (Wonderful) و(المنفلوطي) بالحجم القياسي والقشرة القوية التي تتحمل الشحن البحري الطويل، مع طعم غني ومواصفات خالية من متبقيات المبيدات فوق الحدود المسموحة.',
      en: 'Egyptian Wonderful and Manfalouty pomegranates are prized for their deep red arils, sturdy rind suitable for ocean transit, and strict compliance with EU Maximum Residue Limits (MRL).'
    },
    origin: { ar: 'مصر (أسيوط / المنيا / وادي النطرون)', en: 'Egypt (Assiut / Wadi El Natrun)' },
    seasonOrAvailability: { ar: 'سبتمبر حتى ديسمبر', en: 'September to December' },
    packaging: { ar: 'كرتون مفتوح من الأعلى 4.5 كجم أو 5 كجم (8 إلى 14 ثمرة بالكرتونة)', en: '4.5 kg or 5 kg Open-Top Cartons (Sizes 8 to 14)' },
    minOrder: { ar: 'حاوية مبردة 40 قدم (18 - 20 طن)', en: '1x 40ft Reefer Container (18–20 MT)' },
    shippingModes: { ar: 'شحن بحري مبرد / شحن جوي للعينات والطلبيات العاجلة', en: 'Reefer Sea Freight / Air Cargo' },
    certifications: ['GlobalG.A.P', 'GRASP', 'EU MRL Compliant'],
    specs: [
      { label: { ar: 'وزن الثمرة', en: 'Fruit Weight' }, value: { ar: '350 جرام حتى 750 جرام للثمرة', en: '350g to 750g per fruit' } },
      { label: { ar: 'نسبة السكر (Brix)', en: 'Brix Level' }, value: { ar: '16% إلى 18%', en: '16% to 18% Brix' } },
      { label: { ar: 'درجة حرارة التبريد', en: 'Cold Chain Temp' }, value: { ar: '+5°C إلى +7°C', en: '+5°C to +7°C' } }
    ],
    visualTheme: 'pomegranate'
  },
  {
    id: 'prod-03',
    slug: 'spunta-hermes-potatoes',
    code: 'AGR-POT-03',
    hsCode: '0701.90',
    category: 'agricultural',
    categoryLabel: { ar: 'الحاصلات الزراعية الطازجة', en: 'Fresh Agricultural Produce' },
    name: { ar: 'البطاطس المصرية للتصدير (مونديال، سبونتا، هيرميس)', en: 'Export Grade Egyptian Potatoes (Spunta, Mondial, Hermes)' },
    summary: {
      ar: 'بطاطس مائدة وتصنيع مزروعة في الأراضي الرملية البكر الخالية من الأمراض الحجرية، مغسولة أو بالبيتموس.',
      en: 'Pest-free desert-grown Egyptian table and processing potatoes, available washed, brushed, or packed in peat moss.'
    },
    description: {
      ar: 'نوفر أجود أصناف البطاطس المصرية من المناطق الخالية من العفن البني (Pest Free Areas) والمعتمدة للتصدير إلى الاتحاد الأوروبي وروسيا ودول الخليج، سواء للاستهلاك المباشر أو لمصانع الشيبسي والبطاطس النصف مقلية.',
      en: 'Sourced exclusively from officially designated Pest-Free Areas (PFA), our potatoes meet strict European and Russian phytosanitary protocols for both table consumption and industrial crisping.'
    },
    origin: { ar: 'مصر (مناطق البيفوت المعتمدة P.F.A)', en: 'Egypt (Certified PFA Desert Farms)' },
    seasonOrAvailability: { ar: 'يناير حتى يونيو', en: 'January to June' },
    packaging: { ar: 'أجولة شبكية 10 / 25 كجم أو أجولة جامبو 1250 كجم (Big Bags)', en: '10/25 kg Mesh Bags or 1,250 kg Jumbo Ventilated Bags' },
    minOrder: { ar: '2 حاوية 40 قدم مبردة (50 - 54 طن)', en: '2x 40ft Reefer Containers (50–54 MT)' },
    shippingModes: { ar: 'شحن بحري مبرد / سفن كاملة للكميات الكبيرة', en: 'Reefer Containers / Full Reefer Vessel' },
    certifications: ['PFA Official Cert', 'GlobalG.A.P', 'ISO 9001'],
    specs: [
      { label: { ar: 'الأقطار القياسية', en: 'Size Calibration' }, value: { ar: '45مم - 65مم / 50مم - 80مم', en: '45–65mm / 50–80mm' } },
      { label: { ar: 'المادة الجافة', en: 'Dry Matter' }, value: { ar: '19% - 22% (لأصناف التصنيع)', en: '19%–22% for processing varieties' } },
      { label: { ar: 'خيارات التعبئة', en: 'Soil Finish' }, value: { ar: 'مغسولة، مفرشة، أو محفوظة بالبيتموس', en: 'Washed, Brushed, or Peat Moss' } }
    ],
    visualTheme: 'potato'
  },
  {
    id: 'prod-04',
    slug: 'iqf-frozen-strawberries-vegetables',
    code: 'FOD-IQF-04',
    hsCode: '0811.10',
    category: 'food-commodities',
    categoryLabel: { ar: 'المواد الغذائية والمحاصيل الجافة', en: 'Foodstuffs & Dry Commodities' },
    name: { ar: 'الفراولة والخضروات المجمدة بتقنية التجميد السريع (IQF)', en: 'IQF Frozen Strawberries, Broccoli & Mixed Vegetables' },
    summary: {
      ar: 'فراولة وخضروات مصرية مجمدة بتقنية IQF الحديثة مع الحفاظ الكامل على القيمة الغذائية واللون الطبيعي.',
      en: 'Individually Quick Frozen (IQF) Egyptian strawberries, green beans, artichoke, and broccoli processed under BRC/ISO standards.'
    },
    description: {
      ar: 'يتم قطف المحاصيل في ذروة نضجها وتجميدها فورياً بتقنية (IQF) في مصانع حاصلة على شهادات BRC وFDA. مثالية لمصانع المربى والعصائر وشركات التوريد الفندقي وسلاسل التجزئة العالمية.',
      en: 'Harvested at peak ripeness and flash-frozen within hours using state-of-the-art IQF tunnels. Ideal for industrial jam/smoothie manufacturers, foodservice distributors, and retail private labels.'
    },
    origin: { ar: 'مصر (القليوبية / الإسماعيلية / العاشر من رمضان)', en: 'Egypt (Ismailia / 10th of Ramadan City)' },
    seasonOrAvailability: { ar: 'متاح طوال العام (تخزين مبرد -18°C)', en: 'Year-Round Availability (-18°C Cold Storage)' },
    packaging: { ar: 'كرتون 10 كجم سائب (Bulk) أو عبوات تجزئة 400 جرام - 2.5 كجم باسم العميل', en: '10 kg Bulk Cartons or 400g–2.5kg Retail Polybags (Private Label)' },
    minOrder: { ar: 'حاوية مبردة 40 قدم (-18°C) حمولة 24 طن', en: '1x 40ft Deep-Freeze Reefer (-18°C, 24 MT)' },
    shippingModes: { ar: 'شحن بحري مجمد (-18°C) / شحن بري مبرد', en: 'Deep-Freeze Sea Freight (-18°C)' },
    certifications: ['BRCGS Food', 'ISO 22000', 'FDA Registered', 'Halal / Kosher'],
    specs: [
      { label: { ar: 'الأصناف المتوفرة', en: 'Varieties' }, value: { ar: 'فراولة (Festival / Fortuna)، بامية، ملوخية، خرشوف، بسلة', en: 'Strawberries, Okra, Artichoke, Green Peas, Broccoli' } },
      { label: { ar: 'الفرز والدرجة', en: 'Grading' }, value: { ar: 'درجة أولى Class A - مفروزة بالليزر والمعادن', en: 'Laser Optical Sorted & Metal Detected' } },
      { label: { ar: 'درجة حرارة الحفظ', en: 'Storage Temp' }, value: { ar: '-18 درجة مئوية ثابتة', en: 'Constant -18°C Core Temperature' } }
    ],
    visualTheme: 'strawberry'
  },
  {
    id: 'prod-05',
    slug: 'white-beans-legumes-herbs',
    code: 'FOD-LEG-05',
    hsCode: '0713.33',
    category: 'food-commodities',
    categoryLabel: { ar: 'المواد الغذائية والمحاصيل الجافة', en: 'Foodstuffs & Dry Commodities' },
    name: { ar: 'البقوليات الجافة والأعشاب الطبية والعطرية', en: 'Egyptian Dry White Beans, Chickpeas & Aromatic Seeds' },
    summary: {
      ar: 'فاصوليا بيضاء، فول عريض، سمسم، وينسون وكمون وبابونج مفروزة إلكترونياً (Sortex) بنقاء يصل إلى 99.5%.',
      en: 'Sortex-cleaned Egyptian white kidney beans, fava beans, sesame, cumin, fennel, and chamomile at 99.5% purity.'
    },
    description: {
      ar: 'تشتهر البقوليات والتوابل المصرية بجودتها العالية في الأسواق الأوروبية والتركية والعربية. تخضع كافة الحبوب لعمليات الغربلة والفرز اللوني (Color Sortex) والتبخير المعتمد قبل الشحن.',
      en: 'Egyptian dry legumes and botanicals are globally renowned for high essential oil content and uniform grain size. Processed through multi-stage gravity tables and optical Sortex machines.'
    },
    origin: { ar: 'مصر (الفيوم / بني سويف / البحيرة)', en: 'Egypt (Fayoum / Beni Suef / Beheira)' },
    seasonOrAvailability: { ar: 'متاح طوال العام', en: 'Available Year-Round' },
    packaging: { ar: 'أجولة بولي بروبيلين منسوجة 25 كجم أو 50 كجم، أو أجولة ورقية متعددة الطبقات', en: '25 kg or 50 kg PP Woven Bags / Multi-wall Kraft Paper Bags' },
    minOrder: { ar: 'حاوية جافة 20 قدم (22 - 24 طن)', en: '1x 20ft Dry Container (22–24 MT)' },
    shippingModes: { ar: 'شحن بحري جاف (Dry Container) / شحن بري', en: 'Dry Container Sea Freight / Land Freight' },
    certifications: ['ISO 22000', 'Fumigation Cert', 'EUR.1 Certificate'],
    specs: [
      { label: { ar: 'نسبة النقاء', en: 'Purity Level' }, value: { ar: '99% إلى 99.8% (Sortex Cleaned)', en: '99.0% to 99.8% Sortex Cleaned' } },
      { label: { ar: 'نسبة الرطوبة', en: 'Moisture Content' }, value: { ar: 'أقل من 12% إلى 14% حسب الصنف', en: 'Max 12%–14% depending on crop' } },
      { label: { ar: 'الأصناف الرئيسية', en: 'Key Products' }, value: { ar: 'فاصوليا بيضاء، حمص، سمسم، شمر، كراوية، كركديه', en: 'White Beans, Chickpeas, Sesame, Fennel, Hibiscus' } }
    ],
    visualTheme: 'legumes'
  },
  {
    id: 'prod-06',
    slug: 'extra-virgin-olive-oil-olives',
    code: 'FOD-OLV-06',
    hsCode: '1509.20',
    category: 'food-commodities',
    categoryLabel: { ar: 'المواد الغذائية والمحاصيل الجافة', en: 'Foodstuffs & Dry Commodities' },
    name: { ar: 'زيت الزيتون البكر الممتاز وزيتون المائدة المخلل', en: 'Sinai Extra Virgin Olive Oil & Pickled Table Olives' },
    summary: {
      ar: 'زيت زيتون بكر ممتاز عصرة أولى على البارد بحموضة أقل من 0.8% وزيتون مائدة (كالاماتا، عجيزي، بيكوال).',
      en: 'Cold-pressed Extra Virgin Olive Oil (<0.8% acidity) and brined Kalamata, Picual, and Manzanilla table olives.'
    },
    description: {
      ar: 'من مزارع سيناء وسيوة ووادي النطرون، نوفر زيت زيتون بكر ممتاز طبيعي 100% وزيتون مائدة كامل أو شرائح أو مخلي في براميل غذائية للتصنيع أو عبوات زجاجية وصفيح جاهزة للتوزيع.',
      en: 'Pressed from hand-picked olives grown in Sinai and Siwa Oasis, our Extra Virgin Olive Oil and brined table olives are exported in bulk food-grade drums, IBC totes, and retail glass bottles.'
    },
    origin: { ar: 'مصر (سيناء / سيوة / وادي النطرون)', en: 'Egypt (Sinai / Siwa Oasis)' },
    seasonOrAvailability: { ar: 'متاح طوال العام', en: 'Available Year-Round' },
    packaging: { ar: 'زيت: عبوات 250مل - 5 لتر أو خزانات Flexitank / زيتون: براميل 150 كجم أو برطمانات', en: 'Oil: 250ml–5L Tins/Bottles or 20MT Flexitank / Olives: 150kg Drums' },
    minOrder: { ar: 'حاوية 20 قدم (18 - 22 طن)', en: '1x 20ft FCL Container (18–22 MT)' },
    shippingModes: { ar: 'شحن بحري جاف / شحن بري', en: 'Sea Freight (20ft FCL / Flexitank) / Land Freight' },
    certifications: ['IOC Standards', 'ISO 22000', 'Halal Certified'],
    specs: [
      { label: { ar: 'نسبة الحموضة (Acidity)', en: 'Free Acidity' }, value: { ar: 'أقل من 0.5% - 0.8% (Extra Virgin)', en: '< 0.5% – 0.8% Oleic Acid' } },
      { label: { ar: 'أصناف زيتون المائدة', en: 'Olive Varieties' }, value: { ar: 'كالاماتا، بيكوال، مانزانيلا، دولسي (كامل / شرائح)', en: 'Kalamata, Picual, Manzanilla (Whole / Sliced / Pitted)' } },
      { label: { ar: 'التعبئة الصناعية والتجارية', en: 'Packaging Options' }, value: { ar: 'براميل HDPE غذائية، صفيح، وزجاج', en: 'Food-grade HDPE Drums, Tin Cans, Dark Glass' } }
    ],
    visualTheme: 'olive-oil'
  },
  {
    id: 'prod-07',
    slug: 'medjool-siwi-dates',
    code: 'FOD-DAT-07',
    hsCode: '0804.10',
    category: 'food-commodities',
    categoryLabel: { ar: 'المواد الغذائية والمحاصيل الجافة', en: 'Foodstuffs & Dry Commodities' },
    name: { ar: 'التمور المصرية الفاخرة (مجدول، صعيدي، وعجوة التمر)', en: 'Premium Egyptian Medjool, Siwi Dates & Date Paste' },
    summary: {
      ar: 'تمور مجدول نصف جافة وتمور سيوي ومعجون التمر الطبيعي من واحات مصر لمصانع الحلويات والأسواق العالمية.',
      en: 'Jumbo Egyptian Medjool dates, semi-dry Siwi dates, and pure date paste for retail and confectionery industries.'
    },
    description: {
      ar: 'تُعد مصر المنتج الأول للتمور عالمياً. نوفر تمور المجدول الفاخرة بأحجام جامبو وسوبر جامبو، بالإضافة إلى التمور النصف جافة ومعجون التمر المفروم والمعقم لمصانع البسكويت والمخبوزات.',
      en: 'As the world’s largest date producer, Egypt offers exceptional Jumbo Medjool dates alongside semi-dry Siwi dates and sterilized date paste blocks for bakeries and retail chains.'
    },
    origin: { ar: 'مصر (الواحات البحرية / سيوة / الوادي الجديد)', en: 'Egypt (Bahariya Oasis / Siwa / New Valley)' },
    seasonOrAvailability: { ar: 'أكتوبر حتى نهاية العام (مبرد طوال العام)', en: 'October Harvest (Year-Round Cold Storage)' },
    packaging: { ar: 'علب كرتون فاخرة 1 كجم / 5 كجم للمجدول، وكرتون 10 كجم للتمور والعجوة', en: '1 kg & 5 kg Luxury Medjool Boxes / 10 kg Bulk Cartons' },
    minOrder: { ar: 'حاوية 20 قدم أو 40 قدم مبردة (18 - 25 طن)', en: '1x 20ft or 40ft Container (18–25 MT)' },
    shippingModes: { ar: 'شحن بحري مبرد / شحن جوي للطلبيات الفاخرة', en: 'Reefer Sea Freight / Air Cargo' },
    certifications: ['ISO 22000', 'HACCP', 'Organic Options Available'],
    specs: [
      { label: { ar: 'درجات المجدول', en: 'Medjool Grades' }, value: { ar: 'Super Jumbo / Jumbo / Large (رطوبة 20% - 24%)', en: 'Super Jumbo / Jumbo / Large (20%–24% Moisture)' } },
      { label: { ar: 'معجون التمر (Date Paste)', en: 'Date Paste Spec' }, value: { ar: 'خالي من النوى والشوائب - Brix 70+', en: 'Double-minced, pit-free, Brix 70+' } },
      { label: { ar: 'الصلاحية', en: 'Shelf Life' }, value: { ar: '12 إلى 18 شهراً في التبريد المناسب', en: '12 to 18 Months under cool storage' } }
    ],
    visualTheme: 'dates'
  },
  {
    id: 'prod-08',
    slug: 'portland-white-cement-clinker',
    code: 'IND-CEM-08',
    hsCode: '2523.29',
    category: 'industrial-building',
    categoryLabel: { ar: 'مواد البناء والتوريدات الصناعية', en: 'Construction & Industrial Supplies' },
    name: { ar: 'الأسمنت البورتلاندي الرمادي والأبيض والكلينكر', en: 'Ordinary Portland Cement (CEM I 42.5N/52.5N), White Cement & Clinker' },
    summary: {
      ar: 'توريد وتصدير الأسمنت المصري الرمادي والأبيض والجبس والكلينكر مطابق للمواصفات الأوروبية والأمريكية.',
      en: 'Bulk and jumbo-bagged Egyptian Grey Portland Cement, Royal White Cement, and Clinker conforming to EN 197-1 / ASTM C150.'
    },
    description: {
      ar: 'نقوم بتصدير الأسمنت المصري عالي المقاومة والأسمنت الأبيض الناصع لمشروعات البنية التحتية والتعمير في أفريقيا وحوض البحر المتوسط والدول العربية، سواء في أجولة جامبو أو سفن صب كاملة.',
      en: 'We supply high-strength Egyptian Portland cement and high-whiteness architectural cement for infrastructure and construction projects across Africa, the Mediterranean, and the Middle East.'
    },
    origin: { ar: 'مصر (السويس / سيناء / المنيا / بني سويف)', en: 'Egypt (Sinai / Suez / Beni Suef)' },
    seasonOrAvailability: { ar: 'متاح للتوريد الفوري طوال العام', en: 'Immediate Year-Round Supply' },
    packaging: { ar: 'شكائر 50 كجم داخل أجولة جامبو 1.5 طن (Sling Bags) أو صب في سفن كاملة', en: '50 kg Kraft Bags inside 1.5 MT Jumbo Sling Bags or Bulk Vessel' },
    minOrder: { ar: '100 طن (حاويات) أو 5,000+ طن (سفن كاملة)', en: '100 MT (Containers) or 5,000+ MT (Bulk Vessel Charter)' },
    shippingModes: { ar: 'شحن بحري في حاويات 20 قدم / استئجار سفن كاملة (Breakbulk)', en: '20ft Heavy Containers / Full Bulk Vessel Charter' },
    certifications: ['EN 197-1 Certified', 'ASTM C150', 'ISO 9001 & ISO 14001'],
    specs: [
      { label: { ar: 'الرتب المتاحة', en: 'Cement Grades' }, value: { ar: 'CEM I 42.5N / CEM I 52.5N / White CEM I 52.5N', en: 'CEM I 42.5N / CEM I 52.5N / White Cement 85%+ Whiteness' } },
      { label: { ar: 'المواصفة القياسية', en: 'Standard Compliance' }, value: { ar: 'المواصفة الأوروبية EN 197-1 والأمريكية ASTM C150', en: 'European EN 197-1 & American ASTM C150' } },
      { label: { ar: 'مقاومة الحماية للرطوبة', en: 'Moisture Protection' }, value: { ar: 'تغليف داخلي بولي إيثيلين مقاوم للرطوبة البحرية', en: 'PE-lined jumbo bags for maritime humidity protection' } }
    ],
    visualTheme: 'cement'
  },
  {
    id: 'prod-09',
    slug: 'egyptian-marble-granite-slabs',
    code: 'IND-MRB-09',
    hsCode: '6802.21',
    category: 'industrial-building',
    categoryLabel: { ar: 'مواد البناء والتوريدات الصناعية', en: 'Construction & Industrial Supplies' },
    name: { ar: 'الرخام والجرانيت المصري الطبيعي (ألواح وترابيع وبلوكات)', en: 'Egyptian Natural Marble & Granite (Slabs, Tiles & Blocks)' },
    summary: {
      ar: 'رخام صني، جلالة، سيلفيا، وجرانيت أسواني (أحمر، جندولا، حلايب) مصقول ومعالج بأحدث خطوط الإيطالية.',
      en: 'Precision-cut Egyptian Galala, Sunny, Silvia marble and Aswan Red, Gandola, and Halayeb granite slabs and tiles.'
    },
    description: {
      ar: 'يتمتع الرخام والجرانيت المصري بشهرة عالمية لصلابته وتنوع ألوانه الدافئة. نوفر الترابيع القياسية والألواح المصقولة أو الغشيمة أو المفجر باللهب (Flamed) مع تحزيم خشبي مدخن ومؤمن للشحن البحري.',
      en: 'Processed in Shaq El-Thu’ban and Sadat City using Italian gang-saws and automatic polishing lines. Available in polished, honed, brushed, and flamed finishes inside fumigated wooden bundles.'
    },
    origin: { ar: 'مصر (الجلالة / أسوان / شق الثعبان)', en: 'Egypt (Galala / Aswan / Cairo)' },
    seasonOrAvailability: { ar: 'تصنيع وتوريد طوال العام', en: 'Year-Round Quarry & Factory Supply' },
    packaging: { ar: 'حزم خشبية مدخنة (Wooden Bundles) للألواح وصناديق خشبية محكمة للترابيع', en: 'ISPM-15 Fumigated Wooden Bundles & Crates' },
    minOrder: { ar: 'حاوية 20 قدم ثقيلة (25 - 27 طن / حوالي 450 متر مربع)', en: '1x 20ft Open-Top or Dry Container (25–27 MT)' },
    shippingModes: { ar: 'شحن بحري (حاويات 20 قدم) / شحن بري', en: '20ft Heavy Duty Container / Flatbed Land Truck' },
    certifications: ['CE Marked', 'ISPM-15 Wood Packaging', 'ISO 9001'],
    specs: [
      { label: { ar: 'الأشهر في الرخام', en: 'Marble Varieties' }, value: { ar: 'جلالة فص وكريمي، صني منيا، سيلفيا، تريستا، مليحة', en: 'Galala Beige, Sunny, Silvia, Triesta, Sinai Pearl' } },
      { label: { ar: 'الأشهر في الجرانيت', en: 'Granite Varieties' }, value: { ar: 'أحمر أسواني، جندولا، فيردي غزال، حلايب، نيو حلايب', en: 'Aswan Red, Gandola, Verde Ghazal, Halayeb White' } },
      { label: { ar: 'السماكات القياسية', en: 'Standard Thickness' }, value: { ar: '1.5 سم، 2 سم، 3 سم، وسمكات خاصة للانترلوك والبردورات', en: '15mm, 20mm, 30mm & custom cobblestone thicknesses' } }
    ],
    visualTheme: 'marble'
  },
  {
    id: 'prod-10',
    slug: 'steel-profiles-industrial-metals',
    code: 'IND-STL-10',
    hsCode: '7214.20',
    category: 'industrial-building',
    categoryLabel: { ar: 'مواد البناء والتوريدات الصناعية', en: 'Construction & Industrial Supplies' },
    name: { ar: 'قطاعات الحديد، الصاج المجلفن، ومستلزمات الهياكل المعدنية', en: 'Structural Steel Profiles, Galvanized Coils & Metal Supplies' },
    summary: {
      ar: 'توريد قطاعات الحديد الصناعي، الصاج المجلفن والملون، ومواد العزل للمشروعات الصناعية والمقاولات.',
      en: 'Supply of structural steel sections, hot-dip galvanized coils, corrugated sheets, and rockwool insulation materials.'
    },
    description: {
      ar: 'تعمل الشركة المصرية كشريك توريد استراتيجي للمصانع وشركات المقاولات، حيث نوفر قطاعات الصلب، لفائف الصاج المجلفن، ومواد العزل الحراري والصوتي المعتمدة للمباني الصناعية والمستودعات.',
      en: 'El Masria Trading serves as a premier industrial supply partner for factories and EPC contractors, delivering certified structural steel, galvanized sheets, and thermal insulation.'
    },
    origin: { ar: 'مصر (العاشر من رمضان / السادات / العين السخنة)', en: 'Egypt (Ain Sokhna / 10th of Ramadan / Sadat City)' },
    seasonOrAvailability: { ar: 'متاح طوال العام حسب جداول التوريد', en: 'Year-Round Contract & Spot Supply' },
    packaging: { ar: 'ربطات قياسية مطوقة بالصلب (Steel Strapped Bundles) ومحمية ضد الصدأ', en: 'Steel-strapped export bundles with anti-corrosion wrapping' },
    minOrder: { ar: '25 طن (توريد محلي أو تصدير)', en: '25 MT Minimum Order Quantity' },
    shippingModes: { ar: 'شحن بحري / نقل بري بالتريلات المسطحة', en: 'Sea Freight / Flatbed Land Trailers' },
    certifications: ['ISO 9001:2015', 'ASTM / DIN Standards', 'Mill Test Certificate (MTC)'],
    specs: [
      { label: { ar: 'المنتجات المتوفرة', en: 'Product Range' }, value: { ar: 'لفائف وألواح مجلفنة، قطاعات، مواسير، وصوف صخري عازل', en: 'GI Coils, Corrugated Sheets, Steel Pipes, Rockwool Panels' } },
      { label: { ar: 'شهادات الجودة', en: 'Quality Assurance' }, value: { ar: 'مرفق شهادة اختبار المصنع (MTC 3.1) لكل تشغيلة', en: 'Supplied with official Mill Test Certificates (EN 10204 3.1)' } },
      { label: { ar: 'مجالات الاستخدام', en: 'Applications' }, value: { ar: 'الجمالونات المعدنية، المصانع، خطوط التبريد، والمقاولات', en: 'Steel warehouses, HVAC ducting, industrial construction' } }
    ],
    visualTheme: 'steel'
  },
  {
    id: 'prod-11',
    slug: 'rock-phosphate-silica-fertilizers',
    code: 'CHM-FRT-11',
    hsCode: '3103.11',
    category: 'chemicals-packaging',
    categoryLabel: { ar: 'الكيماويات والأسمدة ومواد التعبئة', en: 'Chemicals, Fertilizers & Packaging' },
    name: { ar: 'الأسمدة الفوسفاتية، الفوسفات الصخري، ورمل السيليكا النقي', en: 'Egyptian Rock Phosphate, Superphosphate (SSP/GSSP) & Silica Sand' },
    summary: {
      ar: 'تصدير الفوسفات المصري، السوبر فوسفات الأحادي المحبب والناعم، كربونات الكالسيوم، ورمل السيليكا عالي النقاء.',
      en: 'High-grade Egyptian Rock Phosphate, Granular/Powder Single Superphosphate (SSP), Calcium Carbonate, and low-iron Silica Sand.'
    },
    description: {
      ar: 'تزخر مصر باحتياطيات هائلة من الخامات التعدينية والأسمدة الزراعية. نقوم بتوريد وتصدير الأسمدة الفوسفاتية وكربونات الكالسيوم ورمل السيليكا لمصانع الزجاج والكيماويات والقطاع الزراعي العالمي مع تقديم تقارير تحليل معملية (SGS).',
      en: 'Backed by Egypt’s rich mineral deposits, we export Granular SSP fertilizers, micronized Calcium Carbonate, and high-purity Silica Sand with independent SGS pre-shipment analysis.'
    },
    origin: { ar: 'مصر (البحر الأحمر / السباعية / سيناء / المنيا)', en: 'Egypt (Red Sea / Nile Valley / Sinai)' },
    seasonOrAvailability: { ar: 'توريد مستمر طوال العام', en: 'Year-Round Quarry & Plant Output' },
    packaging: { ar: 'أجولة جامبو 1000 - 1250 كجم مبطنة أو شحن صب في سفن كاملة', en: '1,000–1,250 kg Lined Jumbo Bags or Bulk Vessel' },
    minOrder: { ar: '100 طن (حاويات 20 قدم) أو سفن صب كاملة', en: '100 MT (20ft Containers) or Bulk Charter' },
    shippingModes: { ar: 'شحن بحري (حاويات 20 قدم / سفن صب)', en: '20ft Heavy Containers / Bulk Vessel' },
    certifications: ['SGS Lab Tested', 'ISO 9001', 'REACH Compliant'],
    specs: [
      { label: { ar: 'تركيز الفوسفور (P2O5)', en: 'P2O5 Content' }, value: { ar: 'سوبر فوسفات 18% - 21% / فوسفات صخري 26% - 31%', en: 'SSP 18%–21% P2O5 / Rock Phosphate 26%–31% P2O5' } },
      { label: { ar: 'نقاء رمل السيليكا', en: 'Silica Purity' }, value: { ar: 'SiO2 أعلى من 99.2% مع نسبة أكسيد حديد منخفضة جداً', en: 'SiO2 > 99.2% with ultra-low Fe2O3 content' } },
      { label: { ar: 'الفحص المستقل', en: 'Third-Party Assay' }, value: { ar: 'إمكانية الفحص عبر SGS أو Intertek قبل الشحن', en: 'Optional SGS / Intertek inspection at loading port' } }
    ],
    visualTheme: 'fertilizer'
  },
  {
    id: 'prod-12',
    slug: 'pp-woven-bags-corrugated-packaging',
    code: 'CHM-PKG-12',
    hsCode: '6305.33',
    category: 'chemicals-packaging',
    categoryLabel: { ar: 'الكيماويات والأسمدة ومواد التعبئة', en: 'Chemicals, Fertilizers & Packaging' },
    name: { ar: 'أجولة البولي بروبيلين (PP/FIBC)، رولات الاسترتش، والكرتون المضلع', en: 'PP Woven Bags, FIBC Jumbo Bags & Export Corrugated Cartons' },
    summary: {
      ar: 'حلول تعبئة وتغليف صناعية وزراعية تشمل أجولة الجامبو (FIBC)، أجولة منسوجة ومطبوعة، وصناديق كرتون التصدير.',
      en: 'Industrial and agricultural packaging solutions: FIBC Jumbo Bags, printed PP woven sacks, stretch film, and export cartons.'
    },
    description: {
      ar: 'نوفر للمصانع والمصدرين كافة مستلزمات التعبئة والتغليف القياسية المطابقة لمواصفات التصدير، بما في ذلك أجولة الجامبو ذات عوامل الأمان العالية (5:1 و 6:1) وصناديق الكرتون المقاومة للرطوبة.',
      en: 'We supply factories and agricultural packhouses with heavy-duty FIBC jumbo bags (5:1 and 6:1 safety factor), custom-printed PP woven sacks, pallet stretch wrap, and moisture-resistant telescopic cartons.'
    },
    origin: { ar: 'مصر (العاشر من رمضان / برج العرب / 6 أكتوبر)', en: 'Egypt (10th of Ramadan / Borg El Arab / 6th of October)' },
    seasonOrAvailability: { ar: 'تصنيع حسب الطلب والمقاسات طوال العام', en: 'Custom Manufactured Year-Round' },
    packaging: { ar: 'بالات مضغوطة هيدروليكياً وعلى طبالي خشبية لسهولة التفريغ', en: 'Hydraulically Compressed Bales on Fumigated Pallets' },
    minOrder: { ar: 'حاوية 20 قدم أو 40 قدم High Cube', en: '1x 20ft or 40ft High Cube Container' },
    shippingModes: { ar: 'شحن بحري / شحن بري', en: 'Sea Freight / Land Freight' },
    certifications: ['ISO 9001:2015', 'ISO 22000 Food Grade', 'EFIBCA Safety Standards'],
    specs: [
      { label: { ar: 'حمولة أجولة الجامبو', en: 'FIBC Safe Working Load' }, value: { ar: '500 كجم حتى 2000 كجم (معامل أمان 5:1 أو 6:1)', en: '500 kg to 2,000 kg SWL (5:1 or 6:1 Safety Factor)' } },
      { label: { ar: 'خيارات الطباعة والعزل', en: 'Customization' }, value: { ar: 'طباعة حتى 6 ألوان، معالجة UV، وتبطين داخلي PE', en: 'Up to 6-color printing, UV stabilization, PE liners' } },
      { label: { ar: 'التوافق الغذائي والصناعي', en: 'Grade Options' }, value: { ar: 'خامات بكر 100% (Virgin PP) صالحة للمواد الغذائية والكيماويات', en: '100% Virgin Polypropylene food-grade & industrial options' } }
    ],
    visualTheme: 'packaging'
  }
];

export const CLIENT_PARTNERS = [
  {
    name: 'Zamil Steel',
    arabicName: 'الزامل للحديد',
    sector: { ar: 'الهياكل المعدنية والإنشاءات الصناعية', en: 'Structural Steel & Industrial Construction' },
    code: 'ZAMIL STEEL'
  },
  {
    name: 'Fine Hygienic Holding',
    arabicName: 'مجموعة فاين الصحية القابضة',
    sector: { ar: 'المنتجات الورقية والصحية الاستهلاكية', en: 'Hygienic Paper & FMCG Manufacturing' },
    code: 'FINE GROUP'
  },
  {
    name: 'Boom Plus Construction',
    arabicName: 'بوم بلس للمقاولات والتطوير',
    sector: { ar: 'المشروعات الهندسية والتوريدات الإنشائية', en: 'Engineering & Construction Supplies' },
    code: 'BOOM PLUS'
  },
  {
    name: 'Royal Ceramica',
    arabicName: 'رويال للسيراميك والبورسلين',
    sector: { ar: 'صناعة وتصدير السيراميك والأدوات الصحية', en: 'Ceramics & Porcelain Export Manufacturing' },
    code: 'ROYAL CERAMICA'
  },
  {
    name: 'GlassRock Insulation',
    arabicName: 'جلاس روك للعزل الحراري والصوتي',
    sector: { ar: 'مواد العزل الصناعي والصوف الصخري', en: 'Industrial Rockwool & Thermal Insulation' },
    code: 'GLASSROCK S.A.E'
  }
];
