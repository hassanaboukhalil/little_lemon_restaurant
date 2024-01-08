import './css/App.css';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import { Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking-page' element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
