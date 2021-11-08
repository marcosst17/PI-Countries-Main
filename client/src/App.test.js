import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Countries from './components/Countries';
import Landing from './components/Landing';
import Pagination from './components/Pagination';
import store from './redux/store';

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

test('There should be 28 pages after initial load', async () => {
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
})



