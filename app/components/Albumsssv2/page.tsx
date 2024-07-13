'use client'
import AlbumSongs from "./Songs/page";
import styles from "./page.module.scss"


export const albumsPage = () => {

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.SearchBar}>
                        
                    </div>
                    <h2 className={styles.heading}></h2>
                </div>
            <AlbumSongs />
            </div>


        </>

    )
}

export default albumsPage;