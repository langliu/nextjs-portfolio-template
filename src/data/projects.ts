export type Project = {
  title: string
  techs: string[]
  link: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Svelte DevUI',
    techs: ['Svelte (SvelteKit)', 'TypeScript', 'Vite'],
    link: 'https://github.com/langliu/svelte-devui',
  },
  {
    title: 'Portfolio / Template',
    techs: ['ReactJS (NextJS)', 'TypeScript'],
    link: '/',
    isComingSoon: true,
  },
]

export default projects
