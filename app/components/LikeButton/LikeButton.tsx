'use client';

import { useState } from 'react';
import styles from './LikeButton.module.scss';

type Props = {
    liked?: boolean;
};

const LikeButton = ({ liked = false }: Props) => {
    const [isLiked, setIsLiked] = useState(liked);

    return (
        <button
            className={styles.button}
            draggable={false}
            onClick={() => setIsLiked(!isLiked)}
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
