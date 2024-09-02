import { useState, useEffect } from 'react';
import styles from './CarouselSection.module.scss';
import { CarouselSectionProps } from '@/app/interfaces/CarouselSectionProps.interface';

const CarouselSection = ({
    heading,
    icon,
    images,
    interval = 4000,
}: CarouselSectionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const photoInterval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1,
            );
        }, interval);

        return () => clearInterval(photoInterval);
    }, [images.length, interval]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    return (
        <div>
            <div className={styles.carouselHeading}>
                <h4>{heading}</h4>
                <img
                    src={icon}
                    alt={`${heading}-icon`}
                    width={36}
                    height={36}
                    draggable={false}
                />
            </div>
            <div className={styles.carousel}>
                <button className={styles.arrow} onClick={handlePrev}>
                    &#10094;
                </button>
                <div
                    className={styles.imageWrapper}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className={styles.slide}>
                            <img
                                className={styles.img}
                                src={image}
                                alt={`carousel-image-${index}`}
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
                <button className={styles.arrow} onClick={handleNext}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default CarouselSection;
