import { atom } from 'recoil';
import { Music } from './interfaces/music.interface';

export const sideBarOpenState = atom({
    key: 'sideBarOpen',
    default: false,
});

export const popUpOpenState = atom({
    key: 'popUpOpen',
    default: false,
});

export const isPlayingState = atom({
    key: 'isPlaying',
    default: {
        src: '',
        name: '',
    },
});

export const favSongState = atom<Music[]>({
    key: 'favSong',
    default: [],
});

export const songsState = atom<Music[]>({
    key: 'songs',
    default: [],
});
