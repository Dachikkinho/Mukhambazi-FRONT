import { nextSong } from '../interfaces/nextSong.interface';
import { Music } from '../interfaces/music.interface';
import { SetterOrUpdater } from 'recoil';

export function playMusic(
    songs: Music[],
    setNextSongArr: SetterOrUpdater<nextSong[]>,
    setIsPlaying: SetterOrUpdater<{
        index: number;
        src: string;
        name: string;
    }>,
    src: string,
    name: string,
    index: number,
) {
    setIsPlaying({
        src: src,
        name: name,
        index: index,
    });

    const songsArr: nextSong[] = [];

    songs.forEach((song, i) => {
        const songVar = {
            id: song.id,
            src: song.url,
            name: song.name,
            index: i,
            artistName: `placeholder`,
        };

        songsArr.push(songVar);
    });

    setNextSongArr(songsArr);
}
