import Link from "next/link";
import Image from "next/image";
import { getFeaturedPosts } from "@/lib/blog";

export default function BlogPreview() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <section className="section bg-navy-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Son <span className="text-gradient">Blog Yazıları</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Dijital pazarlama, SEO ve tasarım hakkında güncel içerikler
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card glow group overflow-hidden p-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-amber text-navy text-sm font-semibold rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{new Date(post.publishDate).toLocaleDateString('tr-TR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold group-hover:text-amber transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-amber font-semibold pt-2 group-hover:gap-4 transition-all">
                  Devamını Oku
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/blog" className="btn btn-secondary">
            Tüm Yazılar
          </Link>
        </div>
      </div>
    </section>
  );
}
