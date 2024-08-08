import React, { useEffect, useState } from 'react';
import styles from './progressBar.module.css';

interface ProgressBarProps {
  isActive: boolean;
  isCompleted: boolean;
  duration: number;
  reset: boolean; // Added prop for resetting progress
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isActive, isCompleted, duration, reset }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !reset) {
      let startTime = Date.now();
      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        setProgress(Math.min((elapsedTime / duration) * 100, 100));
      }, 100);

      return () => {
        if (interval) clearInterval(interval);
      };
    } else {
      // Reset progress when required
      setProgress(isCompleted ? 100 : 0);
    }
  }, [isActive, duration, isCompleted, reset]);

  return (
    <div className={styles.progressWrapper}>
      <div
        className={styles.progressBar}
        style={{
          width: `${progress}%`,
          backgroundColor: isCompleted ? '#d3d3d3' : '#94969c',
        }}
      />
    </div>
  );
};

export default ProgressBar;
