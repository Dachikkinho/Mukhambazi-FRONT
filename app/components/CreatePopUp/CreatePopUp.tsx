import { useEffect, useState } from 'react';
import styles from './CreatePopUp.module.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Done from '../Done/Done';
import { Playlist } from '@/app/interfaces/playlist.interface';

interface Props {
    closeMenuFunction: () => void;
}

const CreatePopUp = ({ closeMenuFunction }: Props) => {
    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Playlist>();
    const [success, setSuccess] = useState(false);

    function onSubmit(album: Playlist) {
        axios
            .post('https://mukhambazi-back.onrender.com/playlist', {
                description: album.description,
                title: album.title,
                userId: 1, // placeholder
            })
            .then(() => {
                reset();
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className={styles.overlay} onClick={closeMenuFunction}></div>

            {success ? (
                <div className={styles.doneContainer}>
                    <Done />
                    <p>Created Succesfully!</p>
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
                                        value: 255,
                                        message:
                                            "Name Can't Be Longer Than 255 Characters!",
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
                                    maxLength: {
                                        value: 500,
                                        message:
                                            "Description Can't Be Longer Than 500 Characters!",
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
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default CreatePopUp;
