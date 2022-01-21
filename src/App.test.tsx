import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// https://create-react-app.dev/docs/running-tests#writing-tests
test('renders the "conlaw buddy" app name', () => {
  render(<App />);
  const linkElement = screen.getByText(/conlaw-buddy/i);
  expect(linkElement).toBeInTheDocument();
});
