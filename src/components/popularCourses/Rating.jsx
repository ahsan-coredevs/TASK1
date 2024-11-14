import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const roundRating = (rating) => {
  if (rating >= 2.75 && rating <= 3.25) return 3;
  if (rating >= 3.26 && rating <= 3.75) return 3.5;
  if (rating >= 3.76 && rating <= 4.25) return 4;
  if (rating >= 4.26 && rating <= 4.75) return 4.5;
  return Math.round(rating); // For values above 4.75 or less than 2.75
};

const Rating = ({ rating }) => {
  const roundedRating = roundRating(rating);

  const getStars = () => {
    const stars = [];
    let fullStars = Math.floor(roundedRating); // Full stars
    let halfStar = roundedRating % 1 !== 0; // Half star check
    let totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-gold" />);
      } else if (halfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-gold" />);
        halfStar = false; // Only allow one half star
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">User Rating</h2>
      <div className="flex space-x-1">{getStars()}</div>
      <p className="mt-2 text-sm text-gray-300">Rating: {roundedRating} / 5</p>
    </div>
  );
};

export default Rating;
