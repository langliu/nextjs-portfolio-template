import Image from 'next/image'
import projects from '$/data/projects'
import presentation from '$/data/presentation'
import CustomLink from '$/components/shared/Link'
import ProjectCard from '$/components/ProjectCard'
import PostCard from '$/components/PostCard'
import SocialLinks from '$/components/SocialLinks'
import convertAsteriskToStrongTag from '$/utils/convertAsteriskToStrongTag'

export default function Home() {
  const posts = []
  return (
    <main className='flex flex-col gap-20'>
      <article className='flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12'>
        {presentation.profile && (
          <Image
            src={presentation.profile}
            className='w-1/4 self-center rounded-full'
            alt='Your Profile'
            width='200'
            height='200'
          />
        )}

        <div className='flex flex-col gap-8'>
          <h1 className='text-3xl text-neutral-100'>{presentation.title}</h1>
          <h2
            className='w-auto max-w-[60ch] leading-6'
            dangerouslySetInnerHTML={{
              __html: convertAsteriskToStrongTag(presentation.description),
            }}
          />
          <SocialLinks />
        </div>
      </article>

      <article className='flex flex-col gap-8'>
        <header className='flex w-full flex-row justify-between gap-2'>
          <h3 className='text-lg text-neutral-100'>Latest posts</h3>
          <CustomLink href='/posts' label='See all posts' isUnderline target='_self' />
        </header>
        {posts.length === 0 && <p>Soon, stay connected 👀...</p>}

        <section className='flex flex-col gap-4 md:flex-row md:flex-wrap'>
          {posts.length !== 0 &&
            posts
              .slice(0, 2)
              .map((post) => (
                <PostCard
                  publishedAt={post.data.publishedAt}
                  title={post.data.title}
                  description={post.data.description}
                  slug={post.slug}
                />
              ))}
        </section>
      </article>

      <article className='flex flex-col gap-8'>
        <header className='flex w-full flex-row justify-between gap-2'>
          <h3 className='text-lg text-neutral-100'>Selected projects ({projects.length})</h3>
        </header>
        {projects.length === 0 && <p>Oops, I must work^^^^^</p>}

        <section className='flex flex-col gap-4'>
          {projects.length !== 0 && projects.map((project) => <ProjectCard {...project} />)}
        </section>
      </article>

      <article className='flex flex-col gap-8'>
        <header className='flex w-full flex-row justify-between gap-2'>
          <h3 className='text-lg text-neutral-100'>Get in touch</h3>
        </header>
        <p>
          Email me at <CustomLink href={`mailto:${presentation.mail}`} label={presentation.mail} />{' '}
          or follow me via my social links.
        </p>

        <SocialLinks />
      </article>
    </main>
  )
}
