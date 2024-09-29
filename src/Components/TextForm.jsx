import React, { useState } from 'react'
export default function TextForm(props) {


  let handleClick = () =>
  {
    let updatedText=text.toUpperCase();
    setText(updatedText);
    props.showAlert("converted to Upper Case");
  }

  let handleClear=()=>
  {
    let updatedText='';
    setText(updatedText);

  }

  let handleLower=()=>
  {
    let updatedText=text.toLowerCase();
    setText(updatedText);
    props.showAlert("converted to Lower Case");
  }

  let handleChange = (event) =>
  {
    setText(event.target.value);
  }

  

  const [text,setText]=useState('');
  return (
    
        <>
        <div  className={`text-${props.formText}`}>
        <h2 className={"mx-3 my-3"}>{props.here}</h2>
        <textarea className={`mx-3 bg-${props.formText==='dark'?'light':'dark'} text-${props.formText}`} rows="10" cols="75" value={text} onChange={handleChange}></textarea>
        </div>
        
        <div >
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleClick}>Uppercase</button>
        <button type="button" className="btn btn-primary " onClick={handleClear}>Clear Text</button>  
        <button type="button" className="btn btn-primary mx-3" onClick={handleLower}>Lowercase</button>      
        </div>

        <div className={`mx-3 text-${props.formText}`}>
          <p>Number of characters: {text.length}</p>
          <p>Number of words: {text.split(' ').length}</p>
        </div>
        
        </>
      
  );
}
