import React ,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }

  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");

  }

  const cleartext =()=>{
    setText('');
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);

  }
  const [text,setText] = useState('');
  return (
    <><div className="container" style={{color : props.mode==='dark'? 'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'? '#042743':'white', color : props.mode==='dark'? 'white':'#042743'}} rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy to Clipboard</button>
<button className='btn btn-primary mx-2 my-2' onClick={cleartext}>Clear text</button>
</div>
<div className='container my-4' style={{color : props.mode==='dark'? 'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters </p>
<p>{0.008 * text.split(" ").length} minutes read.</p>
<h2>Preview</h2>
<p>{text.length>0 ? text : 'Enter some text to preview'}</p>
</div>
</>
    
  )
}
