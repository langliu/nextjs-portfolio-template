import Link from './shared/Link'
import presentation from '$/data/presentation'

export default function SocialLinks() {
  return (
    <ul role='list' className='flex flex-row gap-2'>
      {presentation.socials.map((social, index) => (
        <>
          <li>
            <Link href={social.link} label={social.label} />
          </li>
          {presentation.socials.length - 1 !== index && <li>/</li>}
        </>
      ))}
    </ul>
  )
}
