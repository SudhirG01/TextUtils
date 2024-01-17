import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState("");

    const warn_msg = "Enter text in the below Textbox.";

    const handleUpClick = () => {
        // console.log("Up is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length === 0) {
            props.showAlert(warn_msg, "warning");
        }
        else {
            props.showAlert("Text converted to Uppercase.", "success");
        }
    }

    const handleLoClick = () => {
        // console.log("Up is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length === 0) {
            props.showAlert(warn_msg, "warning");
        }
        else {
            props.showAlert("Text converted to Lowercase.", "success");
        }
    }

    const handleClearClick = () => {
        // console.log("Up is clicked");
        let newText = "";
        setText(newText);
        if (text.length === 0) {
            props.showAlert(warn_msg, "warning");
        }
        else {
            props.showAlert("Text is Cleared.", "success");
        }
    }

    const handleCopyClick = () => {
        // console.log("Up is clicked");
        navigator.clipboard.writeText(text);
        if (text.length === 0) {
            props.showAlert(warn_msg, "warning");
        }
        else {
            props.showAlert("Copied to Clipboard.", "success");
        }
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <div className="container my-2">
            <div className="container mb-3">
                <h3 className='mx-1 mb-3'>{props.heading}</h3>
                <textarea className="form-control mx-1 my-3" style={{ backgroundColor: props.mode === "light" ? "white" : "#343a40", color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
            <p className='mx-1 my-3'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
            <p className='mx-1'>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} mins to read</p>
            <h4 className='mx-1'>Preview : </h4>
            <p className='mx-1'>{text.length === 0 ? "Nothing to preview." : text}</p>
            </div>
        </div>
    )
}
