import { useEffect, useState } from 'react';
import styles from './AddSongButton.module.scss';
import Listdisabled from '../Playlists/ListDisabled';
import axios from 'axios';
import { popUpOpenState } from '@/app/states';
import { useRecoilState } from 'recoil';
import { RemoveScroll } from '@/app/helper/removeScroll';

interface Props {
    songId: string;
}

const AddSongButton = ({ songId }: Props) => {
    const [open, setOpen] = useState(false);
    const [playlists, setPlaylists] = useState<Album[]>([]);
    const [success, setSuccess] = useState(false);

    // place holder upload function

    function upload(id: number) {
        axios.patch(`upload Link`, songId).then(() => {
            setOpen(false);
        });
    }

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [success]);

    const [, setPopUpOpen] = useRecoilState(popUpOpenState);

    RemoveScroll();

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
                                <div
                                    onClick={() => {
                                        upload(0);
                                    }}
                                >
                                    <Listdisabled
                                        title={'nme'}
                                        date={'desc'}
                                        icon="green"
                                        playbtn="play"
                                        className={styles.add}
                                    />
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
