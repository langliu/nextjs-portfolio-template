import { NextSeo } from 'next-seo'
import { SITE_URL } from '$/data/config'
import type { HeadTags } from '$/utils/types/HeadTags'

const DEFAULT_TITLE_PAGE = 'Astro - Portfolio template'
const DEFAULT_DESCRIPTION_PAGE = 'A minimal portfolio template built with Astro and Tailwindcss.'
const DEFAULT_URL_SITE = SITE_URL

export default function SEOTags({ title, description, noindex, og }: HeadTags) {
  const openGraph = {
    title: title || og?.title || DEFAULT_TITLE_PAGE,
    type: og?.type || 'website',
    image: og?.image || '/opengraph-image.jpg',
    alt: og?.alt || 'astro portfolio template image',
    url: DEFAULT_URL_SITE,
    description: og?.description || DEFAULT_DESCRIPTION_PAGE,
  }
  return (
    <head>
      <NextSeo
        title={title || DEFAULT_TITLE_PAGE}
        description={description || DEFAULT_DESCRIPTION_PAGE}
        noindex={noindex || false}
        openGraph={{
          title: openGraph.title,
          type: openGraph.type,
          description: openGraph.description,
          locale: 'zh_CN',
        }}
        twitter={{
          site: '@langliu1216',
          cardType: 'summary_large_image',
        }}
      />
    </head>
  )
}
