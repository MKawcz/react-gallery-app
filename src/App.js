import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigatePhotos from './NavigatePhotos';
import PhotoDetailsWrapper from './PhotoDetailsWrapper';
import jsonData from './photos.json';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(jsonData.photos);
  }, []);

  const handleRating = (newRating, photoId) => {
    const updatedPhotos = photos.map(photo =>
        photo.id === photoId ? { ...photo, rating: newRating } : photo
    );
    setPhotos(updatedPhotos);
  };

  return (
      <Router>
        <Routes>
          <Route path="/" element={<NavigatePhotos photos={photos} onRate={handleRating} />} />
          <Route path="/photo/:id" element={<PhotoDetailsWrapper photos={photos} onRate={handleRating} />} />
        </Routes>
      </Router>
  );
}

export default App;