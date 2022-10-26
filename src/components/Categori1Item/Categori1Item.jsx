import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import { __mainPost } from "../../redux/modules/postSlice";
import { useEffect } from "react";

const Categori1Item = () => {
  const mainPost = useSelector((state) => state.postReducer.list);
  const dispatch = useDispatch();
  // console.log(mainPost);

  useEffect(() => {
    // console.log("되나?");
    dispatch(__mainPost());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <h1 className="CategoryTitle">카테고리1번</h1>
        <Link to="/write" className="PostWrite">
          글쓰기
        </Link>
        <Link to={`/view/${mainPost.id}`}>
          <div className="PostsWrap">
            {mainPost.map((main) => {
              if (main.category === "SHOULDER") {
                return (
                  <div className="PostBox" key={main.id}>
                    <img src="img/123456.jpg" alt="" />
                    <h2 className="PostTitle">{main.title}</h2>
                    <div className="PostCont">{main.content}</div>
                  </div>
                );
              }
            })}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Categori1Item;
