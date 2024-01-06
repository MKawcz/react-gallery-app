import React from 'react';

const PhotoDetails = ({ photo }) => (
    <div>
            <img src={photo.link} alt={`Zdjęcie ${photo.id}`} />
            <p>Autor: {photo.authorDetails}</p>
            <p>Data dodania: {photo.dateAdded}</p>
            <p>Szczegóły: {photo.otherDetails}</p>
            <p>Średnia ocena: {photo.rating}</p>
    </div>
);

export default PhotoDetails;