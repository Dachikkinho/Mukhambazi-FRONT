'use client';
import { useEffect, useState } from 'react';
import CreatePopUp from '../CreatePopUp/CreatePopUp';
import Search from '../Header/Search/Search';
import Listactivate from './ListActivate';
import Listdisabled from './ListDisabled';
import styles from './Playlist.module.scss';
import { popUpOpenState } from '@/app/states';
import { useRecoilState } from 'recoil';
import { Playlist as PlaylistInterface } from '@/app/interfaces/playlist.interface';
import axios from 'axios';

const Playlist = () => {
    const [create, setCreate] = useState(false);
    const [popUpOpen, setPopUpOpen] = useRecoilState(popUpOpenState);
    const [playlists, setPlaylists] = useState<PlaylistInterface[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/playlist/user', { params: { id: 1 } })
            .then((res) => {
                setPlaylists(res.data);
            })
            .catch((err) => {
                console.log(err);
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
                        <img src="/icons/add-icon.svg" alt="icon" />
                        New Playlist
                    </button>
                </div>

                <div className={styles.playlist}>
                    {playlists.length ? (
                        playlists.map((playlist) => (
                            <Listdisabled
                                title={playlist.title}
                                date={playlist.description}
                                icon="green"
                                playbtn="play"
                            />
                        ))
                    ) : (
                        <p>no playlists yet!</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Playlist;
