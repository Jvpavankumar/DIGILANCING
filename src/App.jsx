import React, { useState, useEffect } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Components/Header'
import Login from './Views/Login'
import Register from './Views/Register'
import Home from './Views/Home'
import Courses from './Views/Courses'
import BasicPackages from './Views/BasicPackages'
import StandardPackages from './Views/StandardPackages'
import AdvancedPackages from './Views/AdvancedPackages'
import PremiumPackages from './Views/PremiumPackages'
import UltimatePackages from './Views/UltimatePackages'
import Contact from './Views/Contact'
import ScrollToTop from './Components/ScrollToTop'
import AboutUs from './Views/AbouUs'
import ForgotPassword from './Views/ForgotPassword'
import VerifyOtp from './Views/VerifyOtp'
import ResetPassword from './Views/ResetPassword'
import DashBoard from './User/Views/DashBoard'
import AffiliatePanel from './User/Views/AffiliatePanel'
import Offers from './User/Views/Offers'
import Kyc from './User/Views/Kyc'
import Acheivements from './User/Views/Acheivements'

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login', { replace: true });
    } else {
      setLoading(false);
    }
  }, [navigate]);
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }
  return children;
};


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/login" element={<><Header /><Login /></>} />
        <Route path="/Courses" element={<><Header isDarkMode={true} /><Courses /></>} />
        <Route path="/Register" element={<><Header /><Register /></>} />
        <Route path="/BasicPackages" element={<><Header isDarkMode={true} /><BasicPackages /></>} />
        <Route path="/StandardPackages" element={<><Header isDarkMode={true} /><StandardPackages /></>} />
        <Route path="/AdvancedPackages" element={<><Header isDarkMode={true} /><AdvancedPackages /></>} />
        <Route path="/PremiumPackages" element={<><Header isDarkMode={true} /><PremiumPackages /></>} />
        <Route path="/UltimatePackages" element={<><Header isDarkMode={true} /><UltimatePackages /></>} />
        <Route path="/AboutUs" element={<><Header /><AboutUs /></>} />
        <Route path="/Contact" element={<><Header /><Contact /></>} />
        <Route path="/ForgotPassword" element={<><Header /><ForgotPassword /></>} />
        <Route path="/VerifyOtp" element={<><Header /><VerifyOtp /></>} />
        <Route path="/ResetPassword" element={<><Header /><ResetPassword /></>} />


        <Route path="/DashBoard" element={<><AuthGuard><DashBoard /></AuthGuard></>} />
        <Route path="/AffiliatePanel" element={<><AuthGuard><AffiliatePanel /></AuthGuard></>} />
        <Route path="/Offers" element={<><AuthGuard><Offers /></AuthGuard></>} />
        <Route path="/Kyc" element={<><AuthGuard><Kyc /></AuthGuard></>} />
        <Route path="/Acheivements" element={<><AuthGuard><Acheivements /></AuthGuard></>} />

      </Routes>
    </Router>
  );
}

export default App
