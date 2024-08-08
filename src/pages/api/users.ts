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
    name: 'Alice Johnson',
    image: '/profile1.png',
    description: 'Birthday'
  },
  {
    id: 2,
    name: 'Bob Smith',
    image: '/profile2.png',
    description: 'Office'
  },
  {
    id: 3,
    name: 'Charlie Brown',
    image: '/profile3.png',
    description: 'Holi'
  },
  {
    id: 4,
    name: 'Diana Prince',
    image: '/profile4.png',
    description: 'Goa'
  },
  {
    id: 5,
    name: 'Eve Adams',
    image: '/profile5.png',
    description: 'Events'
  },
  {
    id: 6,
    name: 'Eve Adams',
    image: '/profile.png',
    description: '😊😁'
  },
  {
    id: 7,
    name: 'Eve Adams',
    image: '/profile.jpg',
    description: 'Walk'
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users);
}
