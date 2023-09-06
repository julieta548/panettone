import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import Producto from './Components/Productos/Producto';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Producto></Producto>
    </div>
  );
}

export default App;
