import React from 'react';

const StarRating = ({ value = 0, onChange, readonly = false }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-2xl cursor-pointer ${
            star <= value ? 'text-orange-400' : 'text-gray-400'
          }`}
          onClick={() => !readonly && onChange && onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
