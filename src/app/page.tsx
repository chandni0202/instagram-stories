'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './page.module.css';

interface User {
  id: number;
  name: string;
  image: string;
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
    <div className={styles.container}>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        centeredSlides={true}
        grabCursor={true}
        className={styles.swiper}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id} className={styles.slide} onClick={() => handleUserClick(user.id)}>
            <img src={user.image} alt={user.name} className={styles.thumbnail} />
            <div className={styles.overlay}>
              <h2>{user.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;
