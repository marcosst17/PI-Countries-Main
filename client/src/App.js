import './App.css';
import Countries from './components/Countries';
import { Route } from 'react-router';
import SearchBar from './components/SearchBar';
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
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Route exact path="/ciudades">
        <SearchBar/>
        <Countries />
      </Route>
    </div>
  );
}

export default App;
