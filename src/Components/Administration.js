import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
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
import { connect } from 'react-redux';
import { getForm } from '../actions/retrieve-action';
import { getUsers } from '../actions/auth-actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    width: 120,
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
   table: {
    minWidth: 700,
  },
   tableWrapper: {
    overflowX: 'auto',
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
  const top = 40;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class Administration extends React.Component {
  constructor(props){
  	super(props);
    this.state={
      open:false,
      title:'',
      first_name:'',
      last_name:'',
      Comment:"",
      phone:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      country:'',
      popup_data:{}
    }
  }

  componentDidMount(){
      this.props.getUsers();
      this.props.getForm();
  }
  componentWillReceiveProps(nextProps){
      console.log(nextProps,'next Props')
      if(!nextProps.formData.user.logged_in){
        this.props.history.push("/")
      }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleRowClick=(i)=>{
    console.log(i)
    console.log(this.props.formData.retrieve.data.data[i],'row data')
    let row_data=this.props.formData.retrieve.data.data[i];
    this.setState({title:row_data.first_name,err_msg:row_data.first_name, popup_data:{...row_data}})
    this.handleOpen();

  }
  render() {
    const { classes } = this.props;

    return (
	 <div>
		<Header/>
    	 <Grid container className={classes.margin} spacing={16} justify="center">
        <Typography variant="display2" gutterBottom>Users Form Data</Typography>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="title" gutterBottom>Recent Submissions</Typography>
               <div className={classes.tableWrapper}>
                {(this.props.formData.save && this.props.formData.save.data.length > 0) ?
                  (
                    <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell >Last Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell numeric>Phone</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(this.props.formData.save && this.props.formData.save.data) && (
                        this.props.formData.save.data.map((userData,i) => {
                          return(
                          <TableRow key={i} onClick={()=>{this.handleRowClick(i);}}>
                            <TableCell component="th" scope="row">{userData.first_name}</TableCell>
                            <TableCell component="th" scope="row">{userData.last_name}</TableCell>
                            <TableCell component="th" scope="row">{userData.email}</TableCell>
                            <TableCell component="th" scope="row">{userData.phone}</TableCell>
                          </TableRow>
                          )
                        })
                      )}
                      
                    </TableBody>
                    </Table>
                  ): 'No Recent Recods Found'}


              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} >
            <Paper className={classes.paper} >
                <Typography variant="title" gutterBottom>Records from Database</Typography>
              <div className={classes.tableWrapper}>
              {(this.props.formData.retrieve.data && this.props.formData.retrieve.data) ?(

                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell >Last Name</TableCell>
                      <TableCell >Email</TableCell>
                      <TableCell numeric>Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(this.props.formData.retrieve.data && this.props.formData.retrieve.data.data) && (
                      this.props.formData.retrieve.data.data.map((userData,i) => {
                        return(
                        <TableRow key={i} onClick={()=>{this.handleRowClick(i);}}>
                          <TableCell component="th" scope="row">{userData.first_name}</TableCell>
                          <TableCell component="th" scope="row">{userData.last_name}</TableCell>
                          <TableCell component="th" scope="row">{userData.email}</TableCell>
                          <TableCell component="th" scope="row">{userData.phone}</TableCell>
                        </TableRow>
                        )
                      })
                    )}
                  </TableBody>
                </Table>) : 'No Records found in database'
              }
              </div>
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
              {this.state.title}
            </Typography>
                  <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                      id="name"
                      name="first_name"
                      label="First Name"
                      className={classes.textField}
                      value={this.state.popup_data.first_name}
                      onChange={(e)=>{this.handleChange(e)}}
                      margin="normal"
                      disabled
                    />
                    <TextField
                      id="lastname"
                      label="Last Name"
                      className={classes.textField}
                      value={this.state.popup_data.last_name}
                      type="text"
                      name="last_name"
                      margin="normal"
                      disabled
                    />
                    <TextField
                      id="email"
                      label="Email"
                      className={classes.textField}
                      value={this.state.popup_data.email}
                      type="email"
                      name="email"
                      margin="normal"
                      disabled
                    />
                    <TextField
                      id="phone"
                      label="Phone"
                      className={classes.textField}
                      value={this.state.popup_data.phone}
                      type="number"
                      name="phone"
                      margin="normal"
                      disabled
                    />
                    <TextField
                      id="address"
                      name="address"
                      label="Address"
                      className={classes.textField}
                      value={this.state.popup_data.address}
                      type="text"
                      margin="normal"
                      disabled
                    />
                    <TextField
                      id="state"
                      name="state"
                      label="State"
                      className={classes.textField}
                      value={this.state.popup_data.state}
                      type="text"
                      margin="normal"
                      disabled
                    />
                    <TextField
                      id="city"
                      name="city"
                      label="City"
                      className={classes.textField}
                      value={this.state.popup_data.city}
                      type="text"
                      margin="normal"
                      disabled
                    />
                    <TextField
                      id="zip"
                      name="zip"
                      label="Zip"
                      className={classes.textField}
                      value={this.state.popup_data.zip}
                      type="text"
                      margin="normal"
                      disabled
                    />
                    <TextField
                      id="country"
                      name="country"
                      label="Country"
                      className={classes.textField}
                      value={this.state.popup_data.country}
                      type="text"
                      margin="normal"
                      disabled
                    />
                     <TextField
                        id="full-width"
                        name="comments"
                        label="Comments"
                        value={this.state.popup_data.Comment}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        placeholder="Comments"
                        fullWidth
                        margin="normal"
                        disabled  
                      />
                    
                  </form>
          </div>
        </Modal>
		</div>
    );
  }
}

const mapStateToProps = state => ({
  formData:state,
});

const mapDispatchToProps = {
  getForm,
  getUsers
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Administration)));
