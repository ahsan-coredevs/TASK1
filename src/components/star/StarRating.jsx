import React, { useState } from 'react';

const StarRating = ({ setStarValue }) => {
  const [hoverValue, setHoverValue] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const stars = Array(5).fill(0);

  // Get full, half, or empty stars depending on rating value
  const getStarClass = (index) => {
    if (ratingValue >= index + 1) {
      return 'text-yellow-400'; // Full star
    } else if (ratingValue >= index + 0.5) {
      return 'text-yellow-400 half-star'; // Half star
    } else {
      return 'text-gray-300'; // Empty star
    }
  };

  const handleMouseOver = (index) => {
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  const handleClick = (index, fraction) => {
    const newRating = index + fraction;
    setRatingValue(newRating);
    setStarValue(newRating);  // Pass the fractional value to the parent component
  };

  return (
    <div>
      <div className="flex items-center">
        {stars.map((_, index) => (
          <div key={index} className="relative cursor-pointer">
            {/* Full star or empty star on left side */}
            <i
              className={`absolute text-4xl transition-colors duration-200 ${getStarClass(index)}`}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index, 1)}
            >
              ★
            </i>

            {/* Half star on right side */}
            <i
              className={`text-4xl transition-colors duration-200 ${
                hoverValue > index || ratingValue > index + 0.5 ? 'text-yellow-400' : 'text-gray-300'
              }`}
              style={{ clipPath: 'inset(0 0 0 50%)' }} // Clip for half star
              onMouseOver={() => handleMouseOver(index + 0.5)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index, 0.5)}
            >
              ★
            </i>
          </div>
        ))}
      </div>
      <div>
        <p className="pt-4 text-lg font-medium">Your rating: {ratingValue.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default StarRating;
