import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

//styles
import './App.css';

//pages
import Users from "./pages/Users";

//components
import Header from "./components/Header";


class App extends Component {


  render() {
    return (
      <div className="App">

        <Header />

        <Switch>
          <Route path="/" exact component={Users} />
        </Switch>

      </div>
    );
  }
}

export default App;
