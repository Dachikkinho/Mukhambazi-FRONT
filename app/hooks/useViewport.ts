import { useState, useEffect } from 'react';

type viewportSizes = 768 | 979 | 1280;

export default function useViewport(size: viewportSizes) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= size)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= size);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
  
};