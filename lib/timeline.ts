// Timeline data for the About section

export interface TimelineItem {
  id: string;
  years: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'physics',
    years: '2016 - 2018',
    title: 'Physics',
    description: 'Learned to model complex systems and think in first principles.',
    isActive: false,
  },
  {
    id: 'economics',
    years: '2018 - 2020',
    title: 'Economics',
    description: 'Understood incentives, markets, and how people actually make decisions.',
    isActive: false,
  },
  {
    id: 'datascience',
    years: '2020 - 2023',
    title: 'Data Science',
    description: 'Built models, found patterns, learned to let data tell the story. MS from UT Austin.',
    isActive: false,
  },
  {
    id: 'ai',
    years: '2023 - Now',
    title: 'AI Engineering',
    description: 'Shipping AI-powered products. The path led here.',
    isActive: true,
  },
];

