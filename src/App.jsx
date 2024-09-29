import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
   
  const darkMode='Dark Mode';
  const lightMode='Light Mode';

  const [mode,setMode]=useState('light');
  const [btnText,setbtnText]=useState('Dark Mode');
  const [formText,setformText]=useState('dark');
  const [alert,setalert]=useState(null);
  

  let showAlert=(modename)=>{
    setalert('Success: '+modename);
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  let toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      setbtnText('Dark Mode');
      setformText('dark');
      showAlert(lightMode);
      document.body.style.backgroundColor='white';
      
    }
    else{
      setMode('dark');
      setbtnText('Light Mode');
      setformText('light');
      showAlert(darkMode);
      document.body.style.backgroundColor='#464646';
      
    }
  }
  return (
    <>
    <Navbar title="TextApp" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
    <Alert alert={alert}  />
    <TextForm here="Enter Text:" formText={formText} showAlert={showAlert}/>
    </>
  );
}

export default App;
