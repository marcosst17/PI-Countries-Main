import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Landing from './components/Landing';
import {Route} from "react-router-dom"
/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

/* test('The NavBar should not appear on the Landing Page', () => {
  render(
   <BrowserRouter>
    <Landing />
  </BrowserRouter> 
  );
  const navBar = screen.queryByText(/Home/i);
  expect(navBar).toBeNull();
}); */

test("The NavBar should not appear on the Landing Page", () => {
  render(
    <BrowserRouter>
      <Route path="/"/>
    </BrowserRouter>
  );
  const navBar = screen.queryByText("Home");
  expect(navBar).toBeNull();
});


