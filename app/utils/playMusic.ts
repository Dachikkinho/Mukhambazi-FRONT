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
        image: string;
        artistName: string;
    }>,
    src: string,
    name: string,
    index: number,
    image: string,
) {
    setIsPlaying({
        src: src,
        name: name,
        index: index,
        image: image,
        artistName: 'placeholder',
    });

    const songsArr: nextSong[] = [];

    songs.forEach((song, i) => {
        const songVar = {
            id: song.id,
            src: song.url,
            name: song.name,
            index: i,
            artistName: `placeholder`,
            image: song.image,
        };

        songsArr.push(songVar);
    });

    setNextSongArr(songsArr);
}
