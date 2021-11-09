import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Countries from './components/Countries';
import Landing from './components/Landing';
// import Pagination from './components/Pagination';
import store from './redux/store';
import React from "react";
import { MemoryRouter } from "react-router-dom";

describe("<Home/>", () => {
    const component = render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/home"]}>
                <App />
            </MemoryRouter>
        </Provider>
    );
    it("Should render NavBar component", () => {
        component.container.querySelector("NavBar");
    });

    it("Should render SideBar component", () => {
        component.container.querySelector("Sidebar");
    });
    it("Should render Pagination component", () => {
        component.container.querySelector("Pagination");
    });
    it("Should render CustomScrollDiv component", () => {
        component.container.querySelector("CustomScrollDiv");
    });
    it("Should render Loading component", () => {
        component.container.querySelector("Loading");
    });
    it("Should render Cards component", () => {
        component.container.querySelector("Cards");
    });
});

/* test('renders learn react link', () => {
  render(<App />);
  screen.debug()
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('Landing Page has a button START', () => {
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
  // screen.debug()
  const linkElement = screen.getByText("START");
  expect(linkElement).toBeInTheDocument();
});

test('Countries should have a search bar', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Countries/>
      </Provider>
    </BrowserRouter>
  )
  // screen.debug()
  expect(screen.getByRole("textbox")).toBeInTheDocument();
})

/* test('There should be 28 pages after initial load', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Pagination/>
      </Provider>
    </BrowserRouter>
  )
  screen.debug()
  expect(screen.getByRole("button")).toHaveLength(3)
  expect(await screen.findAllByRole("button")).toHaveLength(30);
}) */



