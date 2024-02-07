type Social = {
  label: string
  link: string
}

type Presentation = {
  mail: string
  title: string
  description: string
  socials: Social[]
  profile?: string
}

const presentation: Presentation = {
  mail: 'langliu1216@gmail.com',
  title: 'Hi, I’m Allen 👋',
  // profile: "/profile.webp",
  description:
    "Bonjour, i'm a *china frontend developer* with over *5 years* of web experience. I am currently working with *ReactJS and Typescript*. Outside of work I will go fishing in the wild and learning Svelte.",
  socials: [
    {
      label: 'X',
      link: 'https://twitter.com/langliu1216',
    },
    {
      label: 'Github',
      link: 'https://github.com/langliu',
    },
  ],
}

export default presentation
