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
      <NavBar/>
      <h1>Henry Countries</h1>
      <Route exact path="/countries">
        {/* <SearchBar/> */}
        <Countries />
      </Route>
      <Route path="/countries/:id/details">
        <Details/>
      </Route>
      <Route path="/activities">
        <ActivityForm/>
      </Route>
    </div>
  );
}

export default App;
