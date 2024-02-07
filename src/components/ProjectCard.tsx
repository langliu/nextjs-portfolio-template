import type { Project } from '$/data/projects'

export type ProjectCardProps = Project & {
  title: string
  techs: string[]
  link: string
  isComingSoon?: boolean
}

export default function ProjectCard({ title, techs, link, isComingSoon }: ProjectCardProps) {
  const formatTechs = (values: string[]) => {
    return values.toString().replaceAll(',', ' • ')
  }

  if (isComingSoon) {
    return (
      <div className='t group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 md:flex-row md:items-center'>
        <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
          <p className='text-neutral-100'>{title}</p>
          <p>{formatTechs(techs)}</p>
        </div>

        <p className='w-fit rounded-md bg-neutral-900 px-4 py-1'>Soon</p>
      </div>
    )
  }

  return (
    <a
      className='group flex w-full cursor-pointer flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 md:flex-row md:items-center'
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <div className='flex flex-col gap-4 md:flex-row md:items-center'>
        <p className='text-neutral-100'>{title}</p>
        <p>{formatTechs(techs)}</p>
      </div>

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
        />
        <path
          d='M5.25 5.25H12.75V12.75'
          stroke='#999999'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </a>
  )
}
