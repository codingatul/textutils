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
        navigator.clipboard.writeText(text);
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
                    <h2 className='mb-3'>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea className="form-control" id="mybox" value={text} onChange={handleonChange} rows="5" style={{ backgroundColor: (props.mode === 'light') ? 'white' : '#13466e', color: (props.mode === 'light') ? 'black' : 'white' }}></textarea>
                    </div>
                    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>convert to uppercase</button>
                    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLoClick}>convert to lowercase</button>
                    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleClrClick}>clear text</button>
                    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleCopy}>copy text</button>
                    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleExtraSpaces}>remove extra spaces</button>
                </div>
            </div>
            <div className={`container my-3 text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(/[\s+]/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/[\s+]/).filter((element)=> {return element.length!==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
