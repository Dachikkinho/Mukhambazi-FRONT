import { atom } from 'recoil';

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
