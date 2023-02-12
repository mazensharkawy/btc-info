import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './Address';

test('Test Address component', () => {
  render(<Address />);
  const title = screen.getByRole("textbox");
  expect(title).toBeInTheDocument();
});
