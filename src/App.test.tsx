import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const title = screen.getByText(/BTC Info/i);
  expect(title).toBeInTheDocument();
  const transactionSearch = screen.getByText(/Transaction Search/i);
  const addressSearch = screen.getByText(/Transaction Search/i);
  expect(transactionSearch).toBeInTheDocument();
  expect(addressSearch).toBeInTheDocument();
});
