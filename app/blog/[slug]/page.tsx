import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getPostBySlug } from '@/lib/blog';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: ['Tonguç Karaçay'],
      tags: post.tags,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section py-16 bg-navy-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-light mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Tüm Yazılar
            </Link>

            {/* Category */}
            <div className="inline-block px-4 py-2 bg-amber text-navy text-sm font-semibold rounded-full mb-6">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.publishDate).toLocaleDateString('tr-TR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-amber transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Paylaş</span>
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-navy rounded-full text-sm text-gray-400"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section py-0">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-amber max-w-none">
              <MarkdownRenderer content={post.content} />
            </article>

            {/* Content Image (if different from featured) */}
            {post.contentImage !== post.featuredImage && (
              <div className="relative h-96 rounded-xl overflow-hidden my-12">
                <Image
                  src={post.contentImage}
                  alt={`${post.title} - İçerik Görseli`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* CTA */}
            <div className="card bg-amber/10 border-amber/20 mt-12 text-center">
              <h3 className="text-2xl font-display font-bold mb-4">
                Benzer Çözümlere Mi İhtiyacınız Var?
              </h3>
              <p className="text-gray-400 mb-6">
                {post.category} konusunda profesyonel destek için benimle iletişime geçin.
              </p>
              <Link href="/iletisim" className="btn btn-primary">
                Ücretsiz Danışmanlık
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-navy-light">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8">
                İlgili <span className="text-gradient">Yazılar</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="card glow group overflow-hidden p-0"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold text-sm group-hover:text-amber transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
