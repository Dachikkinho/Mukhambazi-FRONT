import styles from './SongsMainSection.module.scss';
import Search from '../Header/Search/Search';
import Song from './Song/Song';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { isPlayingState, nextSongArrState } from '@/app/states';
import LoadingBar from 'react-top-loading-bar';
import { Music } from '@/app/interfaces/music.interface';
import { playMusic } from '@/app/utils/playMusic';

const SongsMainSection = () => {
    const [songs, setSongs] = useState<Music[]>([]);
    const [progress, setProgress] = useState(0);
    const setIsPlaying = useSetRecoilState(isPlayingState);
    const setNextSongArr = useSetRecoilState(nextSongArrState);

    useEffect(() => {
        axios
            .get('http://localhost:3001/music', {
                onDownloadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;

                    if (total) {
                        const percentage = Math.floor((loaded / total) * 100);
                        setProgress(percentage);
                        console.log(
                            `Downloaded: ${Math.floor((loaded / total) * 100)}%`,
                        );
                    }
                },
            })
            .then((res) => {
                console.log(res.data);
                
                setSongs(res.data);
            });
    }, []);

    return (
        <div className={styles.mainContainer}>
            <LoadingBar
                color="#c338b5"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                loaderSpeed={600}
            />
            <div className={styles.topContainer}>
                <Search
                    placeholder="Enter keywords to search"
                    icon="search"
                    width={24}
                    height={24}
                />
            </div>
            <div>
                <div className={styles.headingCont}>
                    <h4>Songs</h4>
                    <img
                        src="/icons/note-circle.svg"
                        alt="icon"
                        draggable={false}
                    />
                </div>
                <div className={styles.songs}>
                    {songs.map((song, i) => (
                        <Song
                            name={song.name}
                            group={`${song.author.firstName} ${song.author.lastName}`}
                            songUrl={song.url}
                            imageSrc={'/images/song-placeholder.svg'}
                            id={song.id}
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
        </div>
    );
};

export default SongsMainSection;
