import Link from 'next/link';
import { LandingCard } from './LandingCard/LandingCard';
import styles from './TopArtist.module.scss';
import { artists } from '@/public/script';
import { Key } from 'react';

export const TopArtist = () => {
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
                    />
                </div>
            </div>
            <div className={styles.artistsWrapper}>
                {artists.map(
                    (
                        artists: {
                            name: string;
                            bgColor: string;
                            img: string;
                            listens: string;
                        },
                        index: Key | null | undefined,
                    ) => (
                        <Link key={index} href={`/album?album=${artists.name}`}>
                            <LandingCard
                                name={artists.name}
                                bgColor={artists.bgColor}
                                img={artists.img}
                                plays={artists.listens}
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
                        },
                        index: Key | null | undefined,
                    ) => (
                        <Link key={index} href={`/album?album=${artist.name}`}>
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
                        },
                        index: Key | null | undefined,
                    ) => (
                        <Link key={index} href={`/album?album=${artist.name}`}>
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
