import React, { useState } from 'react'
export default function Textform(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

    const handleNumExtract = () => {
        const nums = /[0-9/ /]/g;
        const digits = text.match(nums);
        const res1 = digits.join("");
        setText(res1)
        props.showAlert("Numbers have been extracted", "success");
    }

    const handletextExtract = () => {
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        props.showAlert("Symbols have been removed", "success");
    }

    const handleClear = () => {
        setText("")
        props.showAlert("Cleared Text", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} rows="10"></textarea>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClear} disabled={text.length === 0}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleNumExtract} disabled={text.length === 0}>To Extract numbers</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handletextExtract} disabled={text.length === 0}>To Exclude Symbols</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary here</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text above textbox to preview it here"}</p>
            </div>
        </>
    )
}
