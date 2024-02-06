import './css/App.css';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ConfirmedBooking from './components/pages/ConfirmedBooking';



function App() {
  return (
    <ChakraProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking-page' element={<BookingPage />} />
          <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
    </ChakraProvider>
  );
}

export default App;
