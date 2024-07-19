import { popularArtists, georgianArtists, europeanArtists } from "@/public/script"
import { Search } from "../Header/Search/Search"
import styles from "./Artists.module.scss"
import { ArtistCard } from "./ArtistCard/ArtistCard"
import { ArtistcardHeader } from "./ArtistcardHeader/ArtistcardHeader"

export const ArtistsPage = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.topContainer}>
                    <div className={styles.heading}>
                        <h2>Artists</h2>
                        <img src={`icons/artistmain.svg`} alt="pfp" width={24} height={24} />
                    </div>
                    <Search placeholder={"Enter keywords to search"} icon={"search"} width={24} height={24} />
                </div>
                <div>
                    <ArtistcardHeader title={"Popular Artists"} icon={"popular"} />
                    <div className={styles.cards}>
                        {popularArtists.map((artist, i) => (
                            <ArtistCard bgColor={artist.bg} name={artist.name} pfp={artist.pfp} plays={artist.plays} key={i}/>
                        ))}
                    </div>
                </div>

                <div>
                    <ArtistcardHeader title={"Georgian Artists"} icon={"wine-glass-solid"} />
                    <div className={styles.cards}>
                        {georgianArtists.map((artist, i) => (
                            <ArtistCard bgColor={artist.bg} name={artist.name} pfp={artist.pfp} plays={artist.plays} key={i}/>
                        ))}
                    </div>
                </div>
                <div>
                    <ArtistcardHeader title={"European Artists"} icon={"earth-europe-solid"} />
                    <div className={styles.cards}>
                        {europeanArtists.map((artist, i) => (
                            <ArtistCard bgColor={artist.bg} name={artist.name} pfp={artist.pfp} plays={artist.plays} key={i}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}