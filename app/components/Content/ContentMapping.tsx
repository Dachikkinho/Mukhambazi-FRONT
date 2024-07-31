import React from 'react';
import Link from 'next/link';
import { FilterType } from '@/app/enums/filterType';
import styles from './ContentMapping.module.scss';

const ContentMapping: { [key in FilterType]?: JSX.Element } = {
    [FilterType.Artists]: (
        <p>
            We added new Georgian Artists. This singer is unique, his voice
            covered the whole of Georgia. You must see it in the
            <span>
                {' '}
                <Link href="/artists">
                    <span className={styles.underline}>Artists</span>
                </Link>{' '}
                Page. You can check and enjoy.
            </span>
            <img
                src="images/artists.jpg"
                alt="art"
                className={styles.responsiveImage}
                draggable={false}
            />
        </p>
    ),
    [FilterType.Albums]: (
        <p>
            Did you know that Pink Floyd, the British rock band at the forefront
            of 1960s psychedelia, popularized the concept album for mass rock
            audiences in the 1970s? Now you can see Pink Floyd albums in our web
            player. You can check on the
            <span>
                {' '}
                <Link href="/albums">
                    <span className={styles.underline}>Albums</span>
                </Link>{' '}
                Page. Please enjoy.
            </span>
            <img
                src="images/pink.jpg"
                alt="art"
                className={styles.responsiveImage}
                draggable={false}
            />
        </p>
    ),
    [FilterType.Playlists]: (
        <p>
            Our Web Player allows you to create a playlist with the name you
            want and add exotic and pleasant songs. You can do all this on the
            <span>
                {' '}
                <Link href="/playlist">
                    <span className={styles.underline}>Playlist</span>
                </Link>{' '}
                Page. Please enjoy.
            </span>
            <img
                src="images/playlistspiderman.jpg"
                alt="art"
                className={styles.responsiveImage}
                draggable={false}
            />
        </p>
    ),
    [FilterType.Songs]: (
        <p>
            You will find more than 60,000 songs in our player. Hopefully, one
            of these songs will suit your taste and give you maximum pleasure in
            our beautiful web player. Please enjoy.
            <span>
                {' '}
                <Link href="/songs">
                    <span className={styles.underline}>Songs</span>
                </Link>
            </span>
            <img
                src="images/songs.jpg"
                alt="art"
                className={styles.responsiveImage}
                draggable={false}
            />
        </p>
    ),
    [FilterType.Podcasts]: (
        <p>
            Very soon you will be able to watch podcasts and entertainment shows
            on our site. Please stay tuned. Kind regards,
            <span>
                {' '}
                <Link href="/">
                    <span className={styles.underline}>CHAKRULOS</span>
                </Link>
            </span>
            <img
                src="images/podcasts.jpg"
                alt="art"
                className={styles.responsiveImage}
                draggable={false}
            />
        </p>
    ),
};

export default ContentMapping;
