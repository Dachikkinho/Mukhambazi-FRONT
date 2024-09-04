import { Artists } from './artist.interface';

export interface Music {
    group: string;
    //group: any;
    image: string;
    id: number;
    name: string;
    authorId: number;
    url: string;
    author: Artists;
    length: string;
    isPlaying: boolean;
    isLiked: boolean;
}
