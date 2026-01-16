export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What types of events do you cover?',
    answer: 'I specialize in weddings, real estate content, product shoots, and corporate events. Whether it\'s an intimate gathering or a large-scale production, I bring the same level of professionalism and creativity to every project.'
  },
  {
    id: 2,
    question: 'How far in advance should I book?',
    answer: 'I recommend booking at least 2-3 months in advance, especially for weddings and major events. However, I understand that sometimes things come up quickly, so feel free to reach out and I\'ll do my best to accommodate your timeline.'
  },
  {
    id: 3,
    question: 'What equipment do you use?',
    answer: 'I use professional-grade cameras, drones for aerial footage, stabilizers for smooth motion shots, and professional lighting equipment. All footage is edited using industry-standard software to ensure the highest quality final product.'
  },
  {
    id: 4,
    question: 'How long does it take to receive the final video?',
    answer: 'Typical turnaround time is 3-4 weeks for weddings and 2-3 weeks for other events. Rush delivery options are available for an additional fee. You\'ll receive highlights within a week for social media sharing.'
  },
  {
    id: 5,
    question: 'Do you travel for events?',
    answer: 'Absolutely! I\'m based in Nigeria but available for travel both locally and internationally. Travel fees may apply depending on the location, which we can discuss during our consultation.'
  },
  {
    id: 6,
    question: 'What\'s included in your packages?',
    answer: 'Each package is customized to your needs, but typically includes pre-event consultation, full-day coverage, professional editing, color grading, music licensing, and delivery of high-resolution files. Contact me for detailed package information.'
  }
];
