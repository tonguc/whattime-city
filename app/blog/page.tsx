import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getAllCategories } from '@/lib/blog';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dijital pazarlama, SEO ve tasarım hakkında güncel makaleler ve rehberler',
};

export default function BlogPage() {
  const categories = getAllCategories();
  const allPosts = blogPosts;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section py-16 bg-navy-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-400">
              Dijital pazarlama, SEO ve tasarım hakkında güncel içerikler
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full bg-amber text-navy font-semibold text-sm"
            >
              Tümü ({allPosts.length})
            </Link>
            {categories.map((category) => {
              const count = allPosts.filter(p => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/blog?category=${category}`}
                  className="px-4 py-2 rounded-full bg-navy-light border border-gray-800 hover:border-amber text-gray-300 hover:text-amber font-semibold text-sm transition-all"
                >
                  {category} ({count})
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card glow group overflow-hidden p-0"
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
                  {post.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-amber/90 text-navy text-xs font-bold rounded-full">
                      ⭐ ÖNE ÇIKAN
                    </div>
                  )}
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

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 bg-navy rounded text-gray-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

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
        </div>
      </section>
    </div>
  );
}
