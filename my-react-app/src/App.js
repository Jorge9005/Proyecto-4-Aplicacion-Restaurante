import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import logo from './assets/img/logo.png'
import Reservaciones from './components/Reservaciones';

function App() {
  return (
    <>
      <Header logo={logo} />
      <Hero/>
      <Reservaciones/>
    </>
  );
}

export default App;
