import { useEffect } from 'react';

interface CustomScreenOrientation extends ScreenOrientation {
    lock(orientation: 'landscape' | 'portrait'): Promise<void>;
    unlock(): void;
}

const useLockOrientation = () => {
    const lockOrientation = () => {
        if ('screen' in window && 'orientation' in screen) {
            (screen.orientation as CustomScreenOrientation)
                .lock('portrait')
                .catch((err: Error) => {
                    console.error('Failed to lock orientation:', err.message);
                });
        } else {
            console.warn(
                'Screen Orientation API is not supported on this device',
            );
        }
    };

    useEffect(() => {
        window.addEventListener('click', lockOrientation);

        return () => {
            window.removeEventListener('click', lockOrientation);
            if ('screen' in window && 'orientation' in screen) {
                (screen.orientation as CustomScreenOrientation).unlock();
            }
        };
    }, []);
};

export default useLockOrientation;
