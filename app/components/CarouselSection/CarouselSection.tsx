import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './CarouselSection.module.scss';

interface CarouselSectionProps {
    heading: string;
    icon: string;
    images: string[];
}

export const CarouselSection = ({
    heading,
    icon,
    images,
}: CarouselSectionProps) => {
    return (
        <div>
            <div className={styles.carouselHeading}>
                <h4>{heading}</h4>
                <img
                    src={icon}
                    alt={`${heading}-icon`}
                    width={36}
                    height={36}
                />
            </div>
            <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                useKeyboardArrows
                showThumbs={false}
                className={styles.carousel}
                showStatus={false}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            className={styles.img}
                            src={image}
                            alt={`carousel-image-${index}`}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
