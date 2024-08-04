'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useParams } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './StoryViewer.module.css';

interface Story {
  id: number;
  title: string;
  image: string;
  description: string;
}

const StoriesPage: React.FC = () => {
  const { userId } = useParams<{ userId: string | undefined }>();
  const [stories, setStories] = useState<Story[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/stories`);
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className={styles.container}>
      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        {stories.map((_, index) => (
          <div
            key={index}
            className={styles.progressDot}
            style={{
              backgroundColor: index === activeIndex ? '#0070f3' : '#ddd',
              width: `${100 / Math.min(stories.length, 5)}%`, // Adjust number of dots based on screen size
            }}
          />
        ))}
      </div>

      {/* Main Story Display */}
      <div className={styles.mainStory}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={0}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoplay={{
            delay: 5000, // Delay between slides (5000 ms = 5 seconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          className={styles.mainSwiper}
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className={styles.storyContent}>
                <img src={story.image} alt={story.title} className={styles.storyImage} />
                <div className={styles.storyDetails}>
                  <h2>{story.title}</h2>
                  <p>{story.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StoriesPage;
