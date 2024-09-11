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
import PlaylistSongCard from '../PlaylistSongCard/PlaylistSongCard';
import DeletePopUp from '@/app/components/DeletePopUp/DeletePopUp';
import CreatePopUp from '@/app/components/CreatePopUp/CreatePopUp';

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
    const [create, setCreate] = useState(false);
    const [userId, setUserId] = useState(0);
    const [deleteMusic, setDeleteMusic] = useState(false);
    const [musicId, setMusicId] = useState(0);

    async function fetch() {
        await axios
            .get(`https://mukhambazi-back.onrender.com/playlist/${id}`)
            .then((res) => {
                setPlaylist(res.data);
            });
    }

    useEffect(() => {
        fetch();
        const jwt = localStorage.getItem('user');
        axios
            .get('https://back.chakrulos.ge/users/me', {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                setUserId(res.data.user.id);
            });
    }, [id, create, deleteMusic]);

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
                    <div className={styles.topHeading}>
                        <h1>{playlist?.title}</h1>
                        <button
                            className={styles.edit}
                            onClick={() => setCreate(true)}
                        >
                            <img src="/icons/edit-icon.svg" alt="icon" />
                        </button>
                    </div>
                    <p>{playlist?.description}</p>
                    <p>{playlist.musics?.length || 0} Tracks</p>
                </div>
                <div className={styles.right}>
                    {playlist.musics?.length ? (
                        playlist.musics.map((song, i) => (
                            <div key={i} className={styles.musicWrap}>
                                <PlaylistSongCard
                                    name={song.name}
                                    onClick={() =>
                                        playMusic(
                                            playlist.musics,
                                            setNextSongArr,
                                            setIsPlaying,
                                            song,
                                            i,
                                        )
                                    }
                                />
                                <button
                                    className={styles.removeSong}
                                    onClick={() => {
                                        setDeleteMusic(true);
                                        setMusicId(song.id);
                                    }}
                                >
                                    <img src="/images/trash-solid.svg" alt="" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className={styles.right}>
                            <p className={styles.noSongs}>No Songs Yet!</p>
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
            <DeletePopUp
                open={deleteMusic}
                closeFunc={() => setDeleteMusic(false)}
                confirm={() => {
                    setDeleteMusic(false);
                }}
                deleteString={`https://mukhambazi-back.onrender.com/playlist/${id}/music/${musicId}`}
                name={'Music'}
                section={playlist.title}
            />
            {create && (
                <CreatePopUp
                    closeMenuFunction={() => setCreate(false)}
                    userId={userId}
                    playlistId={+id}
                />
            )}
        </>
    );
};

export default Playlist;
