import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Error from './Error';
import Services from './Services';
import User from './User';
import Search from './Search';

const App = () => {

  const Name = () => {
    return <h1>Hello, I m a Name Page</h1>;
  }

  return ( 
    <>
    <Menu/>
      <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/services' component={Services} />
          <Route path='/contact/Name' component={Name} />
          <Route path='/user/:fname/:lname' component={User} />
          <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
