import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-amber max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl md:text-3xl font-display font-bold mt-8 mb-4 text-white">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-display font-bold mt-6 mb-3 text-white">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="ml-4">
              {children}
            </li>
          ),
          a: ({ href, children }) => (
            <a 
              href={href}
              className="text-amber hover:text-amber-light underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-amber pl-4 italic text-gray-400 my-4">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-navy-light px-2 py-1 rounded text-amber text-sm">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
