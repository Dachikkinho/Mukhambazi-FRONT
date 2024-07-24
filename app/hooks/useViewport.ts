import { useState, useEffect } from 'react';

type viewportSizes = 768 | 979 | 1280;

export default function useViewport(size: viewportSizes) {
    const [isViewportMatch, setisViewportMatch] = useState(false);

    useEffect(() => {
        setisViewportMatch(window.innerWidth <= size);
        const handleResize = () => {
            setisViewportMatch(window.innerWidth <= size);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isViewportMatch;
}
