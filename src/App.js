import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <body className='bg-dark text-light d-flex flex-column min-vh-100'>
      <Nav />
      <main className='flex-grow-1 d-flex flex-column m-2'>
        <About />
      </main>
      <footer>
      
      </footer>
    </body>
  );
}



export default App;
