'use client';
import styles from './Favorites.module.scss';
import Search from '../Header/Search/Search';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { favSongState, isPlayingState, nextSongArrState } from '@/app/states';
import FavoriteBanner from './FavoriteBanner/FavoriteBanner';
import axios from 'axios';
import { Music } from '@/app/interfaces/music.interface';
import { playMusic } from '@/app/utils/playMusic';

const Favorites = () => {
    const [favSongs, setFavSongs] = useRecoilState(favSongState);
    const setIsPlaying = useSetRecoilState(isPlayingState);
    const setNextSongArr = useSetRecoilState(nextSongArrState);

    useEffect(() => {
        const jwt = localStorage.getItem('user');
        axios
            .get('https://back.chakrulos.ge/users/me', {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                console.log(res);
                const musics = res.data.favorites.map(
                    (fav: { music: Music }) => fav.music,
                );
                console.log(musics);

                setFavSongs([...musics]);
            });
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.SearchBar}>
                <Search
                    placeholder={'Enter keywords to search'}
                    icon={'search'}
                    width={24}
                    height={24}
                />
            </div>
            <div className={styles.Title}>
                <div className={styles.headingCont}>
                    <h4>Favorites</h4>
                    <img
                        src="/icons/songs-heading-icon.svg"
                        alt="icon"
                        draggable={false}
                    />
                </div>
            </div>
            <div className={styles.Songs}>
                {favSongs.length ? (
                    favSongs.map((song, i) => (
                        <FavoriteBanner
                            banner={song.image}
                            title={song.name}
                            musicSrc={song.url}
                            id={song.id}
                            key={i}
                            play={() => {
                                playMusic(
                                    favSongs,
                                    setNextSongArr,
                                    setIsPlaying,
                                    song,
                                    i,
                                );
                            }}
                        />
                    ))
                ) : (
                    <p className={styles.noSongs}>No Favorites Yet</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;
