'use client';

import styles from './page.module.scss';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { albums } from '@/public/script';
import { Album } from '@/app/interfaces/albunPage.interface';

const AlbumArtist = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Artist';
    }, []);

    const param = useParams();
    const id = param.album;
    const album = albums.find((album) => album.id === +id);

    if (!album) {
        return <div>Album not found</div>;
    }

    return (
        <main className={styles.main}>
            <div className={styles.mainContainer}>
                <AlbumHeader album={album} />
                <AlbumSongs songs={album.songs} />
            </div>
        </main>
    );
};

const AlbumHeader = ({ album }: { album: Album }) => (
    <div className={styles.albums}>
        <img className={styles.photo} src={album.image} alt="icon" />
        <div>
            {album.name} {album.lastName}
        </div>
        {album.nationality}
    </div>
);

const AlbumSongs = ({ songs }: { songs: string[] }) => (
    <div className={styles.wrapper}>
        {songs.map((song, index) => (
            <div key={index} className={styles.songs}>
                <span></span>
                <div className={styles.icon}>
                    <span>{song}</span>
                    <img
                        className={styles.img}
                        src="/images/play.png"
                        alt="icon"
                    />
                </div>
            </div>
        ))}
    </div>
);

export default AlbumArtist;
