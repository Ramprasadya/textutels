
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

import { Routes, Route } from "react-router-dom";
function App() {

  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert=(massage,type)=>{
     setAlert({
       msg:massage,
       type:type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
    <Navbar title ="Textutels" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/" element={ <Textform showAlert={showAlert} heading="Analyze the text area" mode={mode}/>} />
        <Route path="about" element={<About />} />
       
      </Routes>
   
    
    </div>
   
    </>
  );
}

export default App;
