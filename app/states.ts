import { atom } from 'recoil';
import { Music } from './interfaces/music.interface';
import { nextSong } from './interfaces/nextSong.interface';

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
        index: 0,
        src: '',
        name: '',
    },
});

export const nextSongArrState = atom<nextSong[]>({
    key: 'nextSongArr',
    default: [],
});

export const favSongState = atom<Music[]>({
    key: 'favSong',
    default: [],
});

export const songsState = atom<Music[]>({
    key: 'songs',
    default: [],
});
