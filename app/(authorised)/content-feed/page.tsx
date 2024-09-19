'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { FilterType } from '@/app/enums/filterType';
import { setTitle, toggleFilter } from '@/app/enums/utils';
import ContentMapping from '@/app/components/Content/ContentMapping';
import PrivateRoute from '@/app/components/PrivateRoute/PrivateRoute';

const ContentFeed = () => {
    useEffect(() => {
        setTitle('Chakrulos - Web Player: Music for everyone');
    }, []);

    const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

    const filterTypes = Object.values(FilterType);

    return (
        <PrivateRoute>
            <div className={styles.contentFeed}>
                <h2>
                    What’s New on{' '}
                    <span className={styles.chakrulos}>CHAKRULOS?!</span>
                </h2>
                <p>
                    The latest releases from Artists, Songs, Playlists, Albums,
                    and shows you have to follow.
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
                    {filterTypes.map((filter) => (
                        <button
                            key={filter}
                            className={
                                activeFilter === filter ? styles.active : ''
                            }
                            onClick={() =>
                                toggleFilter(
                                    activeFilter,
                                    setActiveFilter,
                                    filter,
                                )
                            }
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <div className={styles.content}>
                    {activeFilter ? (
                        ContentMapping[activeFilter]
                    ) : (
                        <>
                            <p>
                                We have good news! Chakrulos | UPDATE 0.0.1 | We
                                added new Georgian, European Artists, as well as
                                more exclusive Playlists and Albums. You need to
                                follow your favorite artists and songwriters.
                                Stay tuned with our best Georgian web songs
                                player!
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
        </PrivateRoute>
    );
};

export default ContentFeed;
