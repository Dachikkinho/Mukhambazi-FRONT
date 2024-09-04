'use client';

import ArtistsPage from '@/app/components/Artists/Artists';
import styles from './page.module.scss';
import { useEffect } from 'react';
import PrivateRoute from '@/app/components/ProtectedRoute/PrivateRoute';

const Artists = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Artists ';
    }, []);

    return (
        <PrivateRoute>
            <main className={styles.main}>
                <ArtistsPage />
            </main>
        </PrivateRoute>
    );
};

export default Artists;
