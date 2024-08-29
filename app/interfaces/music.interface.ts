import { Artist } from './artist.interface';

export interface Music {
    id: number;
    name: string;
    authorId: number;
    url: string;
    author: Artist;
}
