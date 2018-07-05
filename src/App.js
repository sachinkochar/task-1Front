import React, { Component } from 'react';
import Home from './Components/Home';
import ContactForm from './Components/ContactForm';
import {connect} from 'react-redux';
import SignIn from './Components/SignIn'
import Administration from './Components/Administration'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { getUsers } from './actions/user-action';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './css/custom.css'
const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <BrowserRouter >
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/contactform" component={ContactForm} />
            <Route path="/admin" component={Administration} />
            <Route path="" component={Home} />
          </Switch>
      </BrowserRouter>
    </div>
    );
  }
}


export default withStyles(styles)(App);
