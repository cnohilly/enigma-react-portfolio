import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Banner from './components/Banner';


function App() {

  useEffect(() => {
    document.title = 'Chris Nohilly - Portfolio';
  });
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio': return <Portfolio />;
      case 'Contact': return <Contact />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  }
  return (
    <div className='bg-dark text-white d-flex flex-column min-vh-100 position-relative'>
      <Banner />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className='flex-grow-1 d-flex flex-column m-2'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}



export default App;
