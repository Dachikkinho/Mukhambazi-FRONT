import styles from './Artists.module.scss';
import ArtistCard from './ArtistCard/ArtistCard';
import ArtistcardHeader from './ArtistcardHeader/ArtistcardHeader';
import Search from '../Header/Search/Search';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import axios from 'axios';
import { Artists } from '@/app/interfaces/artist.interface';

const ArtistsPage = () => {
    const [popular, setPopular] = useState<Artists[]>([]);
    const [georgian, setGeorgian] = useState<Artists[]>([]);
    const [European, setEuropean] = useState<Artists[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const jwt = localStorage.getItem('user');
        axios
            .all([
                axios.get(
                    `https://back.chakrulos.ge/authors/category/Popular`,
                    {
                        onDownloadProgress: (progressEvent) => {
                            const { loaded, total } = progressEvent;

                            if (total) {
                                const percentage = Math.floor(
                                    (loaded / total) * 100,
                                );
                                setProgress(percentage);
                            }
                        },
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    },
                ),
                axios.get(
                    `https://back.chakrulos.ge/authors/category/Georgian`,
                    {
                        onDownloadProgress: (progressEvent) => {
                            const { loaded, total } = progressEvent;

                            if (total) {
                                const percentage = Math.floor(
                                    (loaded / total) * 100,
                                );
                                setProgress(percentage);
                            }
                        },
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    },
                ),
                axios.get(
                    'https://back.chakrulos.ge/authors/category/European',
                    {
                        onDownloadProgress: (progressEvent) => {
                            const { loaded, total } = progressEvent;

                            if (total) {
                                const percentage = Math.floor(
                                    (loaded / total) * 100,
                                );
                                setProgress(percentage);
                            }
                        },
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    },
                ),
            ])
            .then(
                axios.spread((popular, georgian, european) => {
                    console.log(popular.data);

                    setPopular(popular.data);
                    setGeorgian(georgian.data);
                    setEuropean(european.data);
                }),
            );
    }, []);

    return (
        <div className={styles.wrapper}>
            <LoadingBar
                color="#c338b5"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                loaderSpeed={600}
            />
            <div className={styles.main}>
                <div className={styles.topContainer}>
                    <Search
                        placeholder={'Enter keywords to search'}
                        icon={'search'}
                        width={24}
                        height={24}
                    />
                </div>
                <div>
                    <ArtistcardHeader
                        title={'Popular Artists'}
                        icon={'popular'}
                    />
                    <div className={styles.cards}>
                        {popular.map((artist, i) => (
                            <Link
                                key={i}
                                href={`/artists/${artist.id}`}
                                draggable={false}
                                className={styles.cardCont}
                            >
                                <ArtistCard
                                    bgColor={'rgb(130 74 145)'}
                                    name={`${artist.firstName} ${artist.lastName}`}
                                    pfp={artist.image}
                                    plays={artist.listens}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <ArtistcardHeader
                        title={'Georgian Artists'}
                        icon={'wine-glass-solid'}
                    />
                    <div className={styles.cards}>
                        {georgian.map((artist, i) => (
                            <Link
                                key={i}
                                href={`/artists/${artist.id}`}
                                draggable={false}
                                className={styles.cardCont}
                            >
                                <ArtistCard
                                    bgColor={'rgb(130 74 145)'}
                                    name={`${artist.firstName} ${artist.lastName}`}
                                    pfp={artist.image}
                                    plays={artist.listens}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <ArtistcardHeader
                        title={'European Artists'}
                        icon={'earth-europe-solid'}
                    />
                    <div className={styles.cards}>
                        {European.map((artist, i) => (
                            <Link
                                key={i}
                                href={`/artists/${artist.id}`}
                                draggable={false}
                                className={styles.cardCont}
                            >
                                <ArtistCard
                                    bgColor={'rgb(130 74 145)'}
                                    name={`${artist.firstName} ${artist.lastName}`}
                                    pfp={artist.image}
                                    plays={artist.listens}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistsPage;
