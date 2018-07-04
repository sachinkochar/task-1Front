import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Common/Header'
import {
  getUsers
} from '../actions/user-action';

class Home extends Component {


  render() {


    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default Home;
