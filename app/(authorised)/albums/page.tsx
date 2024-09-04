'use client';

import Albums from '@/app/components/Albums/Albums';
import styles from './page.module.scss';
import { useEffect } from 'react';
import PrivateRoute from '@/app/components/ProtectedRoute/PrivateRoute';

const Albumspage = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Albums';
    }, []);

    return (
        <PrivateRoute>
            <main className={styles.main}>
                <Albums />
            </main>
        </PrivateRoute>
    );
};

export default Albumspage;
