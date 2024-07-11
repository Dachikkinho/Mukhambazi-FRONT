
import Link from "next/link"
import { ArtistCard } from "./ArtistCard/ArtistCard"
import styles from "./TopArtist.module.scss"

export const TopArtist = () => {

    // Placeholder until the backend is ready.


    const artists = [
        {
            name: "Travis Scott",
            listens: '23',
            bgColor: "linear-gradient(90deg, rgba(227, 62, 159, 0.4) 0%, rgba(77, 37, 174, 0.4) 100%);",
            img: 'travis'
        },
        {
            name: "Imagine Dragons",
            listens: '32',
            bgColor: "linear-gradient(90deg, rgba(227, 62, 159, 0.4) 0%, rgba(77, 37, 174, 0.4) 100%);",
            img: 'imagineDragons'
        },
        {
            name: "TAHA",
            listens: '1',
            bgColor: "linear-gradient(90deg, rgba(227, 62, 159, 0.4) 0%, rgba(77, 37, 174, 0.4) 100%);",
            img: 'taha'
        },
        {
            name: "IV-Dasi",
            listens: '1',
            bgColor: "linear-gradient(90deg, rgba(227, 62, 159, 0.4) 0%, rgba(77, 37, 174, 0.4) 100%);",
            img: 'dasi'
        },
        {
            name: "Travis Scott",
            listens: '23',
            bgColor: "linear-gradient(90deg, rgba(227, 62, 159, 0.4) 0%, rgba(77, 37, 174, 0.4) 100%);",
            img: 'travis'
        },
        {
            name: "Imagine Dragons",
            listens: '32',
            bgColor: "linear-gradient(90deg, rgba(227, 62, 159, 0.4) 0%, rgba(77, 37, 174, 0.4) 100%);",
            img: 'imagineDragons'
        },
    ]


    return (
        <div>
            <div>
                <div className={styles.heading}>
                    <h5>Top Artist</h5>
                    <img src="/icons/topartist.png" alt="topartist-icon" width={36} height={36} />
                </div>
            </div>
            <div className={styles.artistsWrapper}>
                {artists.map(artist => (
                    <Link href={`/albums?artist=${artist.name}`}>
                         <ArtistCard name={artist.name} bgColor={artist.bgColor} img={artist.img} plays={artist.listens} />
                    </Link>
                ))}
            </div>

            <div>
                <div className={styles.heading}>
                    <h5>Top Hits</h5>
                    <img src="/icons/pop.png" alt="tophits-icon" width={36} height={36} />
                </div>
            </div>
            <Link className={styles.artistsWrapper} href={"/album?album=${album.group}"}>
                {artists.map(artist => (
                    <ArtistCard name={artist.name} bgColor={artist.bgColor} img={artist.img} plays={artist.listens} />
                ))}
            </Link>

            <div>
                <div className={styles.heading}>
                    <h5>Top Charts</h5>
                    <img src="/icons/top.png" alt="profile" width={36} height={36} />
                </div>
            </div>
            <Link className={styles.artistsWrapper} href={"/album?album=${album.group}"}>
                {artists.map(artist => (
                    <ArtistCard name={artist.name} bgColor={artist.bgColor} img={artist.img} plays={artist.listens} />
                ))}
            </Link>
        </div>
    )
}