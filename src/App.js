import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import Producto from './Components/Productos/Producto';
import Navbar from './Components/Navbar/Navbar';
import Contacto from './Components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Producto></Producto>
      <Contacto></Contacto>
    </div>
  );
}

export default App;
