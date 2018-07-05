import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Header from './Common/Header';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { emailValidate, phoneValidate, zipValidate } from './utils/validations'
import { connect } from 'react-redux'
import { saveForm } from '../actions/save-actions'
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
    width: 220,
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
  		first_name:'',
  		password:'',
      last_name:'',
      email:'',
      phone:'',
      address:'',
      state:'',
      city:'',
      zip:'',
      country:'',
      comments:'',
      open:false,
      err_msg:'',
      message:false
  	}
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
    if(this.state.first_name ==='' || this.state.last_name ==='' || this.state.address =='' || this.state.state ==='' || this.state.city ==='' || this.state.zip ==='' || this.state.country ==='' || this.state.comments ==='' ){
      console.log('test')
        this.setState({
          err_msg:'All fields are mandatory'
        })
      this.handleOpen();
    }else if(!emailValidate(this.state.email)){
        this.setState({
          err_msg:'Please enter a valid email address.'
        })
        this.handleOpen();
      }else if(!phoneValidate(this.state.phone)){
        this.setState({
          err_msg:'Please enter a valid Phone Number.'
        })
        this.handleOpen();
      }else if(!zipValidate(this.state.zip)){
        this.setState({
          err_msg:'Please enter a valid Canadian Zip code.'
        })
        this.handleOpen();
      }else{
        this.props.saveForm(this.state)
      }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(nextProps.user_data.save.progress){
      console.log('submitting form...')
    }
    if(nextProps.user_data.save.saved && !nextProps.user_data.save.error){
      console.log('submitting form...')
       this.setState({message:true, err_msg: "Your Form has been submitted."})
        this.handleOpen();
        setTimeout(()=>{
          this.props.history.push("/")
        },3000)
    }else if(nextProps.user_data.save.error){
      this.setState({message:false, err_msg: "Please try submitting your form again."})
        this.handleOpen();
    }
  }

  render() {
    const { classes } = this.props;
    return (
    	<div>
		<Header/>
    	 <Grid container className={classes.margin} spacing={24} justify="center">
	        <Grid item xs={8}>
	          <Paper className={classes.paper} justify="center"> 
	           <Typography variant="display1" gutterBottom>Contact Form</Typography>
        		      <form className={classes.container} noValidate autoComplete="off">
        		        <TextField
        		          id="name"
                      name="first_name"
        		          label="First Name"
        		          className={classes.textField}
        		          value={this.state.first_name}
        		          onChange={(e)=>{this.handleChange(e)}}
        		          margin="normal"
        		        />
                    <TextField
                      id="lastname"
                      label="Last Name"
                      className={classes.textField}
                      value={this.state.last_name}
                      type="text"
                      name="last_name"
                      onChange={(e)=>{this.handleChange(e);}}
                      margin="normal"
                    />
                    <TextField
                      id="email"
                      label="Email"
                      className={classes.textField}
                      value={this.state.email}
                      type="email"
                      name="email"
                      onChange={(e)=>{this.handleChange(e);}}
                      margin="normal"
                    />
                    <TextField
                      id="phone"
                      label="Phone"
                      className={classes.textField}
                      value={this.state.phone}
                      type="number"
                      name="phone"
                      onChange={(e)=>{this.handleChange(e);}}
                      margin="normal"
                    />
                    <TextField
                      id="address"
                      name="address"
                      label="Address"
                      className={classes.textField}
                      value={this.state.address}
                      type="text"
                      onChange={(e)=>{this.handleChange(e);}}
                      margin="normal"
                    />
                    <TextField
                      id="state"
                      name="state"
                      label="State"
                      className={classes.textField}
                      value={this.state.state}
                      type="text"
                      onChange={(e)=>{this.handleChange(e);}}
                      margin="normal"
                    />
                    <TextField
                      id="city"
                      name="city"
                      label="City"
                      className={classes.textField}
                      value={this.state.city}
                      type="text"
                      onChange={(e)=>{this.handleChange(e);}}
                      margin="normal"
                    />
                    <TextField
                      id="zip"
                      name="zip"
                      label="Zip"
                      className={classes.textField}
                      value={this.state.zip}
                      type="text"
                      onChange={(e)=>{this.handleChange(e);}}
                      margin="normal"
                    />
                    <TextField
                      id="country"
                      name="country"
                      label="Country"
                      className={classes.textField}
                      value={this.state.country}
                      type="text"
                      onChange={(e)=>{this.handleChange(e);}}
                      margin="normal"
                    />
                     <TextField
                        id="full-width"
                        name="comments"
                        label="Comments"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        placeholder="Comments"
                        helperText="Please leave you comment here!"
                        fullWidth
                        onChange={(e)=>{this.handleChange(e);}}
                        margin="normal"
                      />

        	        <Button onClick={ ()=>{this.handleClick(); }} variant="contained" justify="center" color="primary" className={classes.button}>
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
              {this.state.message ? 'Thank You' : 'Error'}
            </Typography>
            <Typography variant="subheading"  id="simple-modal-description">
              {this.state.err_msg}
            </Typography>
          </div>
        </Modal>
		</div>
    );
  }
}

const mapStateToProps = state => ({
  user_data:state
});

const mapDispatchToProps = {
  saveForm
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignIn)));
