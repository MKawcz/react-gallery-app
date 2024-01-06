import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const NavigatePhotos = ({ photos, onRate }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const goToNextPhoto = () => {
        setCurrentPhotoIndex(prev => prev < photos.length - 1 ? prev + 1 : prev);
    };

    const goToPreviousPhoto = () => {
        setCurrentPhotoIndex(prev => prev > 0 ? prev - 1 : prev);
    };

    return (
        <div>

            <Link to={`/photo/${photos[currentPhotoIndex]?.id}`}>
                <img
                    src={photos[currentPhotoIndex]?.link}
                    alt={`Zdjęcie ${photos[currentPhotoIndex]?.id}`}
                    style={{ width: '250px', height: '250px', objectFit: 'cover' }} // Styl dla miniatury
                />
            </Link>
            <StarRating
                rating={photos[currentPhotoIndex]?.rating}
                setRating={(rating) => onRate(rating, photos[currentPhotoIndex]?.id)}
            />
            {currentPhotoIndex > 0 && <button onClick={goToPreviousPhoto}>&lt;</button>}
            {currentPhotoIndex < photos.length - 1 && <button onClick={goToNextPhoto}>&gt;</button>}
        </div>
    );
};

export default NavigatePhotos;
