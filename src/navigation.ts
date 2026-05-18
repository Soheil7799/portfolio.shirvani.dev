import { getAsset } from './utils/permalinks';

// Evaluated at build time — reflects whenever `npm run build` was last run.
const lastUpdated = new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' });

export const headerData = {
  links: [
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Education', href: '#education' },
    { text: 'Skills', href: '#skills' },
    { text: 'Projects', href: '#projects' },
    { text: 'GitHub', href: 'https://github.com/Soheil7799' },
  ],
  actions: [
    { text: 'Get in touch', href: '#contact' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navigate',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Experience', href: '#experience' },
        { text: 'Education', href: '#education' },
        { text: 'Skills', href: '#skills' },
        { text: 'Projects', href: '#projects' },
        { text: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { text: 'GitHub', href: 'https://github.com/Soheil7799' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/mostafa-shirvani/' },
        { text: 'Email', href: 'mailto:MostafaShirvani1999@gmail.com' },
        { text: 'Download CV', href: '/Mostafa-Shirvani_CV.pdf' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/Soheil7799' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mostafa-shirvani/' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:MostafaShirvani1999@gmail.com' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © Mostafa Shirvani · Last updated ${lastUpdated} · Built with <a class="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline" href="https://astro.build">Astro</a> + <a class="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline" href="https://github.com/onwidget/astrowind">AstroWind</a>.
  `,
};
