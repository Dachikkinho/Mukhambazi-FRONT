'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '@/app/components/Header/Search/Search';
import Song from '@/app/components/SongsMainSection/Song/Song';
import { isPlayingState, nextSongArrState } from '@/app/states';
import { useSetRecoilState } from 'recoil';
import AlbumCard from '@/app/components/Albums/AlbumCard/AlbumCard';
import Link from 'next/link';
import LoadingBar from 'react-top-loading-bar';
import { Music } from '@/app/interfaces/music.interface';
import { Album } from '@/app/interfaces/album.interface';
import { playMusic } from '@/app/utils/playMusic';
import { Artists } from '@/app/interfaces/artist.interface';
import LandingCard from '@/app/components/MainSection/TopArtist/LandingCard/LandingCard';
import PrivateRoute from '@/app/components/PrivateRoute/PrivateRoute';

type Props = {
    searchParams: {
        query: string;
    };
};

const SearchPage = (props: Props) => {
    useEffect(() => {
        document.title = 'Chakrulos - Web Player: Music for everyone';
    }, []);

    const [songs, setSongs] = useState<Music[]>([]);
    const [progress, setProgress] = useState(0);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [artists, setArtists] = useState<Artists[]>([]);
    const setIsPlaying = useSetRecoilState(isPlayingState);
    const setNextSongArr = useSetRecoilState(nextSongArrState);

    useEffect(() => {
        axios
            .get(
                `https://back.chakrulos.ge/search/${props.searchParams.query}`,
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
                },
            )
            .then((res) => {
                setSongs([...res.data.music]);
                setAlbums([...res.data.album]);
                setArtists([...res.data.author]);
            });
    }, [props.searchParams.query]);

    return (
        <PrivateRoute>
            <main className={styles.main}>
                <LoadingBar
                    color="#c338b5"
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                    loaderSpeed={600}
                />
                <div className={styles.topContainer}>
                    <Search
                        placeholder={'Enter keywords to search'}
                        icon={'search'}
                        width={24}
                        height={24}
                        value={props.searchParams.query || ''}
                    />
                </div>
                {!!artists.length && (
                    <div className={styles.sectionCont}>
                        <div className={styles.headingCont}>
                            <h5 className={styles.heading}>Artists</h5>
                            <img
                                src="/icons/artists-icon.svg"
                                alt="icon"
                                draggable={false}
                            />
                        </div>
                        <div className={styles.songsCont}>
                            {artists.map((artist, i) => (
                                <Link key={i} href={`/artists/${artist.id}`}>
                                    <LandingCard
                                        name={`${artist.firstName} ${artist.lastName}`}
                                        bgColor={''}
                                        img={artist.image}
                                        plays={'2'}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                {!!songs.length && (
                    <div className={styles.sectionCont}>
                        <div className={styles.headingCont}>
                            <h5 className={styles.heading}>Songs</h5>
                            <img
                                src="/icons/note-circle.svg"
                                alt="icon"
                                draggable={false}
                            />
                        </div>
                        <div className={styles.songsCont}>
                            {songs.map((song, i) => (
                                <Song
                                    name={song.name}
                                    group={``}
                                    songUrl={song.url}
                                    imageSrc={song.image}
                                    key={i}
                                    onClick={() =>
                                        playMusic(
                                            songs,
                                            setNextSongArr,
                                            setIsPlaying,
                                            song.url,
                                            song.name,
                                            i,
                                            song.image,
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}

                {!!albums.length && (
                    <div className={styles.sectionCont}>
                        <div className={styles.headingCont}>
                            <h5 className={styles.heading}>Albums</h5>
                            <img
                                src="/icons/albums-icon.svg"
                                alt="icon"
                                draggable={false}
                            />
                        </div>
                        <div className={styles.songsCont}>
                            {albums.map((album, i) => (
                                <Link href={`albums/${album.id}`} key={i}>
                                    <AlbumCard
                                        name={album.name}
                                        lastName={''}
                                        plays={album.releaseDate}
                                        image={album.image}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </PrivateRoute>
    );
};

export default SearchPage;
