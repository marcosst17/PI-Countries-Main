import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Countries from './components/Countries';
import Landing from './components/Landing';
import store from './redux/store';
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Details from './components/Details';
import NavBar from "./components/NavBar"
import axios from 'axios';

test('Landing Page has a button START', () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );
  // screen.debug()
  const linkElement = screen.getByText("START");
  expect(linkElement).toBeInTheDocument();
});

test('Countries should have a search bar', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Countries/>
      </Provider>
    </MemoryRouter>
  )
  // screen.debug()
  expect(screen.getByRole("textbox")).toBeInTheDocument();
})

test("Details should have a border container", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Details/>
      </Provider>
    </MemoryRouter>
  )
    // screen.debug()
    expect(screen.getByText("BORDERS")).toBeInTheDocument()
})

test("Details should have a details container", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Details/>
      </Provider>
    </MemoryRouter>
  )
    // screen.debug()
    expect(screen.getByText("DETAILS")).toBeInTheDocument()
})

test("Details should have an activities container", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Details/>
      </Provider>
    </MemoryRouter>
  )
    // screen.debug()
    expect(screen.getByText("ACTIVITIES")).toBeInTheDocument()
})

test("Countries should have a filter container with the continents", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Countries/>
      </Provider>
    </MemoryRouter>
  )
    // screen.debug()
    expect(screen.getByText("FILTER BY CONTINENT")).toBeInTheDocument()
})



