import styles from './SongsMainSection.module.scss';
import Search from '../Header/Search/Search';
import Song from './Song/Song';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isPlayingState } from '@/app/states';
import LoadingBar from 'react-top-loading-bar';

type AuthorNames = {
    [key: number]: string;
};

const SongsMainSection = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [authorNames, setAuthorNames] = useState<AuthorNames>({});
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    useEffect(() => {
        axios
            .get('http://localhost:3001/music/', {
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
                setSongs(res.data);
                // Fetch author names for each song
                const authorRequests = res.data.map((song: Song) =>
                    axios
                        .get(`http://localhost:3001/authors/${song.id}`)
                        .then((res) => ({
                            id: song.id,
                            name: `${res.data.firstName} ${res.data.lastName}`,
                        })),
                );
                Promise.all(authorRequests).then((authors) => {
                    const authorNamesMap = authors.reduce((acc, author) => {
                        acc[author.id] = author.name;
                        return acc;
                    }, {});
                    setAuthorNames(authorNamesMap);
                });
            });
    }, []);

    function playMusic(src: string, name: string) {
        let music = {
            src: src,
            name: name,
        };
        setIsPlaying(music);
    }

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
                    <h5 className={styles.heading}>Songs</h5>
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
                            group={authorNames[song.id] || 'Unknown'}
                            length={'2:00'}
                            imageSrc={'/images/song-placeholder.svg'}
                            key={i}
                            onClick={() => playMusic(song.url, song.name)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SongsMainSection;
