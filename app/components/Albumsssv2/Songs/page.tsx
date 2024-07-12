
import { albumsState } from "@/app/states";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Albumsartistsv2 from "../Albumsartists/page";
import { useSearchParams } from "next/navigation";


const MyComponentv2 = () => {
    let params = useSearchParams();
    let albumParam = params.get('album');

    const [albumName, setAlbumName] = useState('')
    const [myAlbum, setMyAlbum] = useRecoilState(albumsState)

    useEffect(() => {
        setAlbumName(`${albumParam}`)
    }, [albumParam])

    return (
        <div>
            {myAlbum.filter(album => album.group === albumName).map(album => (
                <Albumsartistsv2 artistName={album.group} songs={album.songs} nationality={album.nationality} image={album.image} src={album.srcs}/>
            ))}
        </div>
    );
}

export default MyComponentv2;
