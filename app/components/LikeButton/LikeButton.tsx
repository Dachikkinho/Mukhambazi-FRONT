'use client';

import { useEffect, useState } from 'react';
import styles from './LikeButton.module.scss';
import axios from 'axios';

type Props = {
    liked?: boolean;
    songId: number;
};

const LikeButton = ({ liked, songId }: Props) => {
    const [isLiked, setIsLiked] = useState(liked);
    const [userId, setUserId] = useState(0);
    const [likedId, setLikedId] = useState(0);
    const [deleted, setDeleted] = useState(false);

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
                const exists = res.data.favorites.find(
                    (music: { musicId: number }) => music.musicId === songId,
                );

                if (exists && !deleted) {
                    setIsLiked(true);
                    setLikedId(exists.id);
                }
            });
    }, [isLiked]);

    function addLike() {
        const jwt = localStorage.getItem('user');
        if (!isLiked) {
            axios.post(
                `https://back.chakrulos.ge/favorites`,
                {
                    userId: userId,
                    musicId: songId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                },
            );
        } else {
            setDeleted(true);
            axios.delete(`https://back.chakrulos.ge/favorites/${likedId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
        }
    }

    return (
        <button
            className={styles.button}
            draggable={false}
            onClick={() => {
                setIsLiked(!isLiked);
                addLike();
            }}
        >
            {isLiked ? (
                <img
                    src="/icons/heart-full.svg"
                    alt="heart full"
                    draggable={false}
                />
            ) : (
                <img
                    src="/icons/heart-empty.svg"
                    alt="heart empty"
                    draggable={false}
                />
            )}
        </button>
    );
};

export default LikeButton;
