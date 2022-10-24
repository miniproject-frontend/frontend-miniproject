import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./write.css";

const Write = () => {
  return (
    <div>
      <Header />
      <br></br>
      <div className="uploadBox">
        <form className="formBox">
          <input
            className="titleBox"
            type="text"
            placeholder="제목을 입력하세요"
          ></input>
          <input
            className="contentBox"
            type="text"
            placeholder="내용을 입력하세요"
          ></input>
          <textarea
            className="contentBox"
            type="text"
            placeholder="내용을 입력하세요"
          ></textarea>
          <input className="img" type="file"></input>
          <button className="upButton">글쓰기</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Write;
