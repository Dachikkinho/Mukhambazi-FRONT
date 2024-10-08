import styles from './Albums.module.scss';
import Link from 'next/link';
import AlbumCard from './AlbumCard/AlbumCard';
import Search from '../Header/Search/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import { Album } from '@/app/interfaces/album.interface';

const Albums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const jwt = localStorage.getItem('user');
        axios
            .get('https://back.chakrulos.ge/album', {
                onDownloadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;

                    if (total) {
                        const percentage = Math.floor((loaded / total) * 100);
                        setProgress(percentage);
                    }
                },
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                setAlbums([...res.data]);
            });
    }, [axios]);

    return (
        <div className={styles.Container}>
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
                />
            </div>

            <div className={styles.Title}>
                <h4>Albums</h4>
                <img
                    src="/icons/albums-icon.svg"
                    alt="icon"
                    draggable={false}
                />
            </div>

            <div className={styles.AlbumsContainer}>
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
    );
};

export default Albums;
