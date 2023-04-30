import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import logo from './assets/img/logo.jpg'
import Reservaciones from './components/Reservaciones';

function App() {
  return (
    <>
      <Navbar logo={logo} />
      <Hero/>
      <Reservaciones/>
    </>
  );
}

export default App;
