import { atom, useRecoilState } from 'recoil';
import styles from './Albums.module.scss';
import Link from 'next/link';
import AlbumCard from './AlbumCard/AlbumCard';
import { Search } from '../Header/Search/Search';
import { albums } from '@/public/script';

export const Albums = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.responsiveTitle}>
                <h4>Albums</h4>
                <img src="/icons/albums-icon.svg" alt="icon" />
            </div>
            <div className={styles.Search}>
                <Search
                    placeholder={'Enter keywords to search'}
                    icon={'search'}
                    width={24}
                    height={24}
                />
            </div>

            <div className={styles.Title}>
                <h4>Albums</h4>
                <img src="/icons/albums-icon.svg" alt="icon" />
            </div>

            <div className={styles.AlbumsContainer}>
                {albums.map((album, i) => (
                    <Link href={`/album?id=${album.id}`} key={i}>
                        <AlbumCard
                            name={album.name}
                            lastName={album.lastName}
                            plays={album.plays}
                            image={album.image}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Albums;
