import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const [textMode, setTextMode] = useState("dark");

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light" && textMode === "dark") {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled.", "success")
    }
    else {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled.", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} textMode={textMode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
