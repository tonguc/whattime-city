/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ EN ÖNEMLİSİ: Projeyi statik HTML'e çevirir (Cloudflare/Hosting için şart)
  output: 'export',

  // ✅ URL'lerin sonuna / ekler (SEO ve hosting uyumluluğu için iyidir)
  trailingSlash: true,

  // ✅ Vercel dışında resimlerin görünmesi için bu şarttır
  images: {
    unoptimized: true,
  },

  // ✅ Build sırasında gereksiz yönlendirme hatalarını engeller
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;