import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link ,Redirect, withRouter } from 'react-router-dom'
import { loginUsers, logOutUsers, getUsers } from '../../actions/auth-actions';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends Component {

  constructor(props) {
    super(props);
    this.state={open:false,anchorEl:null}
  }
  componentDidMount(){
    this.props.getUsers();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.users.user.users,'logged in user');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUsers('sachin');
  }

  handleClick(e){
    e.preventDefault();
    // this.props.loginUsers('sachin');
  }
  handleMenu = event => {
    this.setState({ open:!this.state.open });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout=()=>{
    console.log('loging out...')
    this.props.logOutUsers();
    this.props.history.replace('/')

  }
  render() {
    const { classes } = this.props
    const { users_data }=this.props.users.user
    const anchorEl = this.state.anchorEl;
    const open = Boolean(this.state.open)
    return (
      <div className="header">
        <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            React-Redux
          </Typography>
          <Link to="/"><Button color="inherit">Home</Button></Link>
          <Link to="/contactform"><Button color="inherit" onClick={()=>{console.log('Contact Form')}}>Contact Form</Button></Link>

          {(this.props.users && this.props.users.user.logged_in) && (
            <Link to="admin"><Button color="inherit" onClick={()=>{console.log('Administration')}}>Administration</Button></Link>
          )}
           {(this.props.users && !this.props.users.user.logged_in) && (
              <Link to="signin"><Button color="inherit" onClick={()=>{console.log('Login')}}>Login</Button></Link>
          )}
          {(this.props.users && this.props.users.user.logged_in) && (
                  <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={()=>{this.handleLogout();}}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
          )}
        </Toolbar>
      </AppBar>
        
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users:state
});

const mapDispatchToProps = {
  loginUsers,
  logOutUsers,
  getUsers
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Header)));
