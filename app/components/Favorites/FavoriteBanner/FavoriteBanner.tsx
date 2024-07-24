'use client';
import { LikeButton } from '../../LikeButton/LikeButton';
import styles from './FavoriteBanner.module.scss';

type Props = {
    title: string;
    banner: string;
    musicSrc?: string;
};

export const FavoriteBanner = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <img className={styles.banner} src={props.banner} />
                <div className={styles.title}>
                    <h4>{props.title}</h4>
                    <LikeButton liked />
                </div>
            </div>
        </div>
    );
};
