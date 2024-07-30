'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import { FilterType } from '@/app/enums/filterType';

const ContentFeed: React.FC = () => {
    useEffect(() => {
        document.title = 'Chakrulos - Web Player: Music for everyone';
    }, []);

    const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

    const toggleFilter = (filter: FilterType) => {
        setActiveFilter(activeFilter === filter ? null : filter);
    };

    const contentMapping: { [key in FilterType]?: JSX.Element } = {
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
                Did you know that Pink Floyd, the British rock band at the
                forefront of 1960s psychedelia, popularized the concept album
                for mass rock audiences in the 1970s? Now you can see Pink Floyd
                albums in our web player. You can check on the
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
                want and add exotic and pleasant songs. You can do all this on
                the
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
                You will find more than 60,000 songs in our player. Hopefully,
                one of these songs will suit your taste and give you maximum
                pleasure in our beautiful web player. Please enjoy.
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
                Very soon you will be able to watch podcasts and entertainment
                shows on our site. Please stay tuned. Kind regards,
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

    return (
        <div className={styles.contentFeed}>
            <h2>
                What’s New on{' '}
                <span className={styles.chakrulos}>CHAKRULOS?!</span>
            </h2>
            <p>
                The latest releases from Artists, Songs, Playlists, Albums, and
                shows you have to follow.
            </p>
            <div className={styles.filterButtons}>
                {activeFilter && (
                    <button
                        className={styles.clearButton}
                        onClick={() => setActiveFilter(null)}
                    >
                        &times;
                    </button>
                )}
                {!activeFilter || activeFilter === FilterType.Artists ? (
                    <button
                        className={
                            activeFilter === FilterType.Artists
                                ? styles.active
                                : ''
                        }
                        onClick={() => toggleFilter(FilterType.Artists)}
                    >
                        Artists
                    </button>
                ) : null}
                {!activeFilter || activeFilter === FilterType.Albums ? (
                    <button
                        className={
                            activeFilter === FilterType.Albums
                                ? styles.active
                                : ''
                        }
                        onClick={() => toggleFilter(FilterType.Albums)}
                    >
                        Albums
                    </button>
                ) : null}
                {!activeFilter || activeFilter === FilterType.Playlists ? (
                    <button
                        className={
                            activeFilter === FilterType.Playlists
                                ? styles.active
                                : ''
                        }
                        onClick={() => toggleFilter(FilterType.Playlists)}
                    >
                        Playlists
                    </button>
                ) : null}
                {!activeFilter || activeFilter === FilterType.Songs ? (
                    <button
                        className={
                            activeFilter === FilterType.Songs
                                ? styles.active
                                : ''
                        }
                        onClick={() => toggleFilter(FilterType.Songs)}
                    >
                        Songs
                    </button>
                ) : null}
                {!activeFilter || activeFilter === FilterType.Podcasts ? (
                    <button
                        className={
                            activeFilter === FilterType.Podcasts
                                ? styles.active
                                : ''
                        }
                        onClick={() => toggleFilter(FilterType.Podcasts)}
                    >
                        Podcasts & Shows
                    </button>
                ) : null}
            </div>
            <div className={styles.content}>
                {activeFilter ? (
                    contentMapping[activeFilter]
                ) : (
                    <>
                        <p>
                            We have good news! Chakrulos | UPDATE 0.0.1 | We
                            added new Georgian, European Artists, as well as
                            more exclusive Playlists and Albums. You need to
                            follow your favorite artists and songwriters. Stay
                            tuned with our best Georgian web songs player!
                        </p>
                        <img
                            src="images/spaceart.jpg"
                            alt="art"
                            className={styles.responsiveImage}
                            draggable={false}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default ContentFeed;
