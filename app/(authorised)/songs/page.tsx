'use client';

import SongsMainSection from '@/app/components/SongsMainSection/SongsMainSection';
import styles from './page.module.scss';
import { useEffect } from 'react';
import PrivateRoute from '@/app/components/PrivateRoute/PrivateRoute';

const Songs = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Songs';
    }, []);

    return (
        <PrivateRoute>
            <main className={styles.main}>
                <SongsMainSection />
            </main>
        </PrivateRoute>
    );
};

export default Songs;
