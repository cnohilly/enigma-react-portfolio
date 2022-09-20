import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio': return <Portfolio />;
      case 'Contact': return <Contact />;
      case 'Resume': return <Resume />;
      default: return <Contact />;
    }
  }
  return (
    <div className='bg-dark text-light d-flex flex-column min-vh-100 position-relative'>
      <Nav />
      <main className='flex-grow-1 d-flex flex-column m-2'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}



export default App;
