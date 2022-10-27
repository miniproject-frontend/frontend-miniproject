import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { __mainPost } from "../../redux/modules/postSlice";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Categori1Item = () => {
  const mainPost = useSelector((state) => state.postReducer.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("되나?");
    dispatch(__mainPost());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <h1 className="CategoryTitle">홈트레이닝</h1>
        <Link to="/write" className="PostWrite">
          글쓰기
        </Link>
        <div className="PostsWrap">
          {/* 백에서 주는 카테고리명은 SHOULDER */}
          {mainPost.map((main) => {
            if (main.category === "SHOULDER") {
              return (
                <div
                  className="PostBox"
                  key={main.id}
                  onClick={() => {
                    navigate(`view/${main.id}`);
                  }}
                >
                  <img src="img/123456.jpg" alt="" />
                  <h2 className="PostTitle">{main.title}</h2>
                  <div className="PostCont">{main.content}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Categori1Item;
