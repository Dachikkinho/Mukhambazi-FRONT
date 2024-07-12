import { popularArtists, georgianArtists, europeanArtists } from "@/public/script"
import { Search } from "../Header/Search/Search"
import styles from "./Artists.module.scss"
import { ArtistCard } from "./ArtistCard/ArtistCard"

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
                    <div className={styles.cardsHeading}>
                        <h4>Popular Artists</h4>
                        <img src={`icons/popular.svg`} alt="pfp" width={28} height={28} />
                    </div>
                    <div className={styles.cards}>
                        {popularArtists.map(artist => (
                            <ArtistCard bgColor={artist.bg} name={artist.name} pfp={artist.pfp} plays={artist.plays} />
                        ))}
                    </div>
                </div>

                <div>
                    <div className={styles.cardsHeading}>
                        <h4>Georgian Artists</h4>
                        <img src={`icons/wine-glass-solid.svg`} alt="pfp" width={28} height={28} />
                    </div>
                    <div className={styles.cards}>
                        {georgianArtists.map(artist => (
                            <ArtistCard bgColor={artist.bg} name={artist.name} pfp={artist.pfp} plays={artist.plays} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className={styles.cardsHeading}>
                        <h4>European Artists</h4>
                        <img src={`icons/earth-europe-solid.svg`} alt="pfp" width={28} height={28} />
                    </div>
                    <div className={styles.cards}>
                        {europeanArtists.map(artist => (
                            <ArtistCard bgColor={artist.bg} name={artist.name} pfp={artist.pfp} plays={artist.plays} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}