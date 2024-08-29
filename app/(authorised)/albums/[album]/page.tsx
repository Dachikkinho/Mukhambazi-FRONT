'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { isPlayingState } from '@/app/states';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import LoadingBar from 'react-top-loading-bar';
import { AlbumPage } from '@/app/interfaces/albunPage.interface';
import { Music } from '@/app/interfaces/music.interface';

const AlbumArtist = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Artist';
    }, []);

    const param = useParams();
    const id = param.album;
    const [album, setAlbum] = useState<AlbumPage>();
    const [songs, setSongs] = useState<Music[]>([]);
    const [progress, setProgress] = useState(0);
    const [, setIsPlaying] = useRecoilState(isPlayingState);

    useEffect(() => {
        axios
            .get(`https://mukhambazi-back.onrender.com/album/${id}`, {
                onDownloadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;

                    if (total) {
                        const percentage = Math.floor((loaded / total) * 100);
                        setProgress(percentage);
                    }
                },
            })
            .then((res) => {
                setAlbum(res.data);

                setSongs([...res.data.musics]);
            });
    }, []);

    function playMusic(src: string, name: string) {
        setIsPlaying({
            src: src,
            name: name,
        });
    }

    if (!album) {
        return <div>Album not found</div>;
    }

    return (
        <main className={styles.main}>
            <LoadingBar
                color="#c338b5"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                loaderSpeed={600}
            />
            <div className={styles.mainContainer}>
                <AlbumHeader album={album} />
                <div className={styles.wrapper}>
                    {songs.map((song, index) => (
                        <div
                            key={index}
                            className={styles.songs}
                            onClick={() => playMusic(song.url, song.name)}
                        >
                            <span></span>
                            <div className={styles.icon}>
                                <span>{song.name}</span>
                                <img
                                    className={styles.img}
                                    src="/images/play.png"
                                    alt="icon"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

const AlbumHeader = ({ album }: { album: AlbumPage }) => (
    <div className={styles.albums}>
        <img
            className={styles.photo}
            src={'/images/songCovers/banner.png'}
            alt="icon"
        />
        <div>{album.name}</div>
        {album.artistName}
    </div>
);

export default AlbumArtist;
