export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  featured: boolean;
  featuredImage: string;
  contentImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-nedir-nasil-yapilir",
    title: "SEO Nedir, Nasıl Yapılır?",
    excerpt: "SEO (Search Engine Optimization), web sitenizin arama motorlarında üst sıralarda yer almasını sağlayan tekniklerin bütünüdür.",
    content: "SEO (Search Engine Optimization - Arama Motoru Optimizasyonu), web sitenizin Google gibi arama motorlarında organik olarak üst sıralarda görünmesini sağlayan stratejilerin ve tekniklerin tamamıdır...",
    category: "SEO",
    tags: ["seo", "arama motoru optimizasyonu", "google"],
    publishDate: "2024-01-15",
    readTime: "8 dk",
    featured: true,
    featuredImage: "/images/blog/seo-nedir-nasil-yapilir-featured.png",
    contentImage: "/images/blog/seo-nedir-nasil-yapilir-content.png"
  },
  {
    slug: "inbound-marketing-nedir-nasil-yapilir",
    title: "Inbound Marketing Nedir, Nasıl Yapılır?",
    excerpt: "Inbound marketing, potansiyel müşterileri markanıza çekerek onları sadık müşterilere dönüştürme stratejisidir.",
    content: "Inbound marketing, geleneksel pazarlama yöntemlerinin aksine, müşterilere değerli içerikler sunarak onları markanıza çekmeyi amaçlayan bir stratejidir...",
    category: "Dijital Pazarlama",
    tags: ["inbound marketing", "içerik pazarlaması", "lead generation"],
    publishDate: "2024-01-10",
    readTime: "7 dk",
    featured: true,
    featuredImage: "/images/blog/inbound-marketing-nedir-nasil-yapilir-featured.png",
    contentImage: "/images/blog/inbound-marketing-nedir-nasil-yapilir-content.png"
  },
  {
    slug: "kaliteli-backlink-nedir-nasil-alinir",
    title: "Kaliteli Backlink Nedir, Nasıl Alınır?",
    excerpt: "Kaliteli backlinkler, SEO başarınızın en önemli faktörlerinden biridir. Doğru stratejilerle backlink profil inizi güçlendirin.",
    content: "Backlink, başka web sitelerinden sizin sitenize verilen linklerdir. Kaliteli backlinkler, Google'ın gözünde sitenizin otoritesini artırır...",
    category: "SEO",
    tags: ["backlink", "link building", "seo"],
    publishDate: "2024-01-08",
    readTime: "10 dk",
    featured: false,
    featuredImage: "/images/blog/kaliteli-backlink-nedir-nasil-alinir-featured.png",
    contentImage: "/images/blog/kaliteli-backlink-nedir-nasil-alinir-content.png"
  },
  {
    slug: "e-ticaret-icin-dijital-pazarlama",
    title: "E-Ticaret İçin Dijital Pazarlama",
    excerpt: "E-ticaret sitenizin satışlarını artırmak için etkili dijital pazarlama stratejileri ve taktikleri.",
    content: "E-ticaret dünyasında başarılı olmak için güçlü bir dijital pazarlama stratejisine ihtiyacınız var...",
    category: "Dijital Pazarlama",
    tags: ["e-ticaret", "dijital pazarlama", "online satış"],
    publishDate: "2024-01-05",
    readTime: "9 dk",
    featured: true,
    featuredImage: "/images/blog/e-ticaret-icin-dijital-pazarlama-featured.png",
    contentImage: "/images/blog/e-ticaret-icin-dijital-pazarlama-content.png"
  },
  {
    slug: "dijital-pazarlama-stratejileri-ve-araclari",
    title: "Dijital Pazarlama Stratejileri ve Araçları",
    excerpt: "2024'te kullanmanız gereken en etkili dijital pazarlama stratejileri ve araçları.",
    content: "Dijital pazarlama dünyası sürekli değişiyor. Bu yazıda, 2024'te başarılı olmak için kullanmanız gereken stratejiler ve araçları keşfedeceksiniz...",
    category: "Dijital Pazarlama",
    tags: ["dijital pazarlama", "pazarlama araçları", "stratejiler"],
    publishDate: "2024-01-03",
    readTime: "11 dk",
    featured: false,
    featuredImage: "/images/blog/dijital-pazarlama-stratejileri-ve-araclari-featured.png",
    contentImage: "/images/blog/dijital-pazarlama-stratejileri-ve-araclari-content.png"
  },
  {
    slug: "kullanmaniz-gereken-seo-araclari-nelerdir",
    title: "Kullanmanız Gereken SEO Araçları Nelerdir?",
    excerpt: "SEO çalışmalarınızı kolaylaştıracak ve sonuçlarınızı iyileştirecek en iyi SEO araçları.",
    content: "SEO'da başarılı olmak için doğru araçları kullanmak kritik önem taşır. Bu yazıda, profesyonellerin kullandığı en iyi SEO araçlarını inceleyeceğiz...",
    category: "SEO",
    tags: ["seo araçları", "ahrefs", "semrush", "google search console"],
    publishDate: "2023-12-28",
    readTime: "8 dk",
    featured: false,
    featuredImage: "/images/blog/kullanmaniz-gereken-seo-araclari-nelerdir-featured.png",
    contentImage: "/images/blog/kullanmaniz-gereken-seo-araclari-nelerdir-content.png"
  },
  {
    slug: "google-analytics-ile-site-optimizasyonu",
    title: "Google Analytics İle Site Optimizasyonu",
    excerpt: "Google Analytics verilerini kullanarak web sitenizin performansını nasıl optimize edebilirsiniz?",
    content: "Google Analytics, web sitenizin performansını anlamanız ve optimize etmeniz için vazgeçilmez bir araçtır...",
    category: "UI-UX",
    tags: ["google analytics", "web analytics", "optimizasyon"],
    publishDate: "2023-12-25",
    readTime: "9 dk",
    featured: false,
    featuredImage: "/images/blog/google-analytics-ile-site-optimizasyonu-featured.png",
    contentImage: "/images/blog/google-analytics-ile-site-optimizasyonu-content.png"
  },
  {
    slug: "site-ici-seo-nasil-yapilir",
    title: "Site İçi SEO Nasıl Yapılır? Ayrıntılı Rehberi",
    excerpt: "On-page SEO teknikleriyle web sitenizin arama motorlarındaki performansını artırın.",
    content: "Site içi SEO (On-Page SEO), web sayfalarınızı arama motorları için optimize etme sürecidir...",
    category: "SEO",
    tags: ["on-page seo", "site içi seo", "içerik optimizasyonu"],
    publishDate: "2023-12-20",
    readTime: "12 dk",
    featured: false,
    featuredImage: "/images/blog/site-ici-seo-nasil-yapilir-featured.png",
    contentImage: "/images/blog/site-ici-seo-nasil-yapilir-content.png"
  },
  {
    slug: "sosyal-medya-yonetimi-ve-online-pazarlama",
    title: "Sosyal Medya Yönetimi ve Online Pazarlama",
    excerpt: "Sosyal medya platformlarında etkili bir varlık oluşturun ve hedef kitlenizle bağlantı kurun.",
    content: "Sosyal medya yönetimi, markanızın sosyal platformlardaki varlığını stratejik olarak yönetme sürecidir...",
    category: "Dijital Pazarlama",
    tags: ["sosyal medya", "community management", "online pazarlama"],
    publishDate: "2023-12-15",
    readTime: "10 dk",
    featured: false,
    featuredImage: "/images/blog/sosyal-medya-yonetimi-ve-online-pazarlama-featured.png",
    contentImage: "/images/blog/sosyal-medya-yonetimi-ve-online-pazarlama-content.png"
  },
  {
    slug: "serp-nedir-google-icin-neden-onemlidir",
    title: "SERP Nedir, Google İçin Neden Önemlidir?",
    excerpt: "SERP'leri anlamak ve optimize etmek, SEO stratejinizin temel taşlarından biridir.",
    content: "SERP (Search Engine Results Page), arama motorlarında bir sorgu yapıldığında gösterilen sonuç sayfasıdır...",
    category: "SEO",
    tags: ["serp", "arama sonuçları", "google serp"],
    publishDate: "2023-12-10",
    readTime: "7 dk",
    featured: false,
    featuredImage: "/images/blog/serp-nedir-google-icin-neden-onemlidir-featured.png",
    contentImage: "/images/blog/serp-nedir-google-icin-neden-onemlidir-content.png"
  },
  {
    slug: "heading-tags-nedir-h1-etiketi-nasil-kullanilir",
    title: "Heading Tags Nedir, H1 Etiketi Nasıl Kullanılır?",
    excerpt: "HTML başlık etiketlerini doğru kullanarak SEO performansınızı artırın.",
    content: "Heading tags (başlık etiketleri), HTML'de içeriği yapılandırmak için kullanılan etiketlerdir...",
    category: "SEO",
    tags: ["heading tags", "h1", "html seo"],
    publishDate: "2023-12-05",
    readTime: "6 dk",
    featured: false,
    featuredImage: "/images/blog/heading-tags-nedir-h1-etiketi-nasil-kullanilir-featured.png",
    contentImage: "/images/blog/heading-tags-nedir-h1-etiketi-nasil-kullanilir-content.png"
  },
  {
    slug: "seo-ile-organik-trafigi-artirmanin-yontemleri",
    title: "SEO ile Organik Trafiği Artırmanın Yöntemleri",
    excerpt: "Kanıtlanmış SEO teknikleriyle web sitenizin organik trafiğini katlamak için stratejiler.",
    content: "Organik trafik, web sitenize arama motorları üzerinden gelen ziyaretçilerdir...",
    category: "SEO",
    tags: ["organik trafik", "seo stratejileri", "trafik artırma"],
    publishDate: "2023-12-01",
    readTime: "10 dk",
    featured: false,
    featuredImage: "/images/blog/seo-ile-organik-trafigi-artirmanin-yontemleri-featured.png",
    contentImage: "/images/blog/seo-ile-organik-trafigi-artirmanin-yontemleri-content.png"
  },
  {
    slug: "profesyonel-seo-uzmani-nedir-nasil-olunur",
    title: "Profesyonel SEO Uzmanı Nedir, Nasıl Olunur?",
    excerpt: "SEO kariyerine başlamak isteyenler için kapsamlı rehber ve kariyer yol haritası.",
    content: "SEO uzmanı, web sitelerinin arama motorlarında daha üst sıralarda yer alması için çalışan profesyonellerdir...",
    category: "SEO",
    tags: ["seo uzmanı", "kariyer", "seo eğitimi"],
    publishDate: "2023-11-25",
    readTime: "11 dk",
    featured: false,
    featuredImage: "/images/blog/profesyonel-seo-uzmani-nedir-nasil-olunur-featured.png",
    contentImage: "/images/blog/profesyonel-seo-uzmani-nedir-nasil-olunur-content.png"
  },
  {
    slug: "dropshipping-ile-dijital-pazarlama",
    title: "Dropshipping ile Dijital Pazarlama",
    excerpt: "Dropshipping iş modelinde başarılı olmak için dijital pazarlama stratejileri.",
    content: "Dropshipping, envanter tutmadan e-ticaret yapmanızı sağlayan bir iş modelidir...",
    category: "Dijital Pazarlama",
    tags: ["dropshipping", "e-ticaret", "online satış"],
    publishDate: "2023-11-20",
    readTime: "9 dk",
    featured: false,
    featuredImage: "/images/blog/dropshipping-ile-dijital-pazarlama-featured.png",
    contentImage: "/images/blog/dropshipping-ile-dijital-pazarlama-content.png"
  },
  {
    slug: "icerik-pazarlamasi-ve-seo-optimizasyonu",
    title: "İçerik Pazarlaması ve SEO Optimizasyonu",
    excerpt: "İçerik pazarlaması ve SEO'yu birleştirerek maksimum sonuç elde edin.",
    content: "İçerik pazarlaması, hedef kitlenize değerli içerikler sunarak onları çekme ve dönüştürme sanatıdır...",
    category: "SEO",
    tags: ["içerik pazarlaması", "seo", "content marketing"],
    publishDate: "2023-11-15",
    readTime: "10 dk",
    featured: false,
    featuredImage: "/images/blog/icerik-pazarlamasi-ve-seo-optimizasyonu-featured.png",
    contentImage: "/images/blog/icerik-pazarlamasi-ve-seo-optimizasyonu-content.png"
  },
  {
    slug: "en-etkili-dijital-pazarlama-yontemleri",
    title: "En Etkili Dijital Pazarlama Yöntemleri",
    excerpt: "2024'te işinizi büyütmek için kullanmanız gereken en etkili dijital pazarlama yöntemleri.",
    content: "Dijital pazarlama, çevrimiçi kanalları kullanarak ürün ve hizmetlerinizi tanıtma sürecidir...",
    category: "Dijital Pazarlama",
    tags: ["dijital pazarlama", "pazarlama stratejileri", "online marketing"],
    publishDate: "2023-11-10",
    readTime: "12 dk",
    featured: false,
    featuredImage: "/images/blog/en-etkili-dijital-pazarlama-yontemleri-featured.png",
    contentImage: "/images/blog/en-etkili-dijital-pazarlama-yontemleri-content.png"
  },
  {
    slug: "kaliteli-ve-ozgun-icerigin-seo-icin-onemi",
    title: "Kaliteli ve Özgün İçeriğin SEO İçin Önemi",
    excerpt: "SEO'da içerik hala kraldır. Kaliteli içerik üretmenin yollarını keşfedin.",
    content: "SEO dünyasında 'içerik kraldır' sözü boşuna söylenmez. Google, kullanıcılarına en iyi deneyimi sunmak ister...",
    category: "SEO",
    tags: ["içerik kalitesi", "seo içeriği", "özgün içerik"],
    publishDate: "2023-11-05",
    readTime: "8 dk",
    featured: false,
    featuredImage: "/images/blog/kaliteli-ve-ozgun-icerigin-seo-icin-onemi-featured.png",
    contentImage: "/images/blog/kaliteli-ve-ozgun-icerigin-seo-icin-onemi-content.png"
  },
  {
    slug: "anahtar-kelime-analizi-yapan-seo-araclari",
    title: "Anahtar Kelime Analizi Yapan SEO Araçları",
    excerpt: "Keyword research için kullanmanız gereken en iyi araçlar ve nasıl kullanılacağı.",
    content: "Anahtar kelime analizi, SEO stratejinizin temel taşıdır. Doğru araçlarla hedef kitlenizin ne aradığını anlayabilirsiniz...",
    category: "SEO",
    tags: ["anahtar kelime", "keyword research", "seo araçları"],
    publishDate: "2023-11-01",
    readTime: "9 dk",
    featured: false,
    featuredImage: "/images/blog/anahtar-kelime-analizi-yapan-seo-araclari-featured.png",
    contentImage: "/images/blog/anahtar-kelime-analizi-yapan-seo-araclari-content.png"
  }
];

// Helper functions
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return blogPosts.filter(post => post.featured).slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllCategories(): string[] {
  const categories = new Set(blogPosts.map(post => post.category));
  return Array.from(categories);
}
