import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

import Slider from "react-input-slider";
function Review() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    title: "",
    rating: 0,
    comment: "",
  });
  const [clickedStars, setClickedStars] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [loggedInUserName, setLoggedInUserName] = useState("");
 
  useEffect(() => {
    fetch("/blog/reviews/")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
        setTotalReviews(data.total_reviews);
        setAverageRating(data.average_rating);
      });

    const savedUserName = localStorage.getItem("user_name");
    if (savedUserName) {
      setLoggedInUserName(savedUserName);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleStarClick = (rating) => {
    setClickedStars(rating);
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "/blog/reviewscreate/";

    const modifiedReview = { ...newReview, rating: clickedStars };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews((prevReviews) => [data, ...prevReviews]);
        setNewReview({ title: "", rating: 0, comment: "" });
        setClickedStars(0);

        fetch("/blog/reviews/")
          .then((response) => response.json())
          .then((data) => {
            setTotalReviews(data.total_reviews);
            setAverageRating(data.average_rating);
          });
      });
  };

  const handleLikeClick = (reviewId) => {
    const apiUrl = `/blog/reviews/${reviewId}/like/`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews((prevReviews) =>
          prevReviews.map((review) => {
            if (review.id === reviewId) {
              return {
                ...review,
                likes: data.likes,
                dislikes: data.dislikes,
                likeclicked: true,
              };
            }
            return review;
          })
        );
        fetch("/blog/reviews/")
          .then((response) => response.json())
          .then((data) => {
            setTotalReviews(data.total_reviews);
            setAverageRating(data.average_rating);
          });
      });
    
  };

  const handleDislikeClick = (reviewId) => {
    const apiUrl = `/blog/reviews/${reviewId}/dislike/`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews((prevReviews) =>
          prevReviews.map((review) => {
            if (review.id === reviewId) {
              return {
                ...review,
                likes: data.likes,
                dislikes: data.dislikes,
                dislikeclicked: true,
              };
            }
            return review;
          })
        );

        fetch("/blog/reviews/")
          .then((response) => response.json())
          .then((data) => {
            setTotalReviews(data.total_reviews);
            setAverageRating(data.average_rating);
          });
      });
      
  };

  const [activePage, setActivePage] = useState(1);
  const productPerPage = 4;
  const totalPageCount = Math.ceil(reviews.length / productPerPage);
  const start = (activePage - 1) * productPerPage;
  const end = start + productPerPage;
  const countStars = (rating) => {
    const reviewsWithRating = reviews.filter(
      (review) => review.rating === rating
    );
    return reviewsWithRating.length;
  };

  return (
    <>
      <section className="reviews">
        <h1>Reviews</h1>
        <div className="hotel__review">
          <div className="review_summary">
            <div>
              <h2 className="rating"> {averageRating.toFixed(2)} </h2>

              {[...Array(Math.round(averageRating))].map((_, index) => (
                <span key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="review_star filled big_star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              ))}
              <h2 className="total_reviews"> {totalReviews} reviews</h2>
            </div>

            <div>
              {[5, 4, 3, 2, 1].map((rating) => (
                <div className="star-rating-count" key={rating}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="review_star filled "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="star-rating-label">{rating}</span>
                  <Slider
                    axis="x"
                    x={countStars(rating)}
                    xmin={0}
                    xmax={reviews.length}
                    styles={{
                      thumb: { display: "none" },
                    }}
                  />
                  <span className="star-rating-value">
                    {countStars(rating)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Your Title"
              value={newReview.title}
              onChange={handleInputChange}
            />
            <textarea
              name="comment"
              placeholder="Write your review..."
              value={newReview.comment}
              onChange={handleInputChange}
            ></textarea>
            <div>
              <span className="star-rating">Rating :</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleStarClick(star)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={
                      star <= clickedStars
                        ? "review_star filled"
                        : "review_star"
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              ))}
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </div>
        <div class="straight_line hotel_review_firstline"></div>
        <div>
          {reviews.slice(start, end).map((review) => (
            <div key={review.id}>
              <div className="review_content">
                <div>
                  <h4>{loggedInUserName || "Anonymous"}</h4>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <span key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="review_star filled small_star"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div>
                  <div>
                    <h5>{review.title}</h5>
                    <p>{review.comment}</p>
                  </div>
                  <div>
                    <p style={{ textAlign: "right", marginBottom: "12px" }}>
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                    <div className="like_dislike">
                      <p onClick={() => handleLikeClick(review.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={review.likeclicked ? "like clicked" : "like"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                          />
                        </svg>
                        {review.likes}
                      </p>
                      <p onClick={() => handleDislikeClick(review.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={review.dislikeclicked ? "like clicked" : "like"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                          />
                        </svg>
                        {review.dislikes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="straight_line hotel_review_firstline"></div>
            </div>
          ))}
        </div>
      </section>
      <Pagination
        totalPageCount={totalPageCount}
        setActivePage={setActivePage}
        activePage={activePage}
      />
    </>
  );
}

export default Review;
