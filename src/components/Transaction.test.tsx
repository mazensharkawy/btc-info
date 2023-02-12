import React from 'react';
import { render, screen } from '@testing-library/react';
import Transactions from './Transactions';

test('Test Transactions component', () => {
  render(<Transactions />);
  const title = screen.getByRole("textbox");
  expect(title).toBeInTheDocument();
});
