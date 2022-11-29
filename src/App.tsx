import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/login/Login';



function App() {
  return (
    <>
    {/* <Grid container spacing={3}>
      <Grid item xs={12}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Home />
      </Grid>
    </Grid> */}


   <Router>
    <Navbar />
     <Routes>
       <Route path='/' element={<Login />}/>
       <Route path='/Home' element={<Home />} />
    <Home />
       </Routes>
    <Footer />
     </Router> */
    </>
  );
}

export default App;
