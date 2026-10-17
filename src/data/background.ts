// Content for the "A closer look" tabs on the home page.
// Source: Resume_Danang_2026.pdf. Licenses & certifications is still empty.

import { profile } from './profile'

export interface Entry {
  title: string
  subtitle?: string
  period?: string
  note?: string
  points?: string[]
  url?: string
}

export interface Tab {
  id: string
  label: string
  layout: 'list' | 'grid'
  empty: string
  entries: Entry[]
}

const company = 'Sekolah.mu (PT Semesta Integrasi Digital)'

export const background: Tab[] = [
  {
    id: 'experience',
    label: 'Experience',
    layout: 'list',
    empty: 'Work history is coming soon.',
    entries: [
      {
        title: 'Senior Frontend Developer',
        subtitle: company,
        period: 'Jul 2023 – Present',
        url: profile.work.url,
        points: [
          'Lead technical discussions, architecture decisions and sprint planning for cross-functional squads.',
          'Drove team-wide adoption of TypeScript and migrated key modules to cut runtime errors.',
          'Enforce code quality through structured reviews. Own the payment squad and the shared design system repository.',
          'Write architecture design records, ER diagrams and UI behaviour specs. Use Claude Code and GitHub Copilot daily.',
        ],
      },
      {
        title: 'Frontend Developer & Payment Squad Lead',
        subtitle: company,
        period: 'Feb 2021 – Jun 2023',
        points: [
          'Ran the payment squad ceremonies with product managers: grooming, technical discussions, planning and reviews.',
          'Primary frontend contact for the payment domain, coordinating delivery and technical trade-offs.',
          'Mentored junior and mid-level engineers through code reviews and pair programming.',
        ],
      },
      {
        title: 'Junior Frontend Developer',
        subtitle: company,
        period: 'Feb 2020 – Jan 2021',
        points: [
          'Built responsive, mobile-first interfaces with Vue.js, Nuxt.js and Sass.',
          'Turned design mockups into pixel-accurate components and integrated them with REST APIs.',
          'Kept unit test coverage above 50% with Vitest.',
        ],
      },
      {
        title: 'Operating Support Staff, Foreign Exchange',
        subtitle: 'PT Bank Central Asia, Tbk. (BCA), Jember',
        period: 'Apr 2017 – May 2019',
        points: [
          'Handled remittance, MoneyGram, banknotes and export/import letters of credit.',
          'Exceeded sales targets by 120% in year one and 270% in year two.',
        ],
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    layout: 'grid',
    empty: 'Tools are coming soon.',
    entries: [
      {
        title: 'Languages',
        note: 'JavaScript (ES6+), TypeScript, HTML5, CSS3',
      },
      {
        title: 'Frameworks & libraries',
        note: 'Vue 2, Vue 3, Nuxt 3, Pinia, Vuex, Vue Router, Storybook',
      },
      {
        title: 'Styling',
        note: 'Sass/SCSS, Tailwind CSS, Bootstrap, CSS Modules',
      },
      { title: 'Testing', note: 'Vitest, unit and integration testing' },
      { title: 'Build tools', note: 'Vite, Webpack' },
      { title: 'API', note: 'REST, Axios' },
      {
        title: 'Everyday tools',
        note: 'Git, GitLab, Jira, VS Code, GitHub Copilot, Claude Code, Whimsical, Miro',
      },
      {
        title: 'Ways of working',
        note: 'Agile Scrum, code review, technical documentation',
      },
    ],
  },
  {
    id: 'certifications',
    label: 'Licenses & certifications',
    layout: 'list',
    empty: 'Licenses and certifications are coming soon.',
    entries: [],
  },
  {
    id: 'education',
    label: 'Education',
    layout: 'list',
    empty: 'Education is coming soon.',
    entries: [
      {
        title: 'Fullstack JavaScript Immersive Program',
        subtitle: 'Hacktiv8 Bootcamp',
        period: 'Aug 2019 – Jan 2020',
        note: 'Grade: 87 / 100',
      },
      {
        title: 'Bachelor of Accounting (S1)',
        subtitle: 'Trisakti University',
        period: 'Feb 2018 – Sep 2018',
        note: 'GPA: 3.83 / 4.00',
      },
      {
        title: 'Accounting Scholarship Program (PPA BCA)',
        subtitle: 'PT Bank Central Asia (BCA)',
        period: 'Aug 2014 – Mar 2017',
        note: 'GPA: 3.85 / 4.00',
      },
    ],
  },
]
