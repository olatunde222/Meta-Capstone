import { render, screen } from '@testing-library/react';
import initializeTimes from './App';
import Reservation from './pages/reservation/Reservation';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('booking form renders', () => {
  const times = initializeTimes();
  render(<Reservation availableTimes={times}/>);
  const title = screen.getByText('Choose date');
  expect(title).toBeInTheDocument();
});

test('test initialize times', () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test('test form name, email, and phone input has right type', () => {
  const times = initializeTimes();
  render(<Reservation availableTimes={times}/>);
  const name = screen.getByLabelText('Name');
  const email = screen.getByLabelText('Email Address');
  const phone = screen.getByLabelText('Phone Number');

  expect(name.getAttribute('type')).toEqual('text');
  expect(email.getAttribute('type')).toEqual('email');
  expect(phone.getAttribute('type')).toEqual('tel');
});

test('test form date has min date', () => {
  const times = initializeTimes();
  render(<Reservation availableTimes={times}/>);
  const datePicker = screen.getByLabelText('Choose date');
  expect(datePicker).toHaveAttribute('min');
});

test('test form peoplenum min and max', () => {
  const times = initializeTimes();
  render(<Reservation availableTimes={times}/>);
  const diners = screen.getByLabelText('Number of diners');
  expect(diners.getAttribute('min')).toEqual('1');
  expect(diners.getAttribute('max')).toEqual('10');
});