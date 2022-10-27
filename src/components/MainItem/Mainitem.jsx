import { React, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __mainPost } from "../../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";

const Mainitem = () => {
  const mainPost = useSelector((state) => state.postReducer.list);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__mainPost());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="CateWrap">

        <h1 className="CateName">홈트레이닝</h1>
        {/* 백에서 주는 카테고리명은 SHOULDER */}
        {mainPost.map((main) => {
          if (main.category === "1") {
            return (
              <div
                className="CateCard"
                key={main.id}
                onClick={() => {
                  navigate(`view/${main.id}`);
                }}
              >
                <img src="img/123456.jpg" alt="" />
                <div className="CardTitle">{main.title}</div>
                <div className="CardCont">{main.content}</div>

              </div>
            );
          } else {
            return null;
          }
        })}

        <div className="ViewMore">
          <Link to={"/category1"}>더보기</Link>
        </div>
      </div>
      <div className="CateWrap">
        <h1 className="CateName">운동게시판</h1>
        {/* 백에서 주는 카테고리명은 BACK */}
        {mainPost.map((main) => {
          if (main.category === "2") {
            return (
              <div
                className="CateCard"
                key={main.id}
                onClick={() => {
                  navigate(`view/${main.id}`);
                }}
              >
                <img src="img/9542.jpg" alt="" />
                <div className="CardTitle">{main.title}</div>
                <div className="CardCont">{main.content}</div>
              </div>
            );
          } else {
            return null;
          }
        })}

        <div className="ViewMore">
          <Link to={"/category2"}>더보기</Link>
        </div>
      </div>
    </div>
  );
};

export default Mainitem;
