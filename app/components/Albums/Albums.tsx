
import { useRecoilState } from "recoil";
import styles from "./Albums.module.scss"
import Link from "next/link";
import AlbumCard from "./AlbumCard/AlbumCard";
import { Search } from "../Header/Search/Search";
import { albumsState } from "@/app/states";



export const Albums = () => {

    const [albums] = useRecoilState(albumsState)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
            <div className={styles.Search}>
            <Search placeholder={"Enter keywords to search"} icon={"search"} width={24} height={24} />
            </div>
                <h2 className={styles.heading}></h2>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
               
                    <div className={styles.dragons}>
                        {albums.map((album: { name: string; lastName: string; plays: string; image: string; }) => (
                            <Link  href={`/album?album=${album.name}${album.lastName}`}>
                                <AlbumCard name={album.name}  lastName={album.lastName} plays={album.plays} image={album.image} />
                            </Link>
                        ))}
                    </div> 
                    
                </div>
            </div>
        </div>
    )
}

export default Albums;