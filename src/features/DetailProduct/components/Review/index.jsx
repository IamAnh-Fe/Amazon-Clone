import React, { useState} from 'react';
import StarRatings from "react-star-ratings";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { reviewDetail } from '~/apis/detailApi';

import io from "socket.io-client";
const socket = io.connect("http://localhost:5001");
const Review = ({ product }) => {
  const [star, setStar] = useState(0)
  const [showRate, setShowRate] = useState(false)
  const [showEvaluate, setShowEvalute] = useState(false)
  const [evaluate, setEvaluate] = useState('')
  
  const { id } = useParams();
const reviews = product.reviews || []
const countReview = reviews.length
let average = reviews.reduce((a,c) => a + c.star, 0) / countReview
let averageRate = average.toFixed(1);
    const fiveStar = Math.round(reviews.filter(x => x.star === 5).length / countReview * 100)
    const fourStar = Math.round(reviews.filter(x => x.star === 4).length / countReview * 100)
    const threeStar = Math.round(reviews.filter(x => x.star === 3).length / countReview * 100)
    const twoStar = Math.round(reviews.filter(x => x.star === 2).length / countReview * 100)
    const oneStar = Math.round(reviews.filter(x => x.star === 1).length / countReview * 100)  
   
    const user = useSelector((state) => state.auth.login.currentUser)
   const username = user.username
   console.log("user",username)
  const onSubmit = async (e) => {
    const review = {
          id,
            name: username,
            star: star,
            comment: evaluate,
    }
    
    // reviewDetail( id, review )
      socket.emit("createReview", review);
  
        setEvaluate('')
        setShowEvalute(false)
        setShowRate(false)
    }
   
    const setRate = (value) => {
        setStar(value)
        setShowEvalute(true)
    }
  return (
    <div className='review'>
         <h3>Customer reviews</h3> 
         <h4>{averageRate} out of 5</h4>
         <p>{countReview} global ratings</p>
         <div className='review-list'>
     <div className='review-histogram'>
         <div className='review-progress'>
            <span>5 star </span> 
        <progress className="review-file" value={fiveStar} max="100"></progress>
            <span>{fiveStar}%</span>
        </div>
          <div className='review-progress'>
            <span>4 star </span> 
        <progress className="review-file" value={fourStar} max="100"></progress>
            <span>{fourStar}%</span>
        </div>
          <div className='review-progress'>
            <span>3 star </span> 
        <progress className="review-file" value={threeStar} max="100"></progress>
            <span>{threeStar}%</span>
        </div>
          <div className='review-progress'>
            <span>2 star </span> 
        <progress className="review-file" value={twoStar} max="100"></progress>
            <span>{twoStar}%</span>
        </div>
          <div className='review-progress'>
            <span>1 star </span> 
        <progress className="review-file" value={oneStar} max="100"></progress>
            <span>{oneStar}%</span>
        </div>
        <span className='review-write'>Write a review</span>
    </div>
    <div className='review-rate'>
      <div>
    <h3>Vui lòng chọn đánh giá </h3>
        <StarRatings 
        changeRating={setRate}
         rating={star}
      starRatedColor="#FFA41C"
      starDimension="18"
      starSpacing="3"
      numberOfStars={5}
      name="rating"
        />
      </div>
      { showEvaluate ? (
      <div>
     <textarea className='review-textarea' placeholder='Write your review' onChange={(e) => setEvaluate(e.target.value)} />
    <button className='review-send' type='submit' onClick={() => onSubmit()}>Send </button>

      </div> 
      ) : ''
      }
        </div>
         </div>
      <div className="review-comment">
       
        </div>
    </div>
  )
}

export default Review