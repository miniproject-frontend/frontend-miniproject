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
    // console.log("되나?");
    dispatch(__mainPost());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="CateWrap">
        <h1 className="CateName">카테고리1</h1>
        {mainPost.map((main) => (
          <div className="CateCard" key={main.id}>
            <img src="img/9542.jpg" alt="" />
            <div className="CardTitle">{main.title}</div>
            <div className="CardCont">{main.content}</div>
          </div>
        ))}

        <div className="CateCard">
          <img src="img/9542.jpg" alt="" />
          <div className="CardTitle">글 제목</div>
          <div className="CardCont">
            내용입니다내용입니다내용입니다내용입용입니다내용입용입니다내용입용입니다내용입용입니다내용입니다내용입니다내용입니다
          </div>
        </div>

        <div className="ViewMore">
          <Link to={"/category1"}>더보기</Link>
        </div>
      </div>
      <div className="CateWrap">
        <h1 className="CateName">카테고리2</h1>
        {/* map 들어갈 부분 */}
        <div className="CateCard">
          <img src="img/9542.jpg" alt="" />
          <div className="CardTitle">글 제목</div>
          <div className="CardCont">
            내용입니다내용입니다내용입니다내용입용입니다내용입용입니다내용입용입니다내용입용입니다내용입니다내용입니다내용입니다
          </div>
        </div>

        <div className="ViewMore">
          <Link to={"/category2"}>더보기</Link>
        </div>
      </div>
    </div>
  );
};

export default Mainitem;
