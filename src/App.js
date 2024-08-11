
import { useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode,setMode ] = useState('light'); // change dark to light
  const [alert , setAlert]= useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
      },1500);
  }
    
  const toggleMode =()=> {
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ="#15202b";
      showAlert("Dark Mode has Enables", "success")
     
    //   setTimeout(()=>{
    //     document.title ="1st Website By Maruf"
    //   } ,2000)
    
    // setTimeout(()=>{
    //   document.title ="Not Last"
    // } ,1500)
  }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has Enables","success")
    }
  }
  return (
    <>
    {/* <Router> */}
    < Navbar title="Cybage" search="Explore" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/*<Navbar/>*/}
    {/*< Navbar title="Cybage"/>*/}
    <div className="container mt-4 my-3"> 
    {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/home"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
          {/* </Route>
    </Switch> */}
      </div>
      {/* </Router> */}
   </>
  );
}

export default App;
