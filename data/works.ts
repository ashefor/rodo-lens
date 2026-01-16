export interface Work {
  id: number;
  title: string;
  client: string;
  date: string;
  time: string;
  eventType: string;
  thumbnail: string;
  mediaType: 'video' | 'image';
  mediaUrl: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: 'Wedding Ceremony',
    client: 'Mr & Mrs Johnson',
    date: '2025-12-15',
    time: '2:00 PM',
    eventType: 'Wedding',
    thumbnail: '/images/wedding1.jpg',
    mediaType: 'video',
    mediaUrl: '/videos/wedding1.mp4'
  },
  {
    id: 2,
    title: 'Luxury Apartment Tour',
    client: 'Real Estate Corp',
    date: '2025-11-20',
    time: '10:00 AM',
    eventType: 'Real Estate',
    thumbnail: '/images/realestate1.jpg',
    mediaType: 'video',
    mediaUrl: '/videos/realestate1.mp4'
  },
  {
    id: 3,
    title: 'Product Launch',
    client: 'Tech Innovations',
    date: '2025-10-05',
    time: '3:00 PM',
    eventType: 'Product Shoot',
    thumbnail: '/images/product1.jpg',
    mediaType: 'image',
    mediaUrl: '/images/product1-full.jpg'
  },
  {
    id: 4,
    title: 'Corporate Conference',
    client: 'Business Solutions Inc',
    date: '2025-09-18',
    time: '9:00 AM',
    eventType: 'Corporate Event',
    thumbnail: '/images/corporate1.jpg',
    mediaType: 'video',
    mediaUrl: '/videos/corporate1.mp4'
  },
  {
    id: 5,
    title: 'Engagement Shoot',
    client: 'David & Sarah',
    date: '2025-08-22',
    time: '5:00 PM',
    eventType: 'Wedding',
    thumbnail: '/images/wedding2.jpg',
    mediaType: 'image',
    mediaUrl: '/images/wedding2-full.jpg'
  },
  {
    id: 6,
    title: 'Villa Showcase',
    client: 'Luxury Homes',
    date: '2025-07-30',
    time: '11:00 AM',
    eventType: 'Real Estate',
    thumbnail: '/images/realestate2.jpg',
    mediaType: 'video',
    mediaUrl: '/videos/realestate2.mp4'
  },
  {
    id: 7,
    title: 'Fashion Collection',
    client: 'Style Maven',
    date: '2025-06-14',
    time: '1:00 PM',
    eventType: 'Product Shoot',
    thumbnail: '/images/product2.jpg',
    mediaType: 'video',
    mediaUrl: '/videos/product2.mp4'
  },
  {
    id: 8,
    title: 'Annual Gala',
    client: 'Foundation XYZ',
    date: '2025-05-08',
    time: '7:00 PM',
    eventType: 'Corporate Event',
    thumbnail: '/images/corporate2.jpg',
    mediaType: 'image',
    mediaUrl: '/images/corporate2-full.jpg'
  },
  {
    id: 9,
    title: 'Traditional Wedding',
    client: 'The Okonkwo Family',
    date: '2025-04-12',
    time: '12:00 PM',
    eventType: 'Wedding',
    thumbnail: '/images/wedding3.jpg',
    mediaType: 'video',
    mediaUrl: '/videos/wedding3.mp4'
  },
  {
    id: 10,
    title: 'Commercial Property',
    client: 'Prime Locations',
    date: '2025-03-25',
    time: '9:30 AM',
    eventType: 'Real Estate',
    thumbnail: '/images/realestate3.jpg',
    mediaType: 'video',
    mediaUrl: '/videos/realestate3.mp4'
  },
  {
    id: 11,
    title: 'Jewelry Campaign',
    client: 'Diamond Dreams',
    date: '2025-02-17',
    time: '2:30 PM',
    eventType: 'Product Shoot',
    thumbnail: '/images/product3.jpg',
    mediaType: 'image',
    mediaUrl: '/images/product3-full.jpg'
  },
  {
    id: 12,
    title: 'Team Building Event',
    client: 'Global Enterprises',
    date: '2025-01-09',
    time: '10:00 AM',
    eventType: 'Corporate Event',
    thumbnail: '/images/corporate3.jpg',
    mediaType: 'video',
    mediaUrl: '/videos/corporate3.mp4'
  }
];
