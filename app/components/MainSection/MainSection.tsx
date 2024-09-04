import styles from './MainSection.module.scss';
import CarouselSection from '../CarouselSection/CarouselSection';
import Search from '../Header/Search/Search';
import TopArtist from './TopArtist/TopArtist';
import PrivateRoute from '../ProtectedRoute/PrivateRoute';

const popularImages = [
    'images/songCovers/mega.png',
    'images/songCovers/metalica.png',
    'images/songCovers/bob.png',
    'images/songCovers/notarius.png',
    'images/songCovers/niaz.jpg',
    'images/songCovers/beatles.png',
    'images/songCovers/king.jpg',
    'images/songCovers/roberta.png',
    'images/songCovers/gogi.jpg',
    'images/songCovers/jansug.jpg',
    'images/songCovers/funkadelic.png',
    'images/songCovers/barry.jpg',
    'images/songCovers/ray.jpg',
    'images/songCovers/cyndi.png',
    'images/songCovers/chakrulos.jpg',
    'images/songCovers/carole.png',
    'images/songCovers/bilie.png',
    'images/songCovers/smash.png',
    'images/songCovers/missy.png',
    'images/songCovers/elton.png',
    'images/songCovers/papas.png',
    'images/songCovers/loretta.png',
    'images/songCovers/kendrick.png',
    'images/songCovers/lady.png',
    'images/songCovers/madona.png',
    'images/songCovers/joni.png',
];

const topAlbumImages = [
    'images/songCovers/thebeatles.jpg',
    'images/songCovers/nevermind.png',
    'images/songCovers/blondie.png',
    'images/songCovers/pink.jpg',
    'images/songCovers/elvis.png',
    'images/songCovers/kate.png',
    'images/songCovers/lemonade.png',
    'images/songCovers/ariana.png',
    'images/songCovers/asap.png',
    'images/songCovers/harris.png',
    'images/songCovers/nodoubt.png',
    'images/songCovers/beyonce.png',
    'images/songCovers/lana.png',
    'images/songCovers/betty.png',
    'images/songCovers/kenny.png',
    'images/songCovers/nirvana.png',
];

const MainSection = () => {
    return (
        <PrivateRoute>
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
                        interval={4000}
                    />
                    <CarouselSection
                        heading="Top Albums"
                        icon="/icons/topalbum.png"
                        images={topAlbumImages}
                        interval={4000}
                    />
                </div>
                <TopArtist />
            </div>
        </PrivateRoute>
    );
};

export default MainSection;
