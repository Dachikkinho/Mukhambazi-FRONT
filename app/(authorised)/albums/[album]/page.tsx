'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { isPlayingState, nextSongArrState } from '@/app/states';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import LoadingBar from 'react-top-loading-bar';

import { Music } from '@/app/interfaces/music.interface';
import { playMusic } from '@/app/utils/playMusic';
import { AlbumPage } from '@/app/interfaces/albumPage.interface';
import PrivateRoute from '@/app/components/PrivateRoute/PrivateRoute';

const AlbumArtist = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Artist';
    }, []);

    const param = useParams();
    const id = param.album;
    const [album, setAlbum] = useState<AlbumPage>();
    const [songs, setSongs] = useState<Music[]>([]);
    const [progress, setProgress] = useState(0);
    const setIsPlaying = useSetRecoilState(isPlayingState);
    const setNextSongArr = useSetRecoilState(nextSongArrState);

    useEffect(() => {
        const jwt = localStorage.getItem('user');
        axios
            .get(`https://back.chakrulos.ge/album/${id}`, {
                onDownloadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;

                    if (total) {
                        const percentage = Math.floor((loaded / total) * 100);
                        setProgress(percentage);
                    }
                },
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                setAlbum(res.data);
                console.log(res.data);

                setSongs([...res.data.musics]);
            });
    }, []);

    if (!album) {
        return;
    }

    return (
        <PrivateRoute>
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
                                onClick={() =>
                                    playMusic(
                                        songs,
                                        setNextSongArr,
                                        setIsPlaying,
                                        song,
                                        index,
                                    )
                                }
                            >
                                <span></span>
                                <div className={styles.icon}>
                                    <span>{song.name}</span>
                                    <img
                                        className={styles.img}
                                        src="/images/play.png"
                                        alt="icon"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </PrivateRoute>
    );
};

const AlbumHeader = ({ album }: { album: AlbumPage }) => (
    <div className={styles.albums}>
        <img
            className={styles.photo}
            src={album.image}
            alt="icon"
            draggable={false}
        />
        <div>{album.name}</div>
        {album.artistName}
    </div>
);

export default AlbumArtist;
