import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  image: string;
  description: string;
}

const users: User[] = [
  {
    id: 1,
    name: ' Story1',
    image: '/profile1.png',
    description: 'Birthday'
  },
  {
    id: 2,
    name: 'Story2',
    image: '/profile2.png',
    description: 'Office'
  },
  {
    id: 3,
    name: 'Story3',
    image: '/profile3.png',
    description: 'Holi'
  },
  {
    id: 4,
    name: 'Story4',
    image: '/profile4.png',
    description: 'Goa'
  },
  {
    id: 5,
    name: 'Story5',
    image: '/profile5.png',
    description: 'Events'
  },
  {
    id: 6,
    name: 'Story6',
    image: '/profile.png',
    description: '😊😁'
  },
  {
    id: 7,
    name: 'Story7',
    image: '/profile.jpg',
    description: 'Walk'
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users);
}
