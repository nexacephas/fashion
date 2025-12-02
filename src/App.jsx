import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import KatanaLoader from './components/KatanaLoader/KatanaLoader';
import Hero from './components/Hero/Hero';
import BrandStatement from './components/BrandManifesto/BrandManifesto';
import LookbookPreview from './components/Lookbook/Lookbook';
import FeaturedProducts from './components/ProductListPreview/ProductListPreview';
import WorldviewStory from './components/Worldview/Worldview';
import PickUpListCollection from './components/PickUpCollection/PickUpCollection';
import SNSNav from './components/SNSNavigation/SNSNavigation';
import Footer from './components/Footer/Footer';
import ProductListPage from './pages/ProductList/ProductList';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <KatanaLoader />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BrandStatement />
                <FeaturedProducts />
                <WorldviewStory />
                <LookbookPreview />
                <PickUpListCollection />
                <SNSNav />
                <Footer />
              </>
            } />
            <Route path="/products" element={<ProductListPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
