import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const work = () => {
    const positionStyles = [
        'transform: translateX(-410%) scale(0.9);',
        'transform: translateX(-310%) scale(0.9);',
        'transform: translateX(-210%) scale(0.9);',
        'transform: translateX(-110%) scale(0.9);',
        'transform: translateX(0%);',
        'transform: translateX(110%) scale(0.9);',
        'transform: translateX(210%) scale(0.9);',
        'transform: translateX(310%) scale(0.9);',
        'transform: translateX(410%) scale(0.9);',
      ];
    
      const [currentItemIndex, setCurrentItemIndex] = useState(2);
      const [itemsAreMoving, setItemsAreMoving] = useState(true);
    
      const workItems = [
        {
          id: 0,
          name: "Join",
          description: "Group magment tool to optimize workflows",
          image: "/1.png",
          tags: ["javascript", "backend", "html", "css"],

          alt: "Group management tool to optimize workflows portfolio project",
        },
        {
          id: 1,
          name: "Pokedex",
          description: "A collection and description of all 898 Pokémon",
          image: "/2.png",
          tags: ["javascript", "api", "html", "css"],

          alt: "pokedex design detailed design portfolio project",
        },
        {
          id: 2,
          name: "Sharkie",
          description: "JavaScript based jump-and-run game",
          image: "/3.png",
          tags: ["javascript", "html", "css"],

          alt: "javascript based jump-and-run game portfolio project",
        },
        {
          id: 3,
          name: "Portfolio 2022",
          description:
            "My portfolio website, you're probably looking at right now.",
            image: "/4.png",
            tags: ["webgl", "javascript", "html", "css"],
          twitter: "https://twitter.com/DavidHckh",
          alt: "david heckhoff portfolio project 2022 threejs blender 3d design",
          bannerIcons: [
            { src: "images/cssda-icon.png", alt: "cssda icon site of the day" },
          ],
          twitter: "https://twitter.com/DavidHckh",
        },
        {
          id: 4,
          name: "Jelly Battle",
          description:
            "Play as Jelly and fight against three other Jellys in a multiplayer free-for-all game",
            image: "/5.png",
            tags: ["webgl", "javascript", "socketio", "html", "css"],
          twitter: "https://twitter.com/DavidHckh",
          alt: "work in progress portfolio project jelly battle strategy game flash multiplayer",
        },
      ];
      useEffect(() => {
        addButtonEventListeners();
        initSwipes();
        updatePositions(true);
      }, [currentItemIndex]);
    
      const addButtonEventListeners = () => {
        const backButton = document.getElementById('work-back-button');
        const nextButton = document.getElementById('work-next-button');
    
        backButton.addEventListener('click', () => {
          moveBack();
        });
    
        nextButton.addEventListener('click', () => {
          moveForward();
        });
      };
    
      const initSwipes = () => {
        // Add swipe gesture initialization logic here
      };
    
     
    const moveBack = () => {
      if (currentItemIndex > 0 && !itemsAreMoving) {
          setCurrentItemIndex(currentItemIndex - 1);
      }
  };

  const moveForward = () => {
      if (currentItemIndex < workItems.length - 1 && !itemsAreMoving) {
          setCurrentItemIndex(currentItemIndex + 1);
      }
  };
      const onArrowClick = () => {
        window.addEventListener('keyup', (event) => {
          if (scrollAllowed()) {
            if (event.keyCode === 39) {
              moveForward();
            } else if (event.keyCode === 37) {
              moveBack();
            }
          }
        });
      };
    
      const scrollAllowed = () => {
        // Add scrollAllowed logic here
        return true; // For demonstration purposes
      };
    
      const updatePositions = (initial = false) => {
        if (!itemsAreMoving || initial) {
            updateNavigation();
            setItemsAreMoving(true);
            setTimeout(() => setItemsAreMoving(false), 500); // Adjust timing as needed
        }
    };
    
      const updateNavigation = () => {
        // Add logic for updating navigation button states here
      };
    
      const handleNavigation = (index) => {
        setCurrentItemIndex(index);
        updatePositions();
      };
      const isLastItem = currentItemIndex === workItems.length - 1;
      const isFirstItem = currentItemIndex === 0;

      return (
        <section id="work-section">
        <div id="work-background"></div>
  
        <div id="work-content" className="content-width column">
          <div className="column" id="work-header-container">
            <div className="section-subheader-container">
              <hr />
              <h5 className='say-hello'>Our Courses</h5>
            </div>
            <h2 className="section-header-container">Learn Before <br/> Investing / Trading </h2>
          </div>
  
          <div id="work-render-container">
            {workItems.map((item, index) => (
              <div
                key={item.id}
                className={`work-item-container column ${
                  index === currentItemIndex ? 'current-item' : ''
                }`}
                style={{
                  transform: `translateX(${(currentItemIndex - index) * 110}%) scale(${
                    index === currentItemIndex ? 1 : 0.9
                  })`,
                  opacity: index === currentItemIndex ? 1 : 0.5,
                  transition: 'transform 0.5s, opacity 0.5s',
                }}
              >
                <img
                  className="work-item-image"
                  src={item.image}
                  alt={item.alt}
                  height="300"
                  width="334"
                />
                <div className="work-item-content-container">
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                </div>
                <div className="work-item-button-container row">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-item-button work-item-github-button orange-hover"
                    >
                      GitHub
                    </a>
                  )}
                  {item.liveview && (
                    <a
                      href={item.liveview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-item-button work-item-liveview-button orange-hover"
                    >
                      Live View
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
  
          <div id="work-navigation-container" className="row center">
            <div
              id="work-back-button"
              onClick={() => handleNavigation(currentItemIndex + 1)}
              className={`work-navigation-button ${
                currentItemIndex === workItems.length - 1 ? 'work-disabled-navigation-button' : ''
              } orange-hover`}
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="28"
              >
                <path fill="white" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
            </div>
            <div
              id="work-next-button"
              onClick={() => handleNavigation(currentItemIndex - 1)}
              className={`work-navigation-button ${
                currentItemIndex === 0 ? 'work-disabled-navigation-button' : ''
              } orange-hover`}
            >
               <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="28" width="28">
              <path fill="white" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
            </div>
          </div>
        </div>
      </section>
      );
    };
    

export default work