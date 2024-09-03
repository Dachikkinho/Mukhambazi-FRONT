import { Music } from './music.interface';

export interface AlbumPage {
    id: number;
    name: string;
    artistName: string;
    musics: Music[];
    image: string;
}
