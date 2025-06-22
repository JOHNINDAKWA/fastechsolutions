import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Telecom from './pages/Services/Telecom/Telecom';
import CyberSecurity from './pages/Services/CyberSecurity/CyberSecurity';
import Enterprise from './pages/Services/Enterprise/Enterprise';
import { useEffect } from 'react';
import PaymentReminder from './components/PaymentReminder/PaymentReminder.jsx';


import 'aos/dist/aos.css';
import AOS from 'aos';
import WebDevelopment from './pages/Services/WebDevelopment/WebDevelopment.jsx';


const App = () => {
  const isPaymentComplete = true; 

  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 100,
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div>
      {isPaymentComplete ? (
        <>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/telecom' element={<Telecom/>}/>
            <Route path='/cyber-security' element={<CyberSecurity/>}/>
            <Route path='/enterprise' element={<Enterprise/>}/>
            <Route path='/web-development' element={<WebDevelopment/>}/>
          </Routes>
          <Footer/>
        </>
      ) : (
        <PaymentReminder />
      )}
    </div>
  );
}

export default App;
