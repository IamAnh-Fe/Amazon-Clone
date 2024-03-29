import React, { useState, useEffect, useRef } from 'react';
import StarRatings from 'react-star-ratings';
import Loading from '~/components/Loading';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import commentApi from '~/apis/commentApi';
import RepComment from './repComment';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const socket = io.connect('http://localhost:5001');

const Review = () => {
    const navigate = useNavigate();
    const [star, setStar] = useState(0);
    const [showRate, setShowRate] = useState(false);
    const [showEvaluate, setShowEvalute] = useState(false);
    const [evaluate, setEvaluate] = useState('');
    const [comment, setComment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const pageEnd = useRef();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchReview = async () => {
            try {
                const res = await commentApi.getComment(id, page);
                console.log('Fetch comment successfully: ', res);
                setComment(res.comments);
            } catch (error) {
                console.log('Failed to fetch comment list: ', error);
            }
            setLoading(false);
        };
        fetchReview();
    }, [id, page]);
    // Realtime
    // Join room
    useEffect(() => {

        if (socket) {
            socket.emit('joinRoom', id);
        }
    }, [id]);

    useEffect(() => {
        if (socket) {
            socket.on('sendCommentToClient', (msg) => {
                setComment([msg, ...comment]);
            });

            return () => socket.off('sendCommentToClient');
        }
    }, []);

    // infiniti scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            },
            {
                threshold: 0.1,
            },
        );

        observer.observe(pageEnd.current);
    }, []);

    // Reply Comments
    useEffect(() => {
        if (socket) {
            socket.on('sendReplyCommentToClient', (msg) => {
                const newArr = [...comment];

                newArr.forEach((cm) => {
                    if (cm.id === msg.id) {
                        cm.reply = msg.reply;
                    }
                });

                setComment(newArr);
            });

            return () => socket.off('sendReplyCommentToClient');
        }
    }, [comment]);
    const reviews = comment || [];
    const countReview = reviews.length;
    let average = reviews.reduce((a, c) => a + c.star, 0) / countReview;
    let averageRate = average.toFixed(1);

    const fiveStar = Math.round((reviews.filter((x) => x.star === 5).length / countReview) * 100);
    const fourStar = Math.round((reviews.filter((x) => x.star === 4).length / countReview) * 100);
    const threeStar = Math.round((reviews.filter((x) => x.star === 3).length / countReview) * 100);
    const twoStar = Math.round((reviews.filter((x) => x.star === 2).length / countReview) * 100);
    const oneStar = Math.round((reviews.filter((x) => x.star === 1).length / countReview) * 100);

    const user = useSelector((state) => state.auth.login?.currentUser);
    const username = user?.username;
    const onSubmit = async (e) => {
        const review = {
            id,
            name: username,
            star: star,
            comment: evaluate,
        };

        // reviewDetail( id, review )
        socket.emit('createReview', review);
        setEvaluate('');
        setShowEvalute(false);
        setShowRate(false);
    };

    const setRate = (value) => {
        setStar(value);
        setShowEvalute(true);
    };
    const handleShowRate = () => {
        if (!username) {
            toast.error('You need to login to rate');
        } else if (username) {
            setShowRate(!showRate);
        }
    };
    return (
        <div className=" review">
            <div className="review-list row">
                <div className="review-histogram col l-4 m-5 c-12">
                    <h3 className="review-title text-b">Customer reviews</h3>
                    <h4 className="text-b">{averageRate === NaN  ? 0 : averageRate} out of 5</h4>
                    <p className="text-b">{countReview} global ratings</p>
                    <div className="review-progress">
                        <span>5 star </span>
                        <progress className="review-file" value={fiveStar} max="100"></progress>
                        <span>{Number.isNaN(fiveStar) ? 0 : fiveStar}%</span>
                    </div>
                    <div className="review-progress">
                        <span>4 star </span>
                        <progress className="review-file" value={fourStar} max="100"></progress>
                        <span>{Number.isNaN(fourStar) ? 0 : fourStar}%</span>
                    </div>
                    <div className="review-progress">
                        <span>3 star </span>
                        <progress className="review-file" value={threeStar} max="100"></progress>
                        <span>{Number.isNaN(threeStar) ? 0 : threeStar}%</span>
                    </div>
                    <div className="review-progress">
                        <span>2 star </span>
                        <progress className="review-file" value={twoStar} max="100"></progress>
                        <span>{Number.isNaN(twoStar) ? 0 : twoStar}%</span>
                    </div>
                    <div className="review-progress">
                        <span>1 star </span>
                        <progress className="review-file" value={oneStar} max="100"></progress>
                        <span>{Number.isNaN(oneStar) ? 0 : oneStar}%</span>
                    </div>
                    <span className="review-write" onClick={handleShowRate}>
                        Write a review
                    </span>
                </div>
                <div className="review-rate col l-8 m-7 c-12">
                    {showRate && (
                        <div>
                            <h3>Please choose star rating</h3>
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
                    )}
                    {showEvaluate ? (
                        <div>
                            <textarea
                                className="review-textarea"
                                placeholder="Write your review"
                                onChange={(e) => setEvaluate(e.target.value)}
                            />
                            <button className="review-send" type="submit" onClick={() => onSubmit()}>
                                Send{' '}
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            {comment.map((comment) => (
                <div className="col review-comment">
                    <RepComment key={comment.id} comment={comment} socket={socket} />
                </div>
            ))}
            {loading && <Loading />}
            <button ref={pageEnd} style={{ opacity: 0 }}>
                Load more
            </button>
        </div>
    );
};

export default Review;
