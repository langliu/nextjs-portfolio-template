'use client'
import removeTrailingSlash from '$/utils/removeTrailingSlash'
import presentation from '$/data/presentation'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  console.log('pathname', pathname)
  const clearPathName = removeTrailingSlash(pathname)

  return (
    <header className='z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between'>
      <a href={`mailto:${presentation.mail}`} className='hover:text-neutral-100'>
        {presentation.mail}
      </a>

      <nav role='navigation'>
        <ul role='list' className='flex flex-row gap-2'>
          <li>
            <a
              href='/'
              className={`hover:text-neutral-100 ${clearPathName === '/' ? 'text-neutral-100' : ''}`}
            >
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href='/posts'
              className={`hover:text-neutral-100 ${clearPathName === '/posts' ? 'text-neutral-100' : ''}`}
            >
              Posts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
