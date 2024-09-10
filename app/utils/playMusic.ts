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
    song: Music,
    index: number,
) {
    setIsPlaying({
        src: song.url,
        name: song.name,
        index: index,
        image: song.image,
        artistName: `${song.author.firstName} ${song.author.lastName}`,
    });

    const songsArr: nextSong[] = [];

    songs.forEach((song, i) => {
        const songVar = {
            id: song.id,
            src: song.url,
            name: song.name,
            index: i,
            artistName: `${song.author.firstName} ${song.author.lastName}`,
            image: song.image,
        };

        songsArr.push(songVar);
    });

    setNextSongArr(songsArr);
}
