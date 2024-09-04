'use client';

import Playlist from '@/app/components/Playlists/Playlist';
import styles from './page.module.scss';
import { useEffect } from 'react';
import PrivateRoute from '@/app/components/ProtectedRoute/PrivateRoute';

const Playlistpage = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Playlist ';
    }, []);

    return (
        <PrivateRoute>
            <main className={styles.main}>
                <Playlist />
            </main>
        </PrivateRoute>
    );
};

export default Playlistpage;
