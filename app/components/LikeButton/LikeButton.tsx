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
                <img src="/icons/heart-full.svg" alt="heart full" />
            ) : (
                <img src="/icons/heart-empty.svg" alt="heart empty" />
            )}
        </button>
    );
};

export default LikeButton;
