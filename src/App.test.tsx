import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// https://create-react-app.dev/docs/running-tests#writing-tests
test('renders the "conlaw buddy" app name', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/conlaw-buddy/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders the react bootstrap alert', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/react-bootstrap alert/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders the navbar', () => {
//   render(
//     <Router>
//       <App />
//     </Router>
//   );
//   const linkElement = screen.getByText(/conlaw-buddy/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders the React Router * route', () => {
//   render(
//     <Router>
//       <App />
//     </Router>
//   );
//   const linkElement = screen.getByText(
//     /React Router checking in. This is the \* route/i
//   );
//   expect(linkElement).toBeInTheDocument();
// });
