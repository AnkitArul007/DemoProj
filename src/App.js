import './App.css';

import Navbar from "./components/navbar";
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';

function App() {  
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer/>
      <ProductsPage />
    </>
  );
}

export default App;
