import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
                                                // console.log("uppercase was clicked" + text);   
        let newText = text.toUpperCase();  
        setText(newText)
        props.showAlert("Converted to Uppercase" ,"success")
    }
    const handleloClick = ()=>{
                                                // console.log("lowercase was clicked" + text);   
       let newText = text.toLowerCase();  
       setText(newText)
       props.showAlert("Converted to Lowercase","success")
      
   }
    const handleClearClick = ()=>{
                                                // console.log("lowercase was clicked" + text);   
        let newText = (" ");  
        setText(newText)
   }
    const handleCopyClick = ()=>{
                                                // console.log("text was copied" + text);   
    var text= document.getElementById("myBox");
    text.select(" ");
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied!" ,"success")
  }
    const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);           //Removed Extra Spacess
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces" ,"success")
    }
    const handleOnChange = (event)=>{
                                                // console.log("On change"); 
        setText(event.target.value)     
    }
    const [text, setText] = useState('Enter Text here...');
   // text="new text"; // wrong way to change the state
   // setText=("new text"); // correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'? 'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#22303c':'white',
           color: props.mode ==='dark'?'#ffffff':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 " onClick={handleloClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 " onClick={handleCopyClick}>Copy </button>
        <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove Extra Spaces </button>
        <button className="btn btn-primary mx-2 " onClick={handleClearClick}>Clear</button>
    </div>

        <div className="container mx-2" style={{color:props.mode ==='dark'? 'white':'black'}}>
        <h1  className="mt-3"> Text Summary </h1>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p> {0.008 * text.split(" ").length} Minutes To read </p>
        <h2>Preview</h2>
        <p>{text.length >0?text:"Enter Preview Here..."}</p>
        </div>  
    </>
  )
}

