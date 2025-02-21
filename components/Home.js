import React from 'react';
import Navbar from './Navbar'; // Make sure this path is correct
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="banner">
        <img src="/assets/BannerBg.jpg" alt="Banner" />
        <div className="banner-text"> 
          <h2>Welcome to GM Home page🎮</h2>
          <p>Enjoy our gaming accessories!</p> 
          <button>
            <a href="/keyboard">Shop now</a> {/* Link to /keyboard */}
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="carousel-section">
        <h2>Explore Our Products</h2>
        <div className="carousel">
          <div className="carousel-items">
            <img src="/assets/aesthetic-anime-character-gaming (1).jpg" alt="Basic Gaming Product" />
            <img src="/assets/aesthetic-anime-character-gaming.jpg" alt="Intermediate Gaming Product" />
            <img src="/assets/anime-character-using-virtual-reality-glasses-metaverse.jpg" alt="Advanced Gaming Product" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
