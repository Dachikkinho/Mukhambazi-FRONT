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

    // place holder upload function

    function upload(id: number) {
        const jwt = localStorage.getItem('user');
        axios
            .patch(
                `https://back.chakrulos.ge/playlist/${id}`,
                {
                    musicIds: [songId],
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                },
            )
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

    return (
        <>
            {success && (
                <div className={styles.success}>Added Succesfully!</div>
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
                            <h2 className={styles.allPlaylist}>
                                All Playlists
                            </h2>
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
                                <div
                                // onClick={() => {
                                //     upload(0);
                                // }}
                                >
                                    {playlists.length ? (
                                        playlists.map((playlist, i) => (
                                            <div
                                                onClick={() =>
                                                    upload(playlist.id)
                                                }
                                                key={i}
                                            >
                                                <Listdisabled
                                                    title={playlist.title}
                                                    date={playlist.description}
                                                    icon="green"
                                                    playbtn="play"
                                                    className={styles.add}
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
                    </div>
                </>
            )}
        </>
    );
};

export default AddSongButton;
