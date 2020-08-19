import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

//styles
import './App.css';

//pages
import Users from "./pages/Users";

//components
import Header from "./components/Header";


class App extends Component {

  state = {
    search: ''
  };

  handleSearch = (value) => {
    this.setState({
      search: value
    });
  };

  render() {

    const {search} = this.state;

    return (
      <div className="App">

        <Header onSearch={this.handleSearch} />

        <Switch>
          <Route path="/" exact render={() => <Users searchedWord={search} />} />
        </Switch>

      </div>
    );
  }
}

export default App;
