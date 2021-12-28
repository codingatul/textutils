
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const [enable, setEnable] = useState('Darkmode')

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      setEnable('Lightmode')
      document.body.style.backgroundColor = "#042743"
      showAlert('Dark mode enable', 'success')
      document.title = 'Textutils-DarkMode'
      // setInterval(() => {
      //   document.title='Textutils-Install now'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Textutils-click here to download'
      // }, 1500);
    }
    else {
      setMode('light')
      setEnable('Darkmode')
      document.body.style.backgroundColor = "white"
      showAlert('Light mode enable', 'success')
      document.title = 'Textutils-LightMode'
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  return (
    <>
      <Navbar title="Textutils" about="AboutTextutils" mode={mode} toggle={toggle} enable={enable} />

      <Alert alert={alert} />

        {/* <About /> */}

      <div className="container my-3">
        <Textarea heading="Enter value to change it" mode={mode} showAlert={showAlert} />
      </div>


      {/* <BrowserRouter>

        <Navbar title="Textutils" about="AboutTextutils" mode={mode} toggle={toggle} enable={enable} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>

            </Route>
            <Route exact path="/" element={<Textarea heading="Enter value to change it" mode={mode} showAlert={showAlert} />}>

            </Route>
          </Routes>
        </div>

      </BrowserRouter> */}

    </>
  );
}

export default App;


