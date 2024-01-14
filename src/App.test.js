import { render, screen } from '@testing-library/react';
import {initializeTimes , updateTimes} from './components/pages/BookingPage'
import { fetchAPI } from './components/api';
import BookingForm from './components/others/BookingForm';

test('choose date label in the BookingForm component', () => {
  let times_reducer_obj = {
    availableTimes : ['17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'],
  }
  render(
    <BookingForm times_reducer_obj={times_reducer_obj} />
  );
  const label = screen.getByLabelText("Choose date")
  expect(label).toBeInTheDocument()
});

test('initializeTimes fn return the correct values', () => {
  const available_times = initializeTimes()
  expect(available_times).toStrictEqual([...fetchAPI(new Date().toISOString().split('T')[0])])
});

test('updateTimes fn return the correct values', () => {
  const available_times = updateTimes("5-5-2024")
  expect(available_times).toStrictEqual(['17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'])
});

test('input fields in the booking form having the required attribute', () => {
  let times_reducer_obj = {
    availableTimes : ['17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'],
  }
  render(
    <BookingForm times_reducer_obj={times_reducer_obj} />
  );
  const isRequired_guestNb = screen.getByTitle("guests-nb")
  expect(isRequired_guestNb).toBeRequired()
});