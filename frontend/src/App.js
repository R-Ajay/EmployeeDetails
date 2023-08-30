import 'bulma/css/bulma.css';
import 'bulma/css/bulma.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import UserProfileCardList from './Components/UserProfileCardList';
import NavBar from './Components/NavBar';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App ">
      <NavBar></NavBar>
      <h1 className="is-size-1 has-text-weight-bold">User Managment</h1>
     <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserProfileCardList></UserProfileCardList>}> </Route>
          <Route path="/AddUser" element={<AddUser></AddUser>}></Route>
        </Routes>
      </div>
     </Router>
     
    </div>
  );
}

export default App;
