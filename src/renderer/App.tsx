import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Hello = () => {
  let images = [
    {
      original: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      thumbnail: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    },
    {
      original: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
      thumbnail: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    },
  ];

  return (
    <div>
      <div className='comp1' />
      <ImageGallery
        thumbnailPosition='bottom'
        useBrowserFullscreen={false}
        showPlayButton={false}
        showNav={true}
        showIndex={true}
        items={images}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hello />} />
      </Routes>
    </Router>
  );
}
