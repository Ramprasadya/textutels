
import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("Enter the text");
const handleUpclick =()=>{
    console.log("Uppercase was clicked","success")
    let newText =text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
}

const handleLoclick =()=>{
    console.log("Lowercase was clicked")
    let newText =text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
}
const handleOnchange =(event)=>{
    console.log("handleon is clicked")
    setText(event.target.value);
}

const handleClclick = ()=>{
  let newText = '';
  setText(newText)
  props.showAlert("Text has been cleared","success")
}
const handleCopy =()=>{
  var text= document.getElementById("myBox");
  text.select();
  document.getSelection().removeAllRanges();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text is copied","success")

}

return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1> 
<div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleUpclick} >Convert to uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleLoclick}>Convert to lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleClclick}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
 
<h2>Your text summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} character</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"text something for preview"}</p>
</div>

    </>
  )
}
