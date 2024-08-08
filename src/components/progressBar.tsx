// ProgressBar.tsx
import React, { useEffect, useState } from 'react';
import styles from './progressBar.module.css'; // Ensure you have this CSS module

interface ProgressBarProps {
  isActive: boolean;
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isActive, duration }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      let startTime = Date.now();
      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        setProgress(Math.min((elapsedTime / duration) * 100, 100));
      }, 100);

      return () => {
        if (interval) clearInterval(interval);
      };
    } else {
      setProgress(0);
    }
  }, [isActive, duration]);

  return (
    <div className={styles.progressWrapper}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
