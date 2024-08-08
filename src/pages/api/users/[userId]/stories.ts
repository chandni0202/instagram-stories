import type { NextApiRequest, NextApiResponse } from 'next';

interface Story {
  id: number;
  title: string;
  image: any;
  description: string;
}

const storiesByUserId: Record<number, Story[]> = {
  1: [
    {
      id: 1,
      title: 'A Day in the Life',
      image: "/mountain.png",
      description: 'An inspiring story about a day in the life of a hardworking individual.',
    },
    {
      id: 2,
      title: 'The Great Adventure',
      image: '/nature.png',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
    {
      id: 3,
      title: 'The Great Adventure',
      image: '/mountain.png',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
    {
      id: 4,
      title: 'The Great Adventure',
      image: '/nature.png',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
  ],
  2: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/nature.png',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/nature.png',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ],
  3: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/nature.png',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/nature.png',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ],
  4: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/nature.png',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/nature.png',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ],
  5: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/nature.png',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/nature.png',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ],
  6: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/nature.png',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/nature.png',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ], 
  7: [
    {
      id: 1,
      title: 'A Day in the Life',
      image: "/mountain.png",
      description: 'An inspiring story about a day in the life of a hardworking individual.',
    },
    {
      id: 2,
      title: 'The Great Adventure',
      image: '/nature.png',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
    {
      id: 3,
      title: 'The Great Adventure',
      image: '/mountain.png',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
    {
      id: 4,
      title: 'The Great Adventure',
      image: '/nature.png',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
  ],
  // Add more users and their stories here
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Invalid userId' });
  }

  const stories = storiesByUserId[parseInt(userId)];

  if (stories) {
    return res.status(200).json(stories);
  } else {
    return res.status(404).json({ error: 'User not found or no stories available' });
  }
}
