// src/lib/seo.ts
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

type BuildMetaArgs = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildMetadata(args: BuildMetaArgs): Metadata {
  const base = new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE.url);

  const ogImage = args.ogImage || SITE.ogImage;

  return {
    metadataBase: base,
    title: args.title,
    description: args.description,
    alternates: { canonical: args.path },
    applicationName: SITE.name,
    openGraph: {
      type: "website",
      title: args.title,
      description: args.description,
      url: args.path,
      siteName: SITE.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: args.title,
      description: args.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

