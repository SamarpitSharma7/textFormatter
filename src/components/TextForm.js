import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert(' Converted to upper case..','success');
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert(' Converted to lower case..','success');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert(' Text cleared..','success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/ {2,}/);
    setText(newText.join(" "));
    props.showAlert(' Removed extra spaces..','success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  const wordCount = text.trim().split(/\s+/).filter((word) => word !== '').length;
  const charCount = text.length;
  const minutesToRead = (0.008 * wordCount).toFixed(2);

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <label htmlFor="myForm" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            placeholder="Enter your text here..."
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myForm"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{wordCount} words and {charCount} characters.</p>
        <p>{minutesToRead} minutes to read the text.</p>
        <h2>Preview Text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
