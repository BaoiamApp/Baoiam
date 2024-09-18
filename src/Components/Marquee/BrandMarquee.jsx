import React, { useState, useRef } from 'react';
import './marquee.css'

const BrandMarquee = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const marqueeRef = useRef(null);

  const brands = [
    { name: 'Brand 1', logo: 'https://via.placeholder.com/50' },
    { name: 'Brand 2', logo: 'https://via.placeholder.com/50' },
    { name: 'Brand 2', logo: 'https://via.placeholder.com/50' },
    { name: 'Brand 2', logo: 'https://via.placeholder.com/50' },
    { name: 'Brand 2', logo: 'https://via.placeholder.com/50' },
    { name: 'Brand 2', logo: 'https://via.placeholder.com/50' },
    { name: 'Brand 3', logo: 'https://via.placeholder.com/50' },
    { name: 'Brand 4', logo: 'https://via.placeholder.com/50' },
    // Add more logos as needed
  ];

  // When mouse button is pressed, enable dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - marqueeRef.current.offsetLeft); // Set the initial X position
    setScrollLeft(marqueeRef.current.scrollLeft); // Save the initial scroll position
  };

  // Disable dragging when mouse button is released
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle the dragging movement
  const handleMouseMove = (e) => {
      console.log("dragging")
    if (!isDragging) return; // Only run if we are dragging
    e.preventDefault(); // Prevent any default behavior while dragging
    const x = e.pageX - marqueeRef.current.offsetLeft; // Calculate the new X position
    const walk = (x - startX) * 2; // Multiply by 2 to increase the drag speed
    marqueeRef.current.scrollLeft = scrollLeft - walk; // Adjust scroll position
  };

  return (
    <div
      className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing"
      ref={marqueeRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp} // Stop dragging when leaving the container
    >
      <div className="marquee-content flex items-center gap-8 select-none">
        {brands.map((brand, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 w-28 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
