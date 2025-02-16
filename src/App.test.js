import React from 'react';
import { render, screen} from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import App from "./App";

test('renders App component', () => {
    const { container } = render(
      <Router>
        <App />
      </Router>
    );
    // Check if the root component renders by checking if the container is in the document
    expect(container).toBeInTheDocument();

    //check if AppLayout renders
    const div = screen.getByTestId('app-layout');  // Searching for the text (dot) inside the div
    expect(div).toBeInTheDocument();
  });

  test('renders AppLayout comp inside App component in default route', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    //check if AppLayout renders
    const div = screen.getByTestId('app-layout');  // Searching for the text (dot) inside the div
    expect(div).toBeInTheDocument();
  });

  test('AppLayout renders Feed component', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const feed = await screen.findByTestId('feed');  // Searching for the text (dot) inside the div
    expect(feed).toBeInTheDocument();

});

test('AppLayout renders title of feed',  () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const h2 = screen.getByRole('heading', {level: 2});  // Searching for the text (dot) inside the div
    expect(h2).toBeInTheDocument();

});

test('AppLayout renders header',  () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const header = screen.getByTestId('site-header');  // Searching for the text (dot) inside the div
    expect(header).toBeInTheDocument();

});

test('AppLayout renders sidebar',  () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const sidebar = screen.getByTestId('sidebar');  // Searching for the text (dot) inside the div
    expect(sidebar).toBeInTheDocument();

});