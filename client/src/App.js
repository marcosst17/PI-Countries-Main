import './App.css';
import Countries from './components/Countries';
import { Route } from 'react-router';
// import SearchBar from './components/SearchBar';
import Details from './components/Details';
import ActivityForm from './components/ActivityForm';
import Pagination from './components/Pagination';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCities, getCountriesByContinent, testing } from './redux/actions';
import NavBar from './components/NavBar';
import background from "./styles/landing.png"
import background2 from "./styles/duotone4.jpg"
import Landing from './components/Landing';
// import { useState } from 'react';
// import axios from "axios";

function App() {
  // let [cities, setCities] = useState([]);
  // fetch("http://localhost:3001/countries")
  // .then(res => res.json())
  // .then(res => {
  //   return setCities(res);
  // })
  // function Api(){
  //   let response = axios.get("http://localhost:3001/countries");
  //   let data = response.data;
  //   return setCities(data);
  // }
  // Api();
  let dispatch = useDispatch()
  useEffect(() => {
      dispatch(getCountriesByContinent("All"))
  }, [])
  return (
    <div className="App">
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/countries">
          <NavBar/>
          {/* <SearchBar/> */}
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
