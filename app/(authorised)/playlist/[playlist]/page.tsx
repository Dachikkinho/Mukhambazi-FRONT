'use client';

import { Playlist as PlaylistInterface } from '@/app/interfaces/playlist.interface';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { playMusic } from '@/app/utils/playMusic';
import { isPlayingState, nextSongArrState } from '@/app/states';
import { useSetRecoilState } from 'recoil';
import Link from 'next/link';
import PlaylistSongCard from '../PlaylistSongCard/PlaylistSongCard';
import DeletePopUp from '@/app/components/DeletePopUp/DeletePopUp';
import Router from 'next/router';

const Playlist = () => {
    const [playlist, setPlaylist] = useState<PlaylistInterface>({
        title: '',
        description: '',
        musicIds: [],
        musics: [],
        userId: 0,
        id: 0,
    });
    const params = useParams();
    const id = params.playlist;
    const setIsPlaying = useSetRecoilState(isPlayingState);
    const setNextSongArr = useSetRecoilState(nextSongArrState);
    const [deletePlaylist, setDeletePlaylist] = useState(false);

    async function fetch() {
        await axios
            .get(`https://mukhambazi-back.onrender.com/playlist/${id}`)
            .then((res) => {
                setPlaylist(res.data);
            })
            .finally(() => {});
    }

    useEffect(() => {
        fetch();
    }, [id]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <button
                        className={styles.trash}
                        onClick={() => setDeletePlaylist(true)}
                    >
                        <img src="/images/trash-solid.svg" alt="" />
                    </button>
                    <div>
                        <img
                            src={
                                playlist?.musics?.[0]?.image ||
                                '/images/placeholder.png'
                            }
                            alt="image"
                            className={styles.image}
                        />
                    </div>
                    <h1>{playlist?.title}</h1>
                    <p>{playlist?.description}</p>
                    <p>{playlist.musics?.length || 0} Tracks</p>
                </div>
                <div className={styles.right}>
                    {playlist.musics?.length ? (
                        playlist.musics.map((song, i) => (
                            <PlaylistSongCard
                                name={song.name}
                                key={i}
                                onClick={() =>
                                    playMusic(
                                        playlist.musics,
                                        setNextSongArr,
                                        setIsPlaying,
                                        song.url,
                                        song.name,
                                        i,
                                        song.image,
                                        `${song.author.firstName} ${song.author.lastName}`,
                                    )
                                }
                            />
                        ))
                    ) : (
                        <div className={styles.right}>
                            <p>No Songs Yet!</p>
                            <Link href="/songs" className={styles.add}>
                                Add Now!
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <DeletePopUp
                open={deletePlaylist}
                closeFunc={() => setDeletePlaylist(false)}
                confirm={() => {
                    setDeletePlaylist(false);
                }}
                deleteString={`https://mukhambazi-back.onrender.com/playlist/${id}`}
                name={playlist.title}
                section="playlists"
            />
        </>
    );
};

export default Playlist;
