import formatDate from '$/utils/formatDate'

export type PostCardProps = {
  title: string
  publishedAt: Date
  description: string
  slug: string
}

export default function PostCard({ title, publishedAt, description, slug }: PostCardProps) {
  return (
    <a
      className='group flex max-w-sm cursor-pointer flex-col gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 flex-1'
      href={`/posts/${slug}`}
      key={slug}
    >
      <div className='flex w-full flex-col justify-between gap-2 md:flex-row md:items-center'>
        <p className='text-neutral-100'>{title}</p>
        <div className='flex flex-row items-center gap-4'>
          <p>{formatDate(publishedAt)}</p>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            className='transition-all duration-300 group-hover:translate-x-1'
          >
            <path
              d='M5.25 12.75L12.75 5.25'
              stroke='#999999'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M5.25 5.25H12.75V12.75'
              stroke='#999999'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </div>
      </div>

      <p className='truncate'>{description}</p>
    </a>
  )
}
