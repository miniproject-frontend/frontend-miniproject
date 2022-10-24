import React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./view.css";

const View = () => {
  const [fixContent, setFixContent] = useState("");
  const [contentPop, setContentPop] = useState(false);
  const [fixComment, setFixComment] = useState("");
  const [commentPop, setCommentPop] = useState(false);

  const contentPopClick = () => {
    setContentPop(!contentPop);
  };
  const commentPopClick = () => {
    return setCommentPop(!commentPop);
  };
  return (
    <div>
      <Header />
      <br></br>
      <div className="viewHoleBox">
        <div className="viewBox">
          <div className="viewTop">
            <h1>타이틀</h1>
            <p>작성자</p>
            <p>등록일</p>
          </div>
          <p className="viewContent">내용</p>
        </div>
      </div>
      {/*  */}
      <div className="viewBtn">
        <button onClick={contentPopClick}>수정하기</button>
        <button>삭제하기</button>
        <button>목록보기</button>
      </div>
      {contentPop && (
        <form className="contentPopInput">
          <textarea
            type="text"
            value={fixContent}
            onChange={(e) => {
              return setFixContent(e.target.value);
            }}
          ></textarea>
          <button>수정</button>
        </form>
      )}
      {/*  */}
      <p className="viewComment">현재 댓글 1개</p>
      <div className="viewCommentList">
        <div className="viewCommentListP">
          <h1>작성자</h1>
          <p>댓글내용</p>
        </div>
        <div className="viewCommentListBtn">
          <button onClick={commentPopClick}>수정하기</button>
          <button>삭제하기</button>
        </div>
      </div>
      {commentPop && (
        <form className="commentPopInput">
          <input
            type="text"
            value={fixComment}
            onChange={(e) => {
              return setFixComment(e.target.value);
            }}
          ></input>
          <button>수정</button>
        </form>
      )}
      {/*  */}
      <div className="commentInput">
        <button>댓글달기</button>
      </div>
      <Footer />
    </div>
  );
};

export default View;
