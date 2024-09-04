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
    const setIsPlaying = useSetRecoilState(isPlayingState);
    const setNextSongArr = useSetRecoilState(nextSongArrState);

    useEffect(() => {
        axios
            .get(
                `https://mukhambazi-back.onrender.com/search/${props.searchParams.query}`,
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
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.searchParams.query]);

    return (
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
                                imageSrc={'/images/song-placeholder.svg'}
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
                                    image={'/images/songCovers/banner.png'}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
};

export default SearchPage;
