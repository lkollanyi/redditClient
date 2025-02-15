import React from 'react';
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";

test('renders App component', () => {
    const { container } = render(
      <Router>
        <App />
      </Router>
    );
    // Check if the root component renders by checking if the container is in the document
    expect(container).toBeInTheDocument();
  });