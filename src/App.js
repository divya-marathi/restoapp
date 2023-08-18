import logo from "./logo.svg";
import "./App.css";


// import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Room from "./Components/RoomsPage/Room";
import Services from "./Components/Services/Services";
import Home from "./Components/HomePage/Home";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes> 
           <Route path="/home" element={<Home/>} />        
          <Route path="/room" element={<Room />} />
          <Route path="/services" element={<Services/>} />         
          <Route path="/contact" element={<Contact/>} />          
        </Routes>
       
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
