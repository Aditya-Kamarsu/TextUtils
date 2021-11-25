import React, {useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');
    const upClickHandler = () =>{
        console.log("Button Clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase","success");
    }
    const lowClickHandler = () =>{
        console.log("Button Clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase","success");
    }
    const clearClickHandler = () =>{
        setText('');
        props.showAlert("Cleared the text","success");
    }
    const changeHandler = (event) =>{
        console.log("Changed");
        setText(event.target.value);
    }
    const extraSpaceHandler = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }
    const copyClickHandler = () =>{
        var copyText = document.getElementById('formBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied","success");
    }
    return (
        <div> 
            <h1 style={{color: props.mode ==='dark' ? 'white' : 'black'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" rows="8" value={text} placeholder="Enter Text Here" onChange={changeHandler} id="formBox" style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black'} }></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={upClickHandler}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={lowClickHandler}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearClickHandler}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={copyClickHandler}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={extraSpaceHandler}>Remove extra Spaces</button>
            <div className="container my-3" style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
                <h2>Your Summary</h2>
                <p>{text.split(' ').filter(
            function (n) { return n !== '' }
        ).length} words and {text.length}characters.</p>
                <p>Average time taken to read {text.split(" ").length * 0.008} minutes </p>
                <h2 >Preview</h2>
                <p>{text.length>0 ? text: "Enter something to preview"}</p>
            </div>
        </div>
    )
}
