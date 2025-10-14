import React, { useRef, useState, useEffect } from "react";
import "./navbar2.css";
import filter from "./assets/filter.png";
import downarr from "./assets/down.png";
import thali from "./assets/Thali.jpg";
import vegmeal from "./assets/Vegmeal.jpeg";
import idly from "./assets/idly.jpg";
import biryani from "./assets/Biryani.jpeg";
import dosa from "./assets/dosa.jpg";
import paratha from "./assets/paratha.webp";
import sandwich from "./assets/sandwich.jpg";
import friedrice from "./assets/friedrice.webp";
import dessert from "./assets/dessert.webp";
import icecream from "./assets/icecream.jpg";
import leftarrow from "./assets/leftarrow.png";
import rightarrow from "./assets/rightarrow.png";

const Navbar2 = () => {
  const dishes = [
    { name: "Thali", image: thali },
    { name: "Veg Meal", image: vegmeal },
    { name: "Idly", image: idly },
    { name: "Biryani", image: biryani },
    { name: "Dosa", image: dosa },
    { name: "Paratha", image: paratha },
    { name: "Sandwich", image: sandwich },
    { name: "Fried Rice", image: friedrice },
    { name: "Dessert", image: dessert },
    { name: "Ice Cream", image: icecream },
  ];

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const dishItem = scrollRef.current.querySelector(".dish-item");
    if (!dishItem) return;

    const style = window.getComputedStyle(dishItem);
    const gap = parseInt(style.marginRight) || 30;
    const scrollAmount = dishItem.offsetWidth + gap;

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="navbar2">
      <div className="buttons">
        <button className="filter-btn">
          <img src={filter} alt="Filter" className="filter-icon" />
          Filters
        </button>
        <button className="filter-btn">Pure Veg</button>
        <button className="filter-btn">
          Cuisines
          <img src={downarr} alt="Down Arrow" className="down-icon" />
        </button>
      </div>

      <div className="dishes-container">
        <h2>Inspiration for your first order</h2>

        <div className="scroll-wrapper">
          <button
            className="scroll-btn left"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            style={{
              opacity: canScrollLeft ? 1 : 0.3,
              cursor: canScrollLeft ? "pointer" : "not-allowed",
            }}
          >
            <img src={leftarrow} alt="Left Arrow" className="arrow-icon" />
          </button>

          <div className="dish-list" ref={scrollRef}>
            {dishes.map((dish, index) => (
              <div key={index} className="dish-item">
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <p className="dish-name">{dish.name}</p>
              </div>
            ))}
          </div>

          <button
            className="scroll-btn right"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            style={{
              opacity: canScrollRight ? 1 : 0.3,
              cursor: canScrollRight ? "pointer" : "not-allowed",
            }}
          >
            <img src={rightarrow} alt="Right Arrow" className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
