
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import NavbarComp from './components/NavbarComp';
import HomePage from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Patil from './components/Patil';
import Maratha from './components/Maratha';


function App() {
  return (
    <>


      <Router>
        
      <NavbarComp/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/patil" element={<Patil/>} />
            <Route path="/maratha" element={<Maratha/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<ContactForm />} />

          </Routes>
        <Footer/>
      </Router>
      </>
  );
}

export default App;
