export interface Testimonial {
  id: number;
  name: string;
  business: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    business: 'Johnson Wedding',
    message: 'Divine captured our special day perfectly! The video was emotional, beautifully edited, and exceeded all our expectations. We\'ve watched it countless times and it never gets old.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    business: 'Prime Real Estate',
    message: 'Working with Rodo Lens transformed how we showcase properties. The drone footage and smooth transitions make every listing stand out. Our sales have increased significantly!'
  },
  {
    id: 3,
    name: 'Amanda Williams',
    business: 'Style Maven Fashion',
    message: 'The product shoot for our new collection was exceptional. Divine has an incredible eye for detail and knows exactly how to make products look their absolute best.'
  },
  {
    id: 4,
    name: 'David Okonkwo',
    business: 'Okonkwo Traditional Wedding',
    message: 'From our traditional ceremony to the white wedding, every moment was captured with such care and professionalism. Divine truly understands Nigerian culture and celebrations.'
  },
  {
    id: 5,
    name: 'Jennifer Martinez',
    business: 'Corporate Solutions Inc',
    message: 'Our corporate event coverage was outstanding. Divine managed to capture both the formal presentations and candid moments perfectly. Highly professional and creative!'
  },
  {
    id: 6,
    name: 'Robert Taylor',
    business: 'Diamond Dreams Jewelry',
    message: 'The attention to detail in our jewelry campaign was remarkable. Every piece sparkled on camera, and the final content helped us achieve record online engagement.'
  }
];
