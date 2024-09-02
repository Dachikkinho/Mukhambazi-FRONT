'use client';
import Song from '@/app/components/SongsMainSection/Song/Song';
import styles from './page.module.scss';
import Albumcard from '@/app/components/Albums/AlbumCard/AlbumCard';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import { isPlayingState, nextSongArrState } from '@/app/states';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { Album } from '@/app/interfaces/album.interface';
import { Music } from '@/app/interfaces/music.interface';
import { Artists } from '@/app/interfaces/artist.interface';
import { playMusic } from '@/app/utils/playMusic';

const Artist = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Artist ';
    }, []);
    const params = useParams();
    const id = params.artist;

    const [artist, setArtist] = useState<Artists>();
    const [songs, setSongs] = useState<Music[]>([]);
    const [progress, setProgress] = useState(0);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setNextSongArr] = useRecoilState(nextSongArrState);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/authors/${id}`, {
                onDownloadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;

                    if (total) {
                        const percentage = Math.floor((loaded / total) * 100);
                        setProgress(percentage);
                    }
                },
            })
            .then((res) => {
                setArtist(res.data);
                setSongs([...res.data.musics]);
                setAlbums([...res.data.album]);
            });
    }, []);

    return (
        <main className={styles.main}>
            <LoadingBar
                color="#c338b5"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                loaderSpeed={600}
            />
            <div className={styles.top}>
                <img
                    src={artist?.image}
                    alt="artist image"
                    className={styles.image}
                />
                <h2 className={styles.heading}>
                    {artist?.firstName} {artist?.lastName}
                </h2>
                <p className={styles.about}>{artist?.biography}</p>
            </div>

            <div className={styles.content}>
                <div className={styles.contentWrap}>
                    <div className={styles.headingCont}>
                        <h3 className={styles.topSongHeading}>Top Songs</h3>
                        <img src="/icons/home-icon.svg" alt="" />
                    </div>
                    <div className={styles.topSongs}>
                        {songs.map((song, i) => (
                            <Song
                                group={
                                    `${artist?.firstName} ${artist?.lastName}` ||
                                    ''
                                }
                                imageSrc={'/images/song-placeholder.svg'}
                                name={song.name}
                                songUrl={song.url}
                                key={i}
                                onClick={() =>
                                    playMusic(
                                        songs,
                                        setNextSongArr,
                                        setIsPlaying,
                                        song.url,
                                        song.name,
                                        i,
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.contentWrap}>
                    <div className={styles.headingCont}>
                        <h3 className={styles.topSongHeading}>Albums</h3>
                        <img src="/icons/albums-icon.svg" alt="" />
                    </div>
                    <div className={styles.topSongs}>
                        {albums.map((album, i) => (
                            <Link href={`../albums/${album.id}`} key={i}>
                                <Albumcard
                                    image="/images/songCovers/banner.png"
                                    name={`${album.name}` || ''}
                                    lastName=""
                                    plays={album.releaseDate}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Artist;
