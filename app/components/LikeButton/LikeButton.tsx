import { useState } from 'react';
import styles from './LikeButton.module.scss';

type Props = {
    liked?: boolean;
};

export function LikeButton({ liked }: Props) {
    const [isLiked, setIsLiked] = useState(liked || false);

    return (
        <button
            className={styles.button}
            draggable={false}
            onClick={() => {
                setIsLiked(!isLiked);
            }}
        >
            {isLiked ? (
                <img src="/icons/heart-full.svg" alt="heart full" />
            ) : (
                <img src="/icons/heart-empty.svg" alt="heart empty" />
            )}
        </button>
    );
}
