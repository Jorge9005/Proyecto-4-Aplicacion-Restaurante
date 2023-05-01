import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import Reservaciones from './components/Reservaciones'
import Footer from './components/Footer'
import logo from './assets/img/logo.png'

function App() {
  return (
    <>
      <Header logo={logo} />
      <Hero/>
      <Reservaciones/>
      <Footer/>
    </>
  );
}

export default App;
