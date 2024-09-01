import styles from './MainSection.module.scss';
import CarouselSection from '../CarouselSection/CarouselSection';
import Search from '../Header/Search/Search';
import TopArtist from './TopArtist/TopArtist';

const popularImages = [
    'images/songCovers/elvis.png',
    'images/songCovers/pink.jpg',
    'images/songCovers/thebeatles.jpg',
    'images/songCovers/elvis.png',
    'images/songCovers/pink.jpg',
];

const topAlbumImages = [
    'images/songCovers/thebeatles.jpg',
    'images/songCovers/pink.jpg',
    'images/songCovers/elvis.png',
    'images/songCovers/pink.jpg',
    'images/songCovers/elvis.png',
];

const MainSection = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <Search
                    placeholder={'Enter keywords to search'}
                    icon={'search'}
                    width={24}
                    height={24}
                    
                />
            </div>
            <div className={styles.wrapper}>
                <CarouselSection
                    heading="Popular of the week"
                    icon="/icons/popular.png"
                    images={popularImages}
                    interval={1500}
                />
                <CarouselSection
                    heading="Top Albums"
                    icon="/icons/topalbum.png"
                    images={topAlbumImages}
                    interval={1500}
                />
            </div>
            <TopArtist />
        </div>
    );
};

export default MainSection;
