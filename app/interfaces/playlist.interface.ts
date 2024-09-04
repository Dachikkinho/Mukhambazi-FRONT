import { Music } from "./music.interface";

export interface Playlist {
    title: string;
    description: string;
    musicIds: number[];
    musics: Music[]
    userId: number;
    id: number;
}
