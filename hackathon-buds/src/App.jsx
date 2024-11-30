import AnimatedCursor from "react-animated-cursor";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './Routes';
import LaptopNavbar from '../src/Components/LaptopNavbar'
import MobileNavbar from '../src/Components/MobileNavbar'
import Footer from "./Components/Footer";
import TakePart from "./Components/TakePart";

function App() {

  return (
    <>
      <div className="body">
        <AnimatedCursor
          innerSize={10}
          outerSize={12}
          color='38, 173, 255'
          outerAlpha={0.2}
          innerScale={0.5}
          outerScale={3}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        <TakePart />
        <div className="mobile-nav">
          <MobileNavbar />
        </div>

        <div className="laptop-nav px-10">
          <LaptopNavbar />
        </div>

        <BrowserRouter>
          <div className="router">
            <Router />
          </div>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  )
}

export default App
