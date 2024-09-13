'use client';

import LikeButton from '../../LikeButton/LikeButton';
import styles from './FavoriteBanner.module.scss';

type Props = {
    title: string;
    banner: string;
    musicSrc?: string;
    id: number;
    play: () => void;
};

const FavoriteBanner = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <img
                    className={styles.banner}
                    src={props.banner}
                    draggable={false}
                    onClick={props.play}
                />
                <div className={styles.title}>
                    <h4>{props.title}</h4>
                    <LikeButton songId={props.id} liked />
                </div>
            </div>
        </div>
    );
};

export default FavoriteBanner;
