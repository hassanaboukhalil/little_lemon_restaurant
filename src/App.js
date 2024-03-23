import './css/App.css';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ConfirmedBooking from './components/pages/ConfirmedBooking';
import ContactPage from './components/pages/ContactPage';
import MenuPage from './components/pages/MenuPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import CartPage from './components/pages/CartPage';



function App() {
  return (
    <ChakraProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking-page' element={<BookingPage />} />
          <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
          <Route path='/contact-page' element={<ContactPage />} />
          <Route path='/menu-page' element={<MenuPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
    </ChakraProvider>
  );
}

export default App;
