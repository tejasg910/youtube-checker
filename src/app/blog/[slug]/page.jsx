
import { notFound } from "next/navigation";
import { blogs } from "@/lib/data";

// 👇 static imports
import FirstBlog from "../posts/how-to-grow-your-channel.mdx";
import MasteringNext from "../posts/mastering-nextjs-app-router.mdx";

// Map slugs to MDX components
const mdxMap = {
  "how-to-grow-your-channel": FirstBlog,
  "mastering-nextjs-app-router": MasteringNext,
};

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const MDXContent = mdxMap[slug];
  if (!MDXContent) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6 prose">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date} • {blog.readTime}</p>
      <MDXContent />
    </main>
  );
}
