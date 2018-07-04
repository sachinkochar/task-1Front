import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { loginUsers } from '../../actions/auth-actions';
import { getUsers } from '../../actions/user-action';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    this.state={users:''}
  }
  componentDidMount(){
    this.props.getUsers();
  }
  componentWillReceiveProps(props,nextProps) {
    console.log(nextProps,'next props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('name');
    this.props.loginUsers('sachin');
  }

  handleClick(e){
    console.log(this.props,'props')
    e.preventDefault();
    console.log('name');
    // this.props.loginUsers('sachin');
  }

  render() {
    console.log(this.props,'test')
    const { classes } = this.props
    return (
      <div >
        <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            React-Redux
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/contactform">Contact Form</Button>
          <Button color="inherit" href="/admin">Administration</Button>
          <Button color="inherit" href="/signin">Login</Button>
        </Toolbar>
      </AppBar>
        
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users:state.users,
  fetched:state.fetched,
  progress:state.progress
});

const mapDispatchToProps = {
  loginUsers,
  getUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Header));
