import React from "react";
<<<<<<< HEAD
=======
import Footer from "../Footer/Footer";
>>>>>>> 6883bcf519581b7f63f4b46d5a66aa0163ee1d4e
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
<<<<<<< HEAD
          <input
            className="contentBox"
            type="text"
            placeholder="내용을 입력하세요"
          ></input>
=======
          <textarea
            className="contentBox"
            type="text"
            placeholder="내용을 입력하세요"
          ></textarea>
>>>>>>> 6883bcf519581b7f63f4b46d5a66aa0163ee1d4e
          <input className="img" type="file"></input>
          <button className="upButton">글쓰기</button>
        </form>
      </div>
<<<<<<< HEAD
=======
      <Footer />
>>>>>>> 6883bcf519581b7f63f4b46d5a66aa0163ee1d4e
    </div>
  );
};

export default Write;
