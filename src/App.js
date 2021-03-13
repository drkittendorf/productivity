// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Timer from './components/Timer';
import About from './pages/about';
import Generic from './pages/generic';

// import Contact from './pages/contact'
// import Portfolio from './pages/portfolio'
import Error from "./pages/errPage";

function App() {
  return (
<BrowserRouter>
    <Header /> 
    <Navbar />
    <Timer />
   
    
        <Switch>
                <Route exact path={["/productivity/"]}>
                </Route> 
            
                <Route exact path={["/productivity/about"]}>
            <About/>
                </Route> 

                <Route exact path={["/productivity/a"]}>
            <Generic/>
                </Route>

                <Route exact path={["/productivity/b"]}>
            <Generic/>
                </Route>

                <Route exact path={["/productivity/c"]}>
            <Generic/>
                </Route>
                
                <Route>
            <Error/>
                </Route> 
        </Switch>                    
    <Footer />

</BrowserRouter>      
  );
}

export default App;
