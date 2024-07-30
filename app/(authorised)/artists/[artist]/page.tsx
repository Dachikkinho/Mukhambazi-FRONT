'use client';
import Song from '@/app/components/SongsMainSection/Song/Song';
import styles from './page.module.scss';
import Albumcard from '@/app/components/Albums/AlbumCard/AlbumCard';
import { useParams } from 'next/navigation';
import { artists, topSongsPlaceholder } from '@/public/script';
import { Artist } from '@/app/interfaces/artist.interface';

const artist = () => {
    const params = useParams();
    const id = params.artist;

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
                        {topSongsPlaceholder.map((song, i) => (
                            <Song
                                group={getArtist?.name}
                                imageSrc={song.imageSrc}
                                length={song.length}
                                name={song.name}
                                key={i}
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
