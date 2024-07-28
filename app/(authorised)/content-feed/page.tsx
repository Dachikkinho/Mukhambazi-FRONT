'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const ContentFeed: React.FC = () => {
    useEffect(() => {
        document.title = 'Chakrulos - Web Player: Music for everyone';
    }, []);

    const [activeFilter, setActiveFilter] = useState<
        'Artists' | 'Albums' | 'Playlists' | 'Songs' | 'Podcasts' | null
    >(null);

    const toggleFilter = (
        filter: 'Artists' | 'Albums' | 'Playlists' | 'Songs' | 'Podcasts',
    ) => {
        if (activeFilter === filter) {
            setActiveFilter(null);
        } else {
            setActiveFilter(filter);
        }
    };

    const renderContent = () => {
        switch (activeFilter) {
            case 'Artists':
                return (
                    <p>
                        We added new Georgian Artists This singer is unique, his
                        voice covered the whole of Georgia, you must see it in
                        <span>
                            {' '}
                            <Link href="/artists">
                                <span className={styles.underline}>
                                    Artists
                                </span>{' '}
                            </Link>
                            Page u can check and enjoy.
                        </span>
                        <img
                            src="images/artists.jpg"
                            alt="art"
                            className={styles.responsiveImage}
                            draggable={false}
                        />
                    </p>
                );
            case 'Albums':
                return (
                    <p>
                        did you know that Pink Floyd, British rock band at the
                        forefront of 1960s psychedelia who later popularized the
                        concept album for mass rock audiences in the 1970s. Now
                        you can see Pinkfloyd albums in our web player u can
                        check on
                        <span>
                            {' '}
                            <Link href="/albums">
                                <span className={styles.underline}>Albums</span>{' '}
                            </Link>
                            Page, please enjoy.
                        </span>
                        <img
                            src="images/pink.jpg"
                            alt="art"
                            className={styles.responsiveImage}
                            draggable={false}
                        />
                    </p>
                );
            case 'Playlists':
                return (
                    <p>
                        Our Web Player allows you to create comfort, create a
                        playlist with the name you want and put exotic and
                        pleasant songs inside. what did you try You can do all
                        this here on
                        <span>
                            {' '}
                            <Link href="/playlist">
                                <span className={styles.underline}>
                                    Playlist
                                </span>{' '}
                            </Link>
                            Page, please enjoy.
                        </span>
                        <img
                            src="images/playlistspiderman.jpg"
                            alt="art"
                            className={styles.responsiveImage}
                            draggable={false}
                        />
                    </p>
                );
            case 'Songs':
                return (
                    <p>
                        You will find more than 60,000 songs in our player,
                        hopefully one of these 60,000 songs will suit your taste
                        and give you maximum pleasure in our most beautiful WEB.
                        Please enjoy.
                        <span>
                            {' '}
                            <Link href="/songs">
                                <span className={styles.underline}>Songs</span>{' '}
                            </Link>
                        </span>
                        <img
                            src="images/songs.jpg"
                            alt="art"
                            className={styles.responsiveImage}
                            draggable={false}
                        />
                    </p>
                );
            case 'Podcasts':
                return (
                    <p>
                        Very soon you will be able to watch podcasts and
                        entertainment shows on our site. Please stay tuned. Kind
                        regards 
                        <span>
                            {' '}
                            <Link href="/">
                                <span className={styles.underline}>CHAKRULOS</span>{' '}
                            </Link>
                        </span>
                        <img
                            src="images/podcasts.jpg"
                            alt="art"
                            className={styles.responsiveImage}
                            draggable={false}
                        />
                    </p>
                );
            default:
                return (
                    <>
                        <p>
                            We have good news, Chakrulos | UPDATE 0.0.1 | We
                            added new Georgian, European Artists, also we added
                            more exclusive Playlists and Albums. U Need To
                            Follow your favourite Artists and Songs's authors.
                            and important thing is to stay Our Best Georgian WEB
                            Songs Player!
                        </p>
                        <img
                            src="images/spaceart.jpg"
                            alt="art"
                            className={styles.responsiveImage}
                            draggable={false}
                        />
                    </>
                );
        }
    };

    return (
        <div className={styles.contentFeed}>
            <h2>
                What's New on{' '}
                <span className={styles.chakrulos}>CHAKRULOS?!</span>
            </h2>
            <p>
                The latest releases from Artists, Songs, Playlists, Albums and
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
                {!activeFilter || activeFilter === 'Artists' ? (
                    <button
                        className={
                            activeFilter === 'Artists' ? styles.active : ''
                        }
                        onClick={() => toggleFilter('Artists')}
                    >
                        Artists
                    </button>
                ) : null}
                {!activeFilter || activeFilter === 'Albums' ? (
                    <button
                        className={
                            activeFilter === 'Albums' ? styles.active : ''
                        }
                        onClick={() => toggleFilter('Albums')}
                    >
                        Albums
                    </button>
                ) : null}
                {!activeFilter || activeFilter === 'Playlists' ? (
                    <button
                        className={
                            activeFilter === 'Playlists' ? styles.active : ''
                        }
                        onClick={() => toggleFilter('Playlists')}
                    >
                        Playlists
                    </button>
                ) : null}
                {!activeFilter || activeFilter === 'Songs' ? (
                    <button
                        className={
                            activeFilter === 'Songs' ? styles.active : ''
                        }
                        onClick={() => toggleFilter('Songs')}
                    >
                        Songs
                    </button>
                ) : null}
                {!activeFilter || activeFilter === 'Podcasts' ? (
                    <button
                        className={
                            activeFilter === 'Podcasts' ? styles.active : ''
                        }
                        onClick={() => toggleFilter('Podcasts')}
                    >
                        Podcasts & Shows
                    </button>
                ) : null}
            </div>
            <div className={styles.content}>{renderContent()}</div>
        </div>
    );
};

export default ContentFeed;
