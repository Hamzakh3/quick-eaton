import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

function Navigation () {
  
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
    </Router>
  );
}

export default Navigation;
{/* <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Quick Eaton
              </Typography>
              <Button>
                <Link className="whitesmoke Link" to="/Login">Login</Link>
              </Button>
              <Button>
                <Link className="whitesmoke Link" to="/Register">Register</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </div> */}

        // const useStyles = makeStyles (theme => ({
        //   root: {
        //     flexGrow: 1,
        //   },
        //   menuButton: {
        //     marginRight: theme.spacing (2),
        //   },
        //   title: {
        //     flexGrow: 1,
        //   },
        // }));
        // const classes = useStyles();