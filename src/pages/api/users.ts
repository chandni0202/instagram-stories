import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  image: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Bob Smith',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Diana Prince',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Eve Adams',
    image: 'https://via.placeholder.com/150',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users);
}
