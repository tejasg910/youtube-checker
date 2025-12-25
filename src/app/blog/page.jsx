// app/blog/page.tsx
import Link from "next/link";
import { blogs } from "@/lib/data";
export default function BlogListPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Latest Blogs</h1>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="p-5 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-blue-600 transition">
                {blog.title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm mt-1">
              {blog.date} • {blog.readTime}
            </p>
            <p className="mt-2 text-gray-700">{blog.description}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="inline-block mt-3 text-blue-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
