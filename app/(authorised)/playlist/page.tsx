'use client';

import Playlist from '@/app/components/Playlists/Playlist';
import styles from './page.module.scss';
import { useEffect } from 'react';

const Playlistpage = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Playlist ';
    }, []);

    return (
        <main className={styles.main}>
            <Playlist />
        </main>
    );
};

export default Playlistpage;
