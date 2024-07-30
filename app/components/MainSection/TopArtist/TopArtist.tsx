import Link from 'next/link';

import styles from './TopArtist.module.scss';
import { artists } from '@/public/script';
import { Key } from 'react';
import LandingCard from './LandingCard/LandingCard';

const TopArtist = () => {
    return (
        <div>
            <div>
                <div className={styles.heading}>
                    <h5>Top Artist</h5>
                    <img
                        src="/icons/topartist.png"
                        alt="topartist-icon"
                        width={36}
                        height={36}
                        draggable={false}
                    />
                </div>
            </div>
            <div className={styles.artistsWrapper}>
                {artists.map(
                    (
                        artist: {
                            name: string;
                            bgColor: string;
                            img: string;
                            listens: string;
                            id: number;
                        },
                        index: Key | null | undefined,
                    ) => (
                        <Link key={index} href={`/artists/${artist.id}`}>
                            <LandingCard
                                name={artist.name}
                                bgColor={artist.bgColor}
                                img={artist.img}
                                plays={artist.listens}
                            />
                        </Link>
                    ),
                )}
            </div>
            <div>
                <div className={styles.heading}>
                    <h5>Top Hits</h5>
                    <img
                        src="/icons/pop.png"
                        alt="tophits-icon"
                        width={36}
                        height={36}
                        draggable={false}
                    />
                </div>
            </div>
            <div className={styles.artistsWrapper}>
                {artists.map(
                    (
                        artist: {
                            name: string;
                            bgColor: string;
                            img: string;
                            listens: string;
                            id: number;
                        },
                        index: Key | null | undefined,
                    ) => (
                        <Link key={index} href={`/artists/${artist.id}`}>
                            <LandingCard
                                name={artist.name}
                                bgColor={artist.bgColor}
                                img={artist.img}
                                plays={artist.listens}
                            />
                        </Link>
                    ),
                )}
            </div>
            <div>
                <div className={styles.heading}>
                    <h5>Top Charts</h5>
                    <img
                        src="/icons/top.png"
                        alt="profile"
                        width={36}
                        height={36}
                        draggable={false}
                    />
                </div>
            </div>
            <div className={styles.artistsWrapper}>
                {artists.map(
                    (
                        artist: {
                            name: string;
                            bgColor: string;
                            img: string;
                            listens: string;
                            id: number;
                        },
                        index: Key | null | undefined,
                    ) => (
                        <Link key={index} href={`/artists/${artist.id}`}>
                            <LandingCard
                                name={artist.name}
                                bgColor={artist.bgColor}
                                img={artist.img}
                                plays={artist.listens}
                            />
                        </Link>
                    ),
                )}
            </div>
        </div>
    );
};

export default TopArtist;
