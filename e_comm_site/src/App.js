import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Header from"./Components/Header";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Home/>
    <Routes>
      <Route path ="/" exact ={true} elements= {<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
