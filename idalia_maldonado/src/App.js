import './App.css';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
