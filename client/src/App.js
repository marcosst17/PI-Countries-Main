import './App.css';
import Countries from './components/Countries';
import { Route } from 'react-router';
import Details from './components/Details';
import ActivityForm from './components/ActivityForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesByContinent } from './redux/actions';
import NavBar from './components/NavBar';
import Landing from './components/Landing';

function App() {
  let dispatch = useDispatch()
  useEffect(() => {
      dispatch(getCountriesByContinent("All"))
      //eslint-disable-next-line
  }, [])
  return (
    <div className="App">
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/countries">
          <NavBar/>
          <Countries />
        </Route>
        <Route path="/countries/:id/details">
          <NavBar/>
          <Details/>
        </Route>
        <Route path="/activities">
          <NavBar/>
          <ActivityForm/>
        </Route>
    </div>
  );
}

export default App;
