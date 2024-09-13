'use client';
import { useEffect, useState } from 'react';
import CreatePopUp from '../CreatePopUp/CreatePopUp';
import Search from '../Header/Search/Search';
import Listdisabled from './ListDisabled';
import styles from './Playlist.module.scss';
import { popUpOpenState } from '@/app/states';
import { useRecoilState } from 'recoil';
import { Playlist as PlaylistInterface } from '@/app/interfaces/playlist.interface';
import axios from 'axios';
import Link from 'next/link';

const Playlist = () => {
    const [create, setCreate] = useState(false);
    const [popUpOpen, setPopUpOpen] = useRecoilState(popUpOpenState);
    const [playlists, setPlaylists] = useState<PlaylistInterface[]>([]);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        const jwt = localStorage.getItem('user');
        axios
            .get('https://back.chakrulos.ge/users/me', {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                setUserId(res.data.id);
                console.log(res);

                setPlaylists([...res.data.playlists]);
            });
    }, [create, popUpOpen]);

    function closeFunction() {
        setCreate(!create);
        setPopUpOpen(!popUpOpen);
    }

    return (
        <>
            {create && (
                <CreatePopUp
                    closeMenuFunction={() => {
                        closeFunction();
                    }}
                    userId={userId}
                />
            )}
            <div className={styles.mainContainer}>
                <div className={styles.search}>
                    <Search
                        placeholder={'Enter keywords to search'}
                        icon={'search'}
                        width={24}
                        height={24}
                    />
                </div>
                <div className={styles.container}>
                    <button
                        onClick={() => {
                            closeFunction();
                        }}
                        className={styles.newPlaylist}
                    >
                        <img
                            src="/icons/add-icon.svg"
                            alt="icon"
                            draggable={false}
                        />
                        New Playlist
                    </button>
                </div>

                <div className={styles.playlist}>
                    {playlists.length ? (
                        playlists.map((playlist, i) => (
                            <Link
                                href={`playlist/${playlist.id}`}
                                className={styles.wrap}
                                key={i}
                            >
                                <Listdisabled
                                    title={playlist.title}
                                    date={playlist.description}
                                    icon="green"
                                    playbtn="play"
                                />
                            </Link>
                        ))
                    ) : (
                        <p className={styles.noPlaylist}>No Playlists Yet!</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Playlist;
