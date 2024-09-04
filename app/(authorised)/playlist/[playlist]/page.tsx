'use client';

import { Playlist as PlaylistInterface } from '@/app/interfaces/playlist.interface';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { playMusic } from '@/app/utils/playMusic';
import { isPlayingState, nextSongArrState } from '@/app/states';
import { useSetRecoilState } from 'recoil';
import Link from 'next/link';

const Playlist = () => {
    const [playlist, setPlaylist] = useState<PlaylistInterface>();
    const params = useParams();
    const id = params.playlist;
    const setIsPlaying = useSetRecoilState(isPlayingState);
    const setNextSongArr = useSetRecoilState(nextSongArrState);

    useEffect(() => {
        axios.get(`https://mukhambazi-back.onrender.com/playlist/${id}`).then((res) => {
            setPlaylist(res.data);
            console.log(res.data);
        });
    }, []);

    const imageExists = playlist?.musics !== undefined;

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div>
                    <img
                        src={
                            !imageExists
                                ? playlist?.musics[0].image
                                : '/images/placeholder.png'
                        }
                        alt="image"
                        className={styles.image}
                    />
                </div>
                <h1>{playlist?.title}</h1>
                <p>{playlist?.description}</p>
                <p>{playlist?.musics.length} Tracks</p>
            </div>
            <div className={styles.right}>
                {playlist?.musics.length ? (
                    playlist.musics.map((song, i) => (
                        <div
                            key={i}
                            className={styles.songs}
                            onClick={() =>
                                playMusic(
                                    playlist.musics,
                                    setNextSongArr,
                                    setIsPlaying,
                                    song.url,
                                    song.name,
                                    i,
                                    song.image,
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
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.right}>
                        <p>No Songs Yet!</p>
                        <Link href="/songs" className={styles.add}>Add Now!</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Playlist;
