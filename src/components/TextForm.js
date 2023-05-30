import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const HandleOnChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const HandleUpClick = () => {
    let newText = text.toUpperCase();
    console.log("Clicked" + text);
    setText(newText);
  };
  const HandleLoClick = () => {
    let newText = text.toLowerCase();
    console.log("Clicked" + text);
    setText(newText);
  };
  const HandleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 className="fs-3 mt-3 text-center">{props.heading}</h1>
          <textarea
            className="form-control border-4 border-info rounded-1 "
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={HandleOnChange}
          ></textarea>
        </div>
        <div className="row">
          <button className="btn btn-primary col mx-2" onClick={HandleUpClick}>
            Uppercase
          </button>
          <button
            className="btn btn-secondary col mx-2"
            onClick={HandleLoClick}
          >
            Lowercase
          </button>
          <button
            className="btn btn-secondary col mx-2"
            onClick={HandleClearClick}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-4 ">
        <div className="bg-primary bg-opacity-10 text-center py-2 rounded-3 my-2">
          <h2>Entered Text Summary</h2>
          <p>
            <b className="fs-4 text-danger">{text.split(" ").length}</b> words
            and <b className="fs-4 text-danger">{text.length}</b> characters
          </p>
          <p>
            <b className="fs-4 text-danger">{0.008 * text.split(" ").length}</b>{" "}
            Minutes to read
          </p>
        </div>
        <div className="bg-success bg-opacity-10 text-center py-2 rounded-3 my-2">
          <h2 className="fw-bold fs-1">Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
TextForm.prototype = {
  heading: PropTypes.string,
  btnName: PropTypes.string,
};
