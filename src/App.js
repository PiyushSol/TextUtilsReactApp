
import { useState } from 'react';
import './App.css';
// import About from './components.js/About';
import Navbar from './components.js/Navbar';
import TextForm from './components.js/TextForm';
import Alert from './components.js/Alert';

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 const [mode , setMode] = useState('light'); //Whether dark mode is enabled or not
 const [alert, setAlert] = useState(null);

 const showAlert = (message ,type)=>{
  setAlert({
    msg : message,
    type : type
  })

  setTimeout(()=>{
    setAlert(null);
  }, 1500
)
 }

 const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    showAlert("Dark Mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light Mode has been enabled","success");
  }
 }
 
 
 return (
   <>
{/* <BrowserRouter> */}
<Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
<Alert alert={alert} />
<div className='container my-3'>
{/* <Routes> */}
    {/* <Route  exact path='/about' element={<About/>}></Route> */}
    {/* <Route  exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode ={mode} />}></Route> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode ={mode} />}
{/*  </Routes>  */}
</div>
 {/* </BrowserRouter> */}
   </>
  );
  // Passing props 
}

export default App;
