import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Home from './Home';
import Contact from './Contact';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element={<Home></Home>}></Route>
        <Route path ="/Card" element={<Card></Card>}></Route>
        <Route path ="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
