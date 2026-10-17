// Content for the "A closer look" tabs on the home page.
// Experience and education come from LinkedIn: fill in the empty lists below.

export interface Entry {
  title: string
  subtitle?: string
  period?: string
  note?: string
  url?: string
}

export interface Tab {
  id: string
  label: string
  empty: string
  entries: Entry[]
}

import { profile } from './profile'

export const background: Tab[] = [
  {
    id: 'experience',
    label: 'Experience',
    empty: 'Work history is coming soon.',
    entries: [
      {
        title: profile.role,
        subtitle: profile.work.name,
        url: profile.work.url,
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    empty: 'Tools are coming soon.',
    entries: [
      ...profile.stack.map((s) => ({
        title: s.name,
        subtitle: 'Daily tool',
        url: s.url,
      })),
      ...profile.languages.map((l) => ({
        title: l.name,
        subtitle: 'Language',
        url: l.url,
      })),
    ],
  },
  {
    id: 'certifications',
    label: 'Licenses & certifications',
    empty: 'Licenses and certifications are coming soon.',
    entries: [],
  },
  {
    id: 'education',
    label: 'Education',
    empty: 'Education is coming soon.',
    entries: [],
  },
]
