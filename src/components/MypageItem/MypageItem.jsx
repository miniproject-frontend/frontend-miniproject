import React from "react";
import "./style.css";
import Header from "../Header/Header";

const MypageItem = () => {
  const nickname = sessionStorage.getItem("nickname");

  //내가 작성한 글 클릭하면 보여주기
  const PostOpen = () => {
    document.getElementById("MyPost").style.display = "block";
    document.getElementById("MyComment").style.display = "none";
  };

  //내가 작성한 댓글 클릭하면 보여주기
  const CommentOpen = () => {
    document.getElementById("MyPost").style.display = "none";
    document.getElementById("MyComment").style.display = "block";
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="MypageWrap">
          <div className="MypageInfo">
            <div className="UserName">{nickname}</div>
            <div className="UserInfo">
              <div className="UserWrite" id="test1" onClick={PostOpen}>
                내가 작성한 글
              </div>
              <div className="UserComment" id="test2" onClick={CommentOpen}>
                내가 작성한 댓글
              </div>
            </div>
          </div>
          <div className="MypageBox">
            <div className="MyPost" id="MyPost">
              <h2>내가 작성한 글</h2>
              <div className="MypageList">
                <div className="InfoBox">
                  <img src="img/123456.jpg" alt="" />
                  <div className="TextBox">
                    <h3>제목입니다</h3>
                    <p>
                      내용입니다내용입니다내용입니다내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="MyComment" id="MyComment">
              <h2>내가 작성한 댓글</h2>
              <div className="MyCommentInfo">
                <div className="MyCommentTitle">
                  <div className="PostTitle">댓글작성한 게시글 제목</div>
                  <div className="WriteTime">2022-01-01</div>
                </div>
                <p>댓글내용입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MypageItem;
