import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useMediaQuery } from '@mui/material';
import MobileNav from './components/MobileNav'
import { useState } from 'react'



// const firebaseConfig = {
//   apiKey: "AIzaSyDvFJK_atJXYWYHGylUNgVQWwl228QPIa4",
//   authDomain: "superchat-98b55.firebaseapp.com",
//   projectId: "superchat-98b55",
//   storageBucket: "superchat-98b55.appspot.com",
//   messagingSenderId: "735082658967",
//   appId: "1:735082658967:web:cd6ce2e0d312bf95a13dd2",
//   measurementId: "G-BE38GF2L87"
// };


function App() {
  const isMobileScreen = useMediaQuery('(max-width:1100px)');
  const [mobileNav, setMobileNav] = useState(false);


  return (
    <>
    <Router>
    <Navbar isMobileScreen={isMobileScreen} mobileNav={mobileNav} setMobileNav={setMobileNav}/>
    
    <Routes>
   
      <Route path='/' element={<Homepage isMobileScreen={isMobileScreen} mobileNav={mobileNav} setMobileNav={setMobileNav} />}/>

    </Routes>
    <Footer isMobileScreen={isMobileScreen} />
    </Router>
    
    </>
  )
}

export default App
