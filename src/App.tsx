import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ExtraWrap from './components/ExtraWrap';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Inventory from './pages/Inventory';
import CarImport from './pages/CarImport';
import CarInspection from './pages/CarInspection';
import CarDocumentation from './pages/CarDocumentation';
import InvestmentOpportunity from './pages/InvestmentOpportunity';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <div id="wrapper">
        <a href="#" id="back-to-top"></a>
        <div id="de-loader"></div>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/car-import" element={<CarImport />} />
          <Route path="/car-inspection" element={<CarInspection />} />
          <Route path="/car-documentation" element={<CarDocumentation />} />
          <Route path="/investment-opportunity" element={<InvestmentOpportunity />} />
        </Routes>

        <Footer />
      </div>

      <ExtraWrap />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
