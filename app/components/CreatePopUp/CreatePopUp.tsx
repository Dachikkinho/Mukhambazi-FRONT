import { useEffect, useState } from 'react';
import styles from './CreatePopUp.module.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Done from '../Done/Done';
import { Playlist } from '@/app/interfaces/playlist.interface';

interface Props {
    closeMenuFunction: () => void;
    userId: number;
    playlistId?: number;
}

const CreatePopUp = ({ closeMenuFunction, userId, playlistId }: Props) => {
    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Playlist>();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const jwt = localStorage.getItem('user');
        if (playlistId) {
            axios
                .get(`https://back.chakrulos.ge/playlist/${playlistId}`, {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                })
                .then((res) => {
                    reset(res.data);
                });
        }
    }, []);

    function onSubmit(album: Playlist) {
        const jwt = localStorage.getItem('user');
        if (playlistId) {
            axios
                .patch(
                    `https://back.chakrulos.ge/playlist/${playlistId}`,
                    album,
                    {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    },
                )
                .then(() => {
                    reset();
                    setSuccess(true);
                })
                .catch((err) => {
                    alert(err);
                });
        } else {
            axios
                .post(
                    'https://back.chakrulos.ge/playlist',
                    {
                        description: album.description,
                        title: album.title,
                        userId: userId,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    },
                )
                .then(() => {
                    reset();
                    setSuccess(true);
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    return (
        <>
            <div className={styles.overlay} onClick={closeMenuFunction}></div>

            {success ? (
                <div className={styles.doneContainer}>
                    <Done />
                    <p>{playlistId ? 'Updated' : 'Created'} Succesfully!</p>
                    <button onClick={closeMenuFunction}>Close</button>
                </div>
            ) : (
                <div className={styles.mainContainer}>
                    <h2 className={styles.heading}>New Playlist</h2>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.row}>
                            <input
                                id="name"
                                type="text"
                                className={styles.input}
                                placeholder="Playlist Name"
                                {...register('title', {
                                    required: {
                                        value: true,
                                        message: 'Name Is Required!',
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "Name Can't Be Longer Than 20 Characters!",
                                    },
                                })}
                            />
                            {errors.title?.message && (
                                <p className={styles.error}>
                                    {errors.title.message}
                                </p>
                            )}
                        </div>
                        <div className={styles.row}>
                            <input
                                id="description"
                                type="text"
                                className={styles.input}
                                placeholder="Playlist Description"
                                {...register('description', {
                                    required: {
                                        value: true,
                                        message: 'Description Is Required!',
                                    },
                                    maxLength: {
                                        value: 40,
                                        message:
                                            "Description Can't Be Longer Than 40 Characters!",
                                    },
                                })}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button
                                className={styles.cancel}
                                onClick={closeMenuFunction}
                            >
                                Cancel
                            </button>
                            <button className={styles.create} type="submit">
                                {playlistId ? 'Update' : 'Create'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default CreatePopUp;
