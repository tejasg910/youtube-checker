
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogs } from "@/lib/data";

// 👇 static imports
import ContentOptimization from "../posts/content-optimization-techniques-youtube.mdx";
import AudienceEngagement from "../posts/audience-engagement-retention-methods.mdx";
import SeoStrategies from "../posts/youtube-seo-strategies-discoverability.mdx";
import AnalyticsInterpretation from "../posts/youtube-analytics-interpretation-improvement.mdx";
import MonetizationApproaches from "../posts/youtube-monetization-approaches.mdx";
import ThumbnailTitle from "../posts/youtube-thumbnail-title-best-practices.mdx";
import AlgorithmUnderstanding from "../posts/youtube-algorithm-understanding-adaptation.mdx";
import CommunityBuilding from "../posts/youtube-community-building-techniques.mdx";
import CrossPlatform from "../posts/cross-platform-promotion-tactics.mdx";
import EquipmentProduction from "../posts/youtube-equipment-production-quality-tips.mdx";
import ContentPlanning from "../posts/advanced-content-planning-strategies.mdx";
import ShortsGrowth from "../posts/youtube-shorts-growth-tactics.mdx";
import LiveStreaming from "../posts/youtube-live-streaming-channel-growth.mdx";
import Collaboration from "../posts/collaboration-strategies-creators.mdx";
import NicheSelection from "../posts/niche-selection-market-research.mdx";
import VideoEditing from "../posts/video-editing-techniques-engagement.mdx";
import BrandBuilding from "../posts/brand-building-youtube.mdx";
import SubscriberConversion from "../posts/subscriber-conversion-strategies.mdx";
import AdvertisingPromotion from "../posts/youtube-advertising-promotion.mdx";
import ChannelSustainability from "../posts/long-term-channel-sustainability.mdx";

// Map slugs to MDX components
const mdxMap = {
  "content-optimization-techniques-youtube": ContentOptimization,
  "audience-engagement-retention-methods": AudienceEngagement,
  "youtube-seo-strategies-discoverability": SeoStrategies,
  "youtube-analytics-interpretation-improvement": AnalyticsInterpretation,
  "youtube-monetization-approaches": MonetizationApproaches,
  "youtube-thumbnail-title-best-practices": ThumbnailTitle,
  "youtube-algorithm-understanding-adaptation": AlgorithmUnderstanding,
  "youtube-community-building-techniques": CommunityBuilding,
  "cross-platform-promotion-tactics": CrossPlatform,
  "youtube-equipment-production-quality-tips": EquipmentProduction,
  "advanced-content-planning-strategies": ContentPlanning,
  "youtube-shorts-growth-tactics": ShortsGrowth,
  "youtube-live-streaming-channel-growth": LiveStreaming,
  "collaboration-strategies-creators": Collaboration,
  "niche-selection-market-research": NicheSelection,
  "video-editing-techniques-engagement": VideoEditing,
  "brand-building-youtube": BrandBuilding,
  "subscriber-conversion-strategies": SubscriberConversion,
  "youtube-advertising-promotion": AdvertisingPromotion,
  "long-term-channel-sustainability": ChannelSustainability,
};

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const MDXContent = mdxMap[slug];
  if (!MDXContent) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blogs
      </Link>
      
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-6">{blog.date} • {blog.readTime}</p>
        <MDXContent />
      </article>
    </main>
  );
}
