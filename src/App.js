import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className='bg-dark text-light d-flex flex-column min-vh-100 position-relative'>
      <Nav />
      <main className='flex-grow-1 d-flex flex-column m-2'>
        <About />
      </main>
      <Footer />
    </div>
  );
}



export default App;
