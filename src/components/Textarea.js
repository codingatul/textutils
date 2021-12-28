import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, setText] = useState('')

    const handleUpClick = () => {
        // console.log('uppercase button click ' + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('text converted to UpperCase','success')
    }

    const handleLoClick = () => {
        // console.log('lowercase button click ');
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('text converted to LowerCase','success')
    }

    const handleClrClick = () => {
        // console.log('clear button click ');
        let newText = ''
        setText(newText)
        props.showAlert('text cleared','success')
    }

    const handleonChange = (event) => {
        // console.log('onchange');
        setText(event.target.value)
    }

    const handleCopy = () => {
        let mybox = document.getElementById('mybox');
        mybox.select();
        navigator.clipboard.writeText(mybox.value);
        props.showAlert('text copied','success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Deleted extra spaces','success')
    }



    return (
        <>
            <div className={`container text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="mybox" value={text} onChange={handleonChange} rows="5" style={{ backgroundColor: (props.mode === 'light') ? 'white' : 'gray', color: (props.mode === 'light') ? 'black' : 'white' }}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClrClick}>clear text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>
                </div>
            </div>
            <div className={`container my-3 text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
            </div>
        </>
    )
}
