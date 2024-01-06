import React from 'react';
import { useParams } from 'react-router-dom';
import PhotoDetails from './PhotoDetails';
import StarRating from './StarRating';

const PhotoDetailsWrapper = ({ photos, onRate }) => {
    const params = useParams();
    const photoId = parseInt(params.id, 10);
    const photo = photos.find(p => p.id === photoId);

    return photo ? (
        <div>
            <PhotoDetails photo={photo} />
            <StarRating
                rating={photo.rating}
                setRating={(rating) => onRate(rating, photo.id)}
            />
        </div>
    ) : <div>Zdjęcie nie znalezione</div>;
};

export default PhotoDetailsWrapper;