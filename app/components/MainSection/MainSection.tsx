import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./MainSection.module.scss"
import { Search } from "../Header/Search/Search";
import { TopArtist } from "./TopArtist/TopArtist";


export const MainSection = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <Search placeholder={"Enter keywords to search"} icon={"search"} width={24} height={24} />
            </div>
            <div className={styles.headingCont}>
                <h2 className={styles.heading}>Home</h2>
                <img src={`icons/home-icon.svg`} alt="pfp" width={28} height={28} />
            </div>
                <div className={styles.wrapper}>
                    <div>
                        <div className={styles.carouselHeading}>
                            <h4>Popular of the week</h4>
                            <img src="/icons/popular.png" alt="popular-icon" width={36} height={36} />
                        </div>

                        <Carousel autoPlay infiniteLoop showArrows={false} useKeyboardArrows  showThumbs={false} className={styles.carousel} showStatus={false}>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                        </Carousel>
                    </div>
                
                    <div>
                    <div className={styles.carouselHeading}>
                            <h4>Top Albums</h4>
                            <img src="/icons/topalbum.png" alt="topalbum-icon" width={36} height={36} />
                        </div>
                        <Carousel autoPlay infiniteLoop showArrows={false} useKeyboardArrows showThumbs={false} className={styles.carousel} showStatus={false}>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                            <div>
                                <img src="images/songCovers/eke.png" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            <TopArtist />
        </div>
    )
}
