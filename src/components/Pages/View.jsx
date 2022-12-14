import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __viewContentPut,
  __viewContentGet,
  __mainPost,
  __deletePost,
  __viewDetail,
} from "../../redux/modules/postSlice";
// import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./view.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const View = () => {
  const [contentPop, setContentPop] = useState(false);
  // const [comment, setComment] = useState("");
  // const [commentPop, setCommentPop] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const view = useSelector((state) => state.postReducer.list);
  // const [fixContent, setFixContent] = useState(view.content);
  const viewId = view.filter((view) => view.id === Number(id))[0];
  console.log(view);
  console.log(viewId);

  const contentPopClick = () => {
    setContentPop(!contentPop);
  };

  console.log(id);

  // const commentPopClick = () => {
  //   return setCommentPop(!commentPop);
  // };

  useEffect(() => {
    dispatch(__mainPost());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(__viewContentGet());
  // }, []);

  const deletePostClick = (id) => {
    dispatch(__deletePost(id));
    navigate("/");
  };

  // const fixContentSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   const fixGo = {
  //     ...view,
  //     id: viewId.id,
  //     content: fixContent,
  //   };
  //   await dispatch(__viewContentPut(fixGo));
  //   await dispatch(__viewDetail(id));
  //   navigate(`/view/${id}`);
  // };

  return (
    <div>
      <Header />
      <br></br>
      <div className="viewHoleBox">
        <div className="viewBox">
          <div className="viewTop">
            <h1>{viewId.title}</h1>
            <p>{viewId.author}</p>
            <p>{viewId.modifiedAt.substring(0, 10)}</p>
          </div>
          <p className="viewContent">{viewId.content}</p>
        </div>
      </div>
      {/*  */}
      <div className="viewBtn">
        <button onClick={contentPopClick}>????????????</button>
        <button onClick={() => deletePostClick(viewId.id)}>????????????</button>
      </div>
      {contentPop && (
        <form
          className="contentPopInput"
          // onSubmit={fixContentSubmitHandler(viewId.id)}
        >
          <textarea
            type="text"
            // value={fixContent}
            onChange={(e) => {
              // return setFixContent(e.target.value);
            }}
          ></textarea>
          <button className="fixBtn">??????</button>
        </form>
      )}
      {/*  */}
      {/* <p className="viewComment">?????? ?????? 1???</p>
      <div className="viewCommentList">
        <div className="viewCommentListP">
          <h1>?????????</h1>
          <p>????????????</p>
        </div>
        <div className="viewCommentListBtn">
          <button onClick={commentPopClick}>????????????</button>
          <button>????????????</button>
        </div>
      </div> */}
      {/* {commentPop && (
        <form className="commentPopInput">
          <input
            type="text"
            value={comment}
            onChange={(e) => {
              return setComment(e.target.value);
            }}
          ></input>
          <button>??????</button>
        </form>
      )} */}
      {/* <div className="commentInput">
        <button>????????????</button>
      </div> */}
    </div>
  );
};

export default View;
