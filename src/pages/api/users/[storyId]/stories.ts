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
      image: "/cat.jpeg",
      description: 'An inspiring story about a day in the life of a hardworking individual.',
    },
    {
      id: 2,
      title: 'The Great Adventure',
      image: '/bird.jpeg',
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
      image: '/market.jpg',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/christmas.png',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ],
  3: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/food.jpg',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/market.jpg',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ],
  4: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/bird.jpeg',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/store.png',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ],
  5: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/cat.jpeg',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/women.png',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ],
  6: [
    {
      id: 1,
      title: 'Mystery of the Lost City',
      image: '/cat.jpeg',
      description: 'A thrilling mystery about a city lost in time and the secrets it holds.',
    },
    {
      id: 2,
      title: 'The Hidden Treasure',
      image: '/food.jpg',
      description: 'An exciting adventure to find hidden treasures.',
    },
  ], 
  7: [
    {
      id: 1,
      title: 'A Day in the Life',
      image: "/store.png",
      description: 'An inspiring story about a day in the life of a hardworking individual.',
    },
    {
      id: 2,
      title: 'The Great Adventure',
      image: '/women.png',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
    {
      id: 3,
      title: 'The Great Adventure',
      image: '/market.jpg',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
    {
      id: 4,
      title: 'The Great Adventure',
      image: '/nature.png',
      description: 'An epic tale of adventure and discovery in a fantastical world.',
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { storyId } = req.query;

  if (!storyId || typeof storyId !== 'string') {
    return res.status(400).json({ error: 'Invalid storyId' });
  }

  const stories = storiesByUserId[parseInt(storyId)];

  if (stories) {
    return res.status(200).json(stories);
  } else {
    return res.status(404).json({ error: 'User not found or no stories available' });
  }
}
