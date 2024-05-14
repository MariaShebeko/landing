import React, { useState, useEffect } from "react";
import image1 from "./images/image_01.jpeg";
import image2 from "./images/image_02.jpeg";
import image3 from "./images/image_03.jpeg";
import image4 from "./images/image_04.jpeg";
import image5 from "./images/image_05.jpeg";
import image6 from "./images/image_06.jpeg";
import image7 from "./images/image_07.jpeg";
import image8 from "./images/image_08.jpeg";
import image9 from "./images/image_09.jpeg";
import backImage from "./images/background.jpeg";
import image from "./images/Image.png";
import "./App.css";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        // Adjust the scroll position as needed
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header>
        <img src={image} width={100} height={50} />
        <nav>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section
        id="hero"
        style={{
          backgroundImage: `url(${backImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "25% 75%",
        }}
      >
        <h1>Projektowanie z HoloLens</h1>
        <p>Zobaczyć swoje przestrzenie w zupełnie nowy sposób</p>
        <a href="#features" className="btn">
          Learn More
        </a>
      </section>

      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>
            Wyobraź sobie, że możesz wirtualnie przechodzić przez swoje nowe
            mieszkanie, dostosowując kolory ścian, meble i oświetlenie –
            wszystko to dzięki technologii HoloLens!
          </li>
          <li>
            Dzięki temu narzędziu możemy w czasie rzeczywistym prezentować Ci
            różne aranżacje, zmieniając detale na bieżąco. To idealne
            rozwiązanie dla osób, które chcą mieć pełną kontrolę nad wyglądem
            swojego wnętrza.
          </li>
          <li>
            Dzięki goglom HoloLens możemy stworzyć wirtualny model Twojego
            przyszłego mieszkania, biura lub lokalu usługowego. To nie tylko
            oszczędność czasu, ale także gwarancja, że efekt końcowy spełni
            Twoje oczekiwania.
          </li>
        </ul>
      </section>

      <section id="gallery">
        <h2>Gallery</h2>
        <div className="gallery-container">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
          <img src={image4} alt="Image 4" />
          <img src={image5} alt="Image 5" />
          <img src={image6} alt="Image 6" />
          <img src={image7} alt="Image 7" />
          <img src={image8} alt="Image 8" />
          <img src={image9} alt="Image 9" />
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Contact information goes here...</p>
      </section>

      <footer>
        <p>&copy; 2024 New Design. All rights reserved.</p>
      </footer>

      {showScroll && (
        <button className="scroll-to-top" onClick={scrollTop}>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
