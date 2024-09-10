import { useEffect, useState } from 'react';
import styles from './AddSongButton.module.scss';
import Listdisabled from '../Playlists/ListDisabled';
import { popUpOpenState } from '@/app/states';
import { useSetRecoilState } from 'recoil';
import { Playlist } from '@/app/interfaces/playlist.interface';
import axios from 'axios';
import Link from 'next/link';

type Props = {
    songId: number;
};

const AddSongButton = ({ songId }: Props) => {
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    function upload(id: number) {
        axios
            .patch(`https://back.chakrulos.ge/playlist/${id}`, {
                musicIds: [songId],
            })
            .then(() => {
                setOpen(false);
                setSuccess(true);
            });
    }

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 2000);

            return () => clearTimeout(timer);
        }

        const user = localStorage.getItem('user');

        axios
            .get('https://back.chakrulos.ge/users/me', {
                headers: {
                    Authorization: `Bearer ${user}`,
                },
            })
            .then((res) => {
                setPlaylists([...res.data.playlist]);
            });
    }, [success]);

    const setPopUpOpen = useSetRecoilState(popUpOpenState);

    const handleRename = (playlistId: number, newName: string) => {
        axios
            .patch(`https://back.chakrulos.ge/playlist/${playlistId}`, {
                title: newName,
            })
            .then(() => {
                console.log('Playlist renamed to:', newName);
            });
    };

    const handlePhotoChange = (playlistId: number, newPhoto: File) => {
        const formData = new FormData();
        formData.append('photo', newPhoto);

        axios
            .patch(
                `https://back.chakrulos.ge/playlist/${playlistId}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            )
            .then(() => {
                console.log('Photo updated for playlist ID:', playlistId);
            });
    };

    return (
        <>
            {success && (
                <div className={styles.success}>Added Successfully!</div>
            )}

            <button
                className={styles.button}
                onClick={() => {
                    setOpen(true);
                    setPopUpOpen(true);
                }}
            >
                <img src="/icons/add-song.svg" alt="" className={styles.icon} />
            </button>

            {open && (
                <>
                    <div
                        className={styles.overlay}
                        onClick={() => {
                            setOpen(false);
                            setPopUpOpen(false);
                        }}
                    ></div>
                    <div className={styles.popUp}>
                        <div className={styles.top}>
                            <h2>All Playlists</h2>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setPopUpOpen(false);
                                }}
                                className={styles.close}
                            >
                                <img
                                    src="/icons/close-icon.svg"
                                    alt=""
                                    className={styles.closeIcon}
                                />
                            </button>
                        </div>

                        <div>
                            <div className={styles.playlist}>
                                {playlists.length ? (
                                    playlists.map((playlist, i) => (
                                        <div
                                            onClick={() => upload(playlist.id)}
                                            key={i}
                                        >
                                            <Listdisabled
                                                title={playlist.title}
                                                date={playlist.description}
                                                icon="green"
                                                playbtn="play"
                                                className={styles.add}
                                                onRename={(newName) =>
                                                    handleRename(
                                                        playlist.id,
                                                        newName,
                                                    )
                                                }
                                                onPhotoChange={(newPhoto) =>
                                                    handlePhotoChange(
                                                        playlist.id,
                                                        newPhoto,
                                                    )
                                                }
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className={styles.noPlaylist}>
                                        <p>No Playlists!</p>
                                        <Link
                                            href="/playlist"
                                            className={styles.create}
                                        >
                                            Create One Now!
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default AddSongButton;
