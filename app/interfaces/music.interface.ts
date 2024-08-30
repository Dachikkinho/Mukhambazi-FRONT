import { Artists } from './artist.interface';

export interface Music {
    src: string | undefined;
    group: any;
    id: number;
    name: string;
    authorId: number;
    url: string;
    author: Artists;
    length: string;
    isPlaying: boolean;
    isLiked: boolean;
}
