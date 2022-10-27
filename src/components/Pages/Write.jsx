import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __writePost } from "../../redux/modules/postSlice";
import Header from "../Header/Header";
// import shortid from "shortid";
import "./write.css";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
    // console.log(e.target.value);
  };

  const writeSubmitHandler = (e) => {
    // e.preventDefault();
    if (title === "" || desc === "") return;
    dispatch(
      __writePost({
        id: Math.random(),
        title,
        desc,
        image,
        category,
      })
    );
    navigate("/");
    // setTitle("");
    // setContent("");
  };

  const imgChangeHandler = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setimage(formData);
  };

  return (
    <div>
      <Header />
      <br></br>
      <div className="uploadBox">
        <form className="formBox" onSubmit={writeSubmitHandler}>
          <div className="select">
            <input
              type="radio"
              id="select"
              name="shop"
              value={"1"}
              onChange={categoryChangeHandler}
            />
            <label htmlFor="select">카테고리1</label>
            <input
              type="radio"
              id="select2"
              name="shop"
              value={"2"}
              onChange={categoryChangeHandler}
            />
            <label htmlFor="select2">카테고리2</label>
          </div>
          <input
            className="titleBox"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => {
              return setTitle(e.target.value);
            }}
          ></input>
          <textarea
            className="contentBox"
            type="text"
            placeholder="내용을 입력하세요"
            value={desc}
            onChange={(e) => {
              return setdesc(e.target.value);
            }}
          ></textarea>
          <input
            className="image"
            type="file"
            onChange={imgChangeHandler}
          ></input>
          <button className="upButton">글쓰기</button>
        </form>
      </div>
    </div>
  );
};

export default Write;
