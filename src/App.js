import React, { Component } from 'react';
import Home from './Components/Home';
import ContactForm from './Components/ContactForm';
import {connect} from 'react-redux';
import SignIn from './Components/SignIn'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { getUsers } from './actions/user-action';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });


class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
    
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/contactform" component={ContactForm} />
            <Route exact path="" component={Home} />
          </Switch>
      </Router>
    </div>
    );
  }
}


export default withStyles(styles)(App);
