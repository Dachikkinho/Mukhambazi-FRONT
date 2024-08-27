'use client';

import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Albumsartistsv2 from '../Albumsartists/page';
import { useSearchParams } from 'next/navigation';
import { albumsState } from '@/app/states';

const AlbumSongs = () => {
    const params = useSearchParams();
    const albumParam = params.get('album');

    const [albumName, setAlbumName] = useState('');
    const [myAlbum] = useRecoilState(albumsState);

    useEffect(() => {
        setAlbumName(`${albumParam}`);
    }, [albumParam]);

    return (
        <div>
            {myAlbum
                .filter((album) => album.name + album.lastName === albumName)
                .map((album, index) => (
                    <Albumsartistsv2
                        key={`${album.name}-${album.lastName}-${index}`}
                        artistName={album.name}
                        artistLastName={album.lastName}
                        songs={album.songs}
                        nationality={album.nationality}
                        image={album.image}
                        src={album.srcs}
                    />
                ))}
        </div>
    );
};

export default AlbumSongs;
