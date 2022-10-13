import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
const Rating = ({ value }) => {
    return (
        <StarRatings
            rating={value}
            starRatedColor="#FFA41C"
            starDimension="18"
            starSpacing="3"
            numberOfStars={5}
            name="rating"
        />
    );
};

export default Rating;
