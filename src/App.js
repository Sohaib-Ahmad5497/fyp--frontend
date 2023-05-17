import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles/app.css"
import { useState } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import RandomPet from "./components/RandomPet";
import Seller from "./components/Seller";
import OneMoreFriend from "./components/OneMoreFreind";
import PetShop from "./components/PetShop";
import Description from "./components/Description";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Registration from "./components/Registration";
import Login from "./components/LogIn";
import Navigation from './components/Navigation';
import AddToCart from './components/AddToCart';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (<>
          <Navigation setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route exact path="/hero-section" element={<HeroSection />} />
            <Route exact path="/" element={<HeroSection />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/pet-shop" element={<PetShop />} />
            <Route path="/pet-shop/description/:id" element={<Description />} />
            <Route path='/add-to-cart' element={<AddToCart />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <RandomPet />
          <OneMoreFriend />
          <ContactUs />
          <Footer />
        </>) : (
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

