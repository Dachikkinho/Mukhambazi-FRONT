'use client';
import Song from '@/app/components/SongsMainSection/Song/Song';
import styles from './page.module.scss';
import Albumcard from '@/app/components/Albums/AlbumCard/AlbumCard';
import { useSearchParams } from 'next/navigation';
import { artists } from '@/public/script';

interface Artist {
    name: string;
    listens: string;
    bgColor: string;
    img: string;
    id: number;
    bio: string;
}

const artist = () => {
    const params = useSearchParams();
    const id = params.get('id') || 0;

    const getArtist: Artist = artists.filter((artist) => artist.id === +id)[0];

    return (
        <main className={styles.main}>
            <div className={styles.top}>
                <img
                    src={`images/artistPfp/${getArtist?.img}.png`}
                    alt="artist image"
                    className={styles.image}
                />
                <h2 className={styles.heading}>{getArtist?.name}</h2>
                <p className={styles.about}>{getArtist?.bio}</p>
            </div>

            <div className={styles.content}>
                <div className={styles.contentWrap}>
                    <div className={styles.headingCont}>
                        <h3 className={styles.topSongHeading}>Top Songs</h3>
                        <img src="/icons/home-icon.svg" alt="" />
                    </div>
                    <div className={styles.topSongs}>
                        <Song
                            group={getArtist?.name}
                            imageSrc="/images/song-placeholder.svg"
                            length="2:20"
                            name="Song"
                        />
                        <Song
                            group={getArtist?.name}
                            imageSrc="/images/song-placeholder.svg"
                            length="2:20"
                            name="Song"
                        />
                        <Song
                            group={getArtist?.name}
                            imageSrc="/images/song-placeholder.svg"
                            length="2:20"
                            name="Song"
                        />
                        <Song
                            group={getArtist?.name}
                            imageSrc="/images/song-placeholder.svg"
                            length="2:20"
                            name="Song"
                        />
                        <Song
                            group={getArtist?.name}
                            imageSrc="/images/song-placeholder.svg"
                            length="2:20"
                            name="Song"
                        />
                    </div>
                </div>

                <div className={styles.contentWrap}>
                    <div className={styles.headingCont}>
                        <h3 className={styles.topSongHeading}>Albums</h3>
                        <img src="/icons/albums-icon.svg" alt="" />
                    </div>
                    <div className={styles.topSongs}>
                        <Albumcard
                            image="/images/songCovers/banner.png"
                            name={getArtist?.name}
                            lastName=""
                            plays="20M"
                        />
                        <Albumcard
                            image="/images/songCovers/banner.png"
                            name={getArtist?.name}
                            lastName=""
                            plays="20M"
                        />
                        <Albumcard
                            image="/images/songCovers/banner.png"
                            name={getArtist?.name}
                            lastName=""
                            plays="20M"
                        />
                        <Albumcard
                            image="/images/songCovers/banner.png"
                            name={getArtist?.name}
                            lastName=""
                            plays="20M"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default artist;
