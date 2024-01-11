import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import {initializeTimes , updateTimes} from './components/BookingPage'

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
  expect(available_times).toStrictEqual(['17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'])
});

test('updateTimes fn return the correct values', () => {
  const available_times = updateTimes(['17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'])
  expect(available_times).toStrictEqual(['17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'])
});