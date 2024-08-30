'use client';
import styles from './Favorites.module.scss';
//import FavoriteBanner from './FavoriteBanner/FavoriteBanner';
import Search from '../Header/Search/Search';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { favSongState } from '@/app/states';

const Favorites = () => {
    //const [songs, setSongs] = useRecoilState(songsState);
    const [favSongs, setFavSongs] = useRecoilState(favSongState);

    useEffect(() => {
        console.log(favSongs);
        const favs = structuredClone(favSongs);

        for (let i = 0; i < favs.length; i++) {
            if (i + 1 < favs.length && favs[i].id + 1 !== favs[i + 1].id) {
                favs[i + 1].id -= 1;
                setFavSongs(favs);
            }
        }
    }, [favSongs]);
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
                <p className={styles.noSongs}>No Favorites Yet</p>
            </div>
        </div>
    );
};

export default Favorites;

//<div className={styles.Songs}>
//{favSongs.length ? (
// favSongs.map((song, i) => (
//    <FavoriteBanner
//      banner={`/images/FavoriteCovers/${song.group}.png`}
//    title={song.name}
//  musicSrc={song.src}
///>
//))
//) : (
//<p className={styles.noSongs}>No Favorites Yet</p>;
//)}
//<p className={styles.noSongs}>No Favorites Yet</p>
//</div>
