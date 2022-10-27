import { React, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __mainPost } from "../../redux/modules/postSlice";

const Mainitem = () => {
  const mainPost = useSelector((state) => state.postReducer.list);
  const dispatch = useDispatch();
  console.log(mainPost);

  useEffect(() => {
    console.log("되나?");
    dispatch(__mainPost());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="CateWrap">
        <h1 className="CateName">카테고리1</h1>
        {/* {mainPost.map((main) => (
          <div className="CateCard" key={main.id}>
            <img src="img/9542.jpg" alt="" />
            <div className="CardTitle">{main.title}</div>
            <div className="CardCont">{main.content}</div>
          </div>
        ))} */}
        {mainPost?.map((main) => {
          if (main?.category === "SHOULDER") {
            return (
              <div className="CateCard" key={main?.id}>
                <img src="img/9542.jpg" alt="" />
                <div className="CardTitle">{main?.title}</div>
                <div className="CardCont">{main?.content}</div>
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
        <h1 className="CateName">카테고리2</h1>
        {mainPost.map((main) => {
          if (main.category === "BACK") {
            return (
              <div className="CateCard" key={main.id}>
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
