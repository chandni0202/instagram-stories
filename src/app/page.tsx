'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

interface User {
  id: number;
  name: string;
  image: string;
  description: string;
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (id: number) => {
    router.push(`/stories/${id}`);
  };

  return (
    <>
      {/* <div>Instagram</div> */}
      <div className={styles.container}>
        {users.map((user) => (
          <div key={user.id} className={styles.userCard} onClick={() => handleUserClick(user.id)}>
            <div className={styles.storyCircle}>
              <img src={user.image} alt={user.name} />
            </div>
            <div className={styles.userDescription}>
              {user.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
