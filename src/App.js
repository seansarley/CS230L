import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>CS230L</h1>
      <h2>Section - 003</h2>
      <p>WVU ID: 800396484</p>
      <p>Hi I am Sean Sarley</p>
      <Card></Card>
    </div>
  );
}

export default App;
