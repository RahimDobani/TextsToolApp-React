import React, { useState } from "react";
export default function TextBox(props) {
  let onChanged = (e) => {
    setText(e.target.value);
  };
  let handleUpCase = (e) => {
    setText(text.toUpperCase());
    props.showAlert("Text coverted to upper case", "success");
  };
  let handleLowCase = (e) => {
    setText(text.toLowerCase());
    props.showAlert("Text coverted to lower case", "success");
  };
  let clearText = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied into clipboard", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Enter text here" value={text} onChange={onChanged} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleUpCase}>Upper Case</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleLowCase}>Lower Case</button>
        <button disabled={text.length === 0} className="btn btn-dark my-2 mx-2" onClick={copyText}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-danger my-2 mx-2" onClick={clearText}>Clear Text</button>
        </div>
      <div className="container">
        <div className="container my-2">
          <h2>Summary</h2>
          <p>
            Word:
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
            ,Character:   
            {text.length}
            ,Sentences:
            {
              text.split(/[.!?]/).length-1
            }
          </p>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <h1>Preview</h1>
            <p>{text === "" ? "Nothing to preview...." : text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
