import logo from './logo.svg';
import './App.css';
import Header from './shared/component/header';
import Home from './modules/hotel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './modules/about';
import Jewelerry from './modules/jewelerry';
import Contact from './modules/contact';
import Details from './modules/details';



function App() {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Jewelerry/> */}
      {/* <Contact/> */}
      <Details/>
    
      
    </div>
  );
}

export default App;
