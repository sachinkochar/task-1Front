import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Header from './Common/Header';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import { loginUsers, getUsers } from '../actions/auth-actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    textAlign:'center',
    justify:'center',
    width: '100%',
  },
  menu: {
    width: 200,
  },
   paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
   paperModal: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign:'center'
  },
  margin:{marginTop:'40px'}
});


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class SignIn extends React.Component {
  constructor(props){
  	super(props);
  	this.state={
  		user:{},
  		password:'',
  		open:false
  	}
  }

  componentWillMount(){
    this.props.getUsers();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick=()=>{
  	if(this.state.user === '' || this.state.password === ''){
  		this.handleOpen();
  	}else{
  		let name=this.state.user;
  		let password= this.state.password;
  		this.props.loginUsers({name:name,password:password})
  	}
  }
	componentWillReceiveProps(nextProps){
	  	console.log(nextProps,'nextProps')
      if(nextProps.users_data.user.progress){
        console.log('loggin in....')
      }
	}



  render() {
    const { classes } = this.props;
    return (
    	<div>
		<Header/>
    	{this.props.progress && (
    		<div>loading.....</div>
    		)}
    	 <Grid container className={classes.margin} spacing={24} justify="center">
	        <Grid item xs={4}>
	          <Paper className={classes.paper} justify="center"> 
	           <Typography variant="display1" gutterBottom>Login</Typography>
		      <form className={classes.container} noValidate autoComplete="off">
		        <TextField
		          id="error"
		          label="Username"
		          name="user"
		          className={classes.textField}
		          value={this.state.name}
		          onChange={(e)=>{this.handleChange(e)}}
		          margin="normal"
		        />

		        <TextField
		          id="password-input"
		          label="Password"
		          name="password"
		          value={this.state.password}
		          className={classes.textField}
		          onChange={(e)=>{this.handleChange(e)}}
		          type="password"
		          autoComplete="current-password"
		          margin="normal"
		        />
		        <Button onClick={ ()=>{this.handleClick(); } } variant="contained" justify="center" color="primary" className={classes.button}>
				    Submit
				</Button>
		        
		      </form>
	          
	          </Paper>
	        </Grid>
	    </Grid>
	    <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paperModal}>
            <Typography variant="title" id="modal-title">
              Error
            </Typography>
            <Typography variant="subheading"  id="simple-modal-description">
              Please Enter Username and Password to login.
            </Typography>
          </div>
        </Modal>
         {this.props.users_data && this.props.users_data.user.logged_in && (
          <Redirect to={{
              pathname: '/',
            }}/>
          )}
		</div>
    );
  }
}
const mapStateToProps = state => ({
  users_data:state
});

const mapDispatchToProps = {
  loginUsers,
  getUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignIn));
