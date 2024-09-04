'use client';

import Favorites from '@/app/components/Favorites/Favorites';
import styles from './page.module.scss';
import { useEffect } from 'react';
import PrivateRoute from '@/app/components/PrivateRoute/PrivateRoute';

const FavoriteSongs = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Favorites';
    }, []);

    return (
        <PrivateRoute>
            <main className={styles.main}>
                <Favorites />
            </main>
        </PrivateRoute>
    );
};

export default FavoriteSongs;
