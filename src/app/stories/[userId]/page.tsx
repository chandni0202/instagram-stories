'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useParams, useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './StoryViewer.module.css';
import ProgressBar from '../../../components/progressBar';

interface Story {
  id: number;
  title: string;
  image: string;
  description: string;
}

const StoriesPage: React.FC = () => {
  const params = useParams<{ userId?: string }>();
  const userId = params?.userId;
  const [stories, setStories] = useState<Story[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [users, setUsers] = useState<any[]>([]);
  const [currentDuration, setCurrentDuration] = useState<number>(5000);
  const router = useRouter();
  const swiperRef = useRef<any>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const fetchStories = useCallback(async () => {
    try {
      const response = await fetch(`/api/users/${userId}/stories`);
      const data = await response.json();
      setStories(data);

      const lastIndex = localStorage.getItem(`lastIndex_${userId}`);
      if (lastIndex) {
        setActiveIndex(parseInt(lastIndex, 10));
      }
    } catch (error) {
      console.error('Error fetching stories:', error);
    }
  }, [userId]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, []);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (stories.length > 0 && activeIndex === stories.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        const currentIndex = users.findIndex((user) => user.id === parseInt(userId || ''));
        const nextUser = users[currentIndex + 1];
        if (nextUser) {
          router.push(`/stories/${nextUser.id}`);
        } else {
          router.push('/');
        }
        setIsTransitioning(false);
      }, 500);
    }
  }, [activeIndex, stories.length, router, userId, users, isTransitioning]);

  const handleClick = (event: React.MouseEvent) => {
    const containerWidth = (event.currentTarget as HTMLElement).offsetWidth;
    const clickPosition = event.clientX - (event.currentTarget as HTMLElement).getBoundingClientRect().left;

    if (clickPosition < containerWidth / 2) {
      if (swiperRef.current.swiper.activeIndex === 0) {
        const currentUserIndex = users.findIndex((user) => user.id === parseInt(userId || ''));
        if (currentUserIndex > 0) {
          const prevUser = users[currentUserIndex - 1];
          localStorage.setItem(`lastIndex_${userId}`, activeIndex.toString());
          router.push(`/stories/${prevUser.id}`);
        }
      } else {
        swiperRef.current.swiper.slidePrev();
      }
    } else {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleClose = () => {
    // Stop any ongoing autoplay transitions
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
    // Navigate to the homepage
    router.push('/');
  };

  useEffect(() => {
    localStorage.setItem(`lastIndex_${userId}`, activeIndex.toString());
  }, [activeIndex, userId]);

  const currentUser = users?.find((user) => user.id === parseInt(userId || ''));
  const profileImageUrl = currentUser?.image;

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        {stories.map((_, index) => (
          <ProgressBar
            key={index}
            isActive={activeIndex === index}
            duration={currentDuration}
          />
        ))}
      </div>

      <div className={styles.mainStory} onClick={handleClick}>
        {stories.length > 0 && (
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            autoplay={{
              delay: currentDuration,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className={styles.mainSwiper}
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className={styles.storyContent}>
                <img src={profileImageUrl} className={styles.profileImg} width="50px" height="50px"></img>
                  <button className={styles.closeButton} onClick={handleClose}>×</button>
                  <img src={story.image} alt={story.title} className={styles.storyImage} />
                  {/* <div className={styles.storyDetails}>
                    <h2>{story.title}</h2>
                    <p>{story.description}</p>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default StoriesPage;
