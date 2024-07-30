import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import Collaboration from './components/Collaboration';

function App() {


  return (
    <>

    <div className='pt-[4.75rem] lg:pt-[5.3rem] overflow-hidden' >
        <Header></Header>
        <Hero></Hero>
        <Benefits></Benefits>
        <Collaboration></Collaboration>

    </div>

    <ButtonGradient/>
    </>
  );
}

export default App
