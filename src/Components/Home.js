import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Common/Header';
import {
  getUsers
} from '../actions/user-action';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
 	textAlign: 'center',
  },
   center: {
    textAlign: 'center',
  },
  margin:{marginTop:'40px'}
});

class Home extends Component {

componentDidMount(){
	console.log('You are on Home page')
}
  render() {
  	const { classes } = this.props

    return (
      <div className="App">
        <Header />
        	 <Grid container className={classes.margin} spacing={24} justify="center">
		      <Grid item xs={12} >
	            <Typography className={classes.center} variant="display3" id="modal-title">
	            	Welcome To React-Redux 
	            </Typography>
		       </Grid>
		      </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
