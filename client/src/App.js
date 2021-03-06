import './App.css';
import Countries from './components/Countries';
import { Route, Switch } from 'react-router';
import Details from './components/Details';
import ActivityForm from './components/ActivityForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allRoutes } from './redux/actions';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Redirect404 from './components/Redirect404';
import About from './components/About';

function App() {
  let dispatch = useDispatch()
  useEffect(() => {
      dispatch(allRoutes("", "", "", "", "all"))
      //eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/about">
          <About/>
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
        <Route path="*">
          <Redirect404/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
