import './App.css';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Work from './components/portfolio/Work';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <Resume/>
        <Work/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
