import { defineConfig, s } from 'velite'

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.
/** @type {import('velite').UserConfig} */
export default defineConfig({
  root: 'content',
  collections: {
    posts: {
      name: 'Post', // collection type name
      // pattern: './content/posts/**/*.md', // content files glob pattern
      pattern: 'posts/**/*.md',
      schema: s
        .object({
          title: s.string().max(99), // Zod primitive type
          slug: s.slug('posts'), // validate format, unique in posts collection
          date: s.isodate(), // input Date-like string, output ISO Date string.
          description: s.string(),
          metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
          excerpt: s.excerpt(), // excerpt of markdown content
          content: s.markdown(), // transform markdown to html
        })
        // more additional fields (computed fields)
        .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
    },
  },
})
