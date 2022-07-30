import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Like from "../button/Like";
import MySelect from "../select/MySelect";
import Pagination1 from "./Pagination1";
import classes from "./Reviews.module.css";
const adminPanel = {
  admin: 1,
};
const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentReviews, setCurrentReviews] = useState(1);
  const [reviewsPerPage] = useState(10);
  useEffect(() => {
    const loadingReviews = async () => {
      setLoading(true);
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setReviews(res.data);
      setLoading(false);
    };
    loadingReviews();
  }, []);

  const [review, setReview] = useState({ title: "", body: "" });
  const [searchQuary, setSearchQuary] = useState("");
  const addNewReview = (e) => {
    e.preventDefault();

    if (
      review.body.match(/^\w/) !== null &&
      review.title.match(/^\w/) !== null
    ) {
      setReviews([{ ...review, id: Date.now() }, ...reviews]);
      setReview({ title: "", body: "" });
    } else {
      setReview({ title: "", body: "" });
      return alert("Заполните верно!");
    }
  };

  const deleteReview = (review) => {
    setReviews(reviews.filter((item) => item.id !== review.id));
  };

  const [selectedSort, setSelectedSort] = useState("");
  const sortReviews = (sort) => {
    setSelectedSort(sort);
  };
  const sortedReviews = useMemo(() => {
    if (selectedSort) {
      return [...reviews].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else return [...reviews];
  }, [selectedSort, reviews]);

  const sortedAndSearchedReviews = useMemo(() => {
    return sortedReviews.filter((post) =>
      post.body.toLowerCase().includes(searchQuary)
    );
  }, [searchQuary, sortedReviews]);
  const lastIndexReviews = currentReviews * reviewsPerPage;
  const firstIndexReviews = lastIndexReviews - reviewsPerPage;
  let sortedAndSearchedAndSelectedReviews = sortedAndSearchedReviews.slice(
    firstIndexReviews,
    lastIndexReviews
  );

  const paginate = (number) => setCurrentReviews(number);
  return (
    <div className={classes.form}>
      {!props.user ? null : (
        <form>
          <input
            placeholder="*Введите ваше имя"
            value={review.title}
            onChange={(e) => setReview({ ...review, title: e.target.value })}
          />
          <input
            placeholder="*Ваш отзыв"
            value={review.body}
            onChange={(e) => setReview({ ...review, body: e.target.value })}
          />
          <button onClick={addNewReview}>Отправить отзыв</button>

          <div>* Отмечены поля обязательные для заполнения</div>
        </form>
      )}
      <hr />
      <MySelect
        options={[
          { value: "title", name: "По имени" },
          { value: "body", name: "По описанию" },
        ]}
        onChange={sortReviews}
        value={selectedSort}
        defaultValue={"Сортировать"}
      />
      <input
        placeholder="Искать отзыв..."
        value={searchQuary}
        onChange={(e) => setSearchQuary(e.target.value)}
      ></input>
      <Pagination1
        reviewsPerPage={reviewsPerPage}
        paginate={paginate}
        totalReviews={reviews.length}
      />
      <div className={classes.container}>
        {sortedAndSearchedAndSelectedReviews.length ? (
          sortedAndSearchedAndSelectedReviews.map((item) => (
            <div className={classes.reviews} key={item.id} id={item.id}>
              {adminPanel.admin ? (
                <button
                  className={classes.deleteBtn}
                  onClick={() => deleteReview(item)}
                >
                  Удалить отзыв
                </button>
              ) : null}
              <div>
                <img
                  className={classes.reviewerAvatar}
                  src="https://www.hostobzor.ru/xo/images/defaultUserBig.png"
                  alt="avatar"
                />
                {item.title}
              </div>
              <hr />
              <div className={classes.reviewBody}>{item.body}</div>
              <div className={classes.comments}></div>
              <div>
                <Like name={"Like"} />
              </div>
            </div>
          ))
        ) : (
          <div className={classes.noReview}>"Отзывов нет!"</div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
