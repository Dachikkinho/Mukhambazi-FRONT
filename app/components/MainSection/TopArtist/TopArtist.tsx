import Link from 'next/link';

import styles from './TopArtist.module.scss';
import { Key, useEffect, useState } from 'react';
import LandingCard from './LandingCard/LandingCard';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import { Artists } from '@/app/interfaces/artist.interface';

const TopArtist = () => {
    const [artists, setArtists] = useState<Artists[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        axios
            .get('https://mukhambazi-back.onrender.com/author', {
                onDownloadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;

                    if (total) {
                        const percentage = Math.floor((loaded / total) * 100);
                        setProgress(percentage);
                        console.log(
                            `Downloaded: ${Math.floor((loaded / total) * 100)}%`,
                        );
                    }
                },
            })
            .then((res) => {
                setArtists([...res.data]);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <LoadingBar
                color="#c338b5"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                loaderSpeed={600}
            />
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
                    (artist: Artists, index: Key | null | undefined) => (
                        <Link key={index} href={`/artists/${artist.id}`}>
                            <LandingCard
                                name={`${artist.firstName} ${artist.lastName}`}
                                bgColor={''}
                                img={artist.image}
                                plays={'2'}
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
                    (artist: Artists, index: Key | null | undefined) => (
                        <Link key={index} href={`/artists/${artist.id}`}>
                            <LandingCard
                                name={`${artist.firstName} ${artist.lastName}`}
                                bgColor={''}
                                img={artist.image}
                                plays={'2'}
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
                    (artist: Artists, index: Key | null | undefined) => (
                        <Link key={index} href={`/artists/${artist.id}`}>
                            <LandingCard
                                name={`${artist.firstName} ${artist.lastName}`}
                                bgColor={''}
                                img={artist.image}
                                plays={'2'}
                            />
                        </Link>
                    ),
                )}
            </div>
        </div>
    );
};

export default TopArtist;
