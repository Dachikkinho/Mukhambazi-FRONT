import { CarouselSection } from "../CarouselSection/CarouselSection";
import { Search } from "../Header/Search/Search";
import { TopArtist } from "./TopArtist/TopArtist";
import styles from "./MainSection.module.scss";

const popularImages = [
    "images/songCovers/eke.png",
    "images/songCovers/eke.png",
    "images/songCovers/eke.png",
    "images/songCovers/eke.png",
    "images/songCovers/eke.png",
];

const topAlbumImages = [
    "images/songCovers/eke.png",
    "images/songCovers/eke.png",
    "images/songCovers/eke.png",
    "images/songCovers/eke.png",
    "images/songCovers/eke.png",
];

export const MainSection = () => {
    return (
        <div className={styles.mainContainer}>
             <div className={styles.topContainer}>
                <Search placeholder={"Enter keywords to search"} icon={"search"} width={24} height={24} />
            </div>
            <div className={styles.headingCont}>
            </div>
            <div className={styles.wrapper}>
                <CarouselSection heading="Popular of the week" icon="/icons/popular.png" images={popularImages} />
                <CarouselSection heading="Top Albums" icon="/icons/topalbum.png" images={topAlbumImages} />
            </div>
            <TopArtist />
        </div>
    );
};
