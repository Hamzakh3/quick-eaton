import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Select from 'react-materialize';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import logo from '../images/logo.png';
import {UserSignUp} from '../config/firebase'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing (0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing (3),
  },
  button: {
    margin: theme.spacing (3, 0, 2),
  },
});

class Register extends React.Component {
  constructor () {
    super ();
    this.state = {
      user: true,
      fullName:'',
      email:'',
      pass:'',
      age:'',
      gender:'',
      country:'',
      city:''
    };
  }

  componentDidMount () {}

  eventHandler (e) {
    // console.log (e.target);
    const label = e.target.name;
    const val = e.target.value;
    this.setState ({
      label: val,
    });
  }

  USignUp(){
    const{fullName, email, pass, age, gender, country, city} = this.state
    const userObj={
      fullName,
      email,
      age,
      gender,
      country,
      city
    }
    UserSignUp(userObj, pass)
  }

  render () {
    const {user} = this.state;
    const {classes} = this.props;
    return (
      <div
        style={{
          background: 'linear-gradient( rgba(245, 245, 245, 0.7) 100%, rgba(245, 245, 245, 0.7)100%), url(https://source.unsplash.com/700x500/?burger)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'lighten',
        }}
      >

        <Container
          component="main"
          maxWidth="sm"
          style={{
            background: '',
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          
          <CssBaseline />
          <div className={classes.paper}>
            <img src={logo} alt="Eaton-Logo" />
            
            <Grid container>
            <Grid item xs={5} md={5} sm={5}>
              <Button
                type="button"
                fullWidth
                onClick={() => {
                  this.setState ({user: true});
                  console.log (user);
                }}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                User
              </Button>
            </Grid>
            <Grid item xs={2} md={2} sm={2} />
            <Grid item xs={5} md={5} sm={5}>
              <Button
                type="button"
                fullWidth
                onClick={() => {
                  this.setState ({user: false});
                  console.log (user);
                }}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Restaurent
              </Button>
            </Grid>
          </Grid>
          <Typography component="h1" variant="h5">
              {!user ? 'Restaurent SignUp' : 'User SignUp'}
            </Typography>
            {!user ? this.renderRestaurentForm () : this.renderUserForm ()}
          </div>
        </Container>
      </div>
    );
  }
  renderRestaurentForm () {
    const {classes} = this.props;

    return (
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="text"
              id="fullName"
              label="Full Name"
              name="fullName"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="text"
              id="restName"
              label="Restaurent Name"
              name="restName"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="file"
              id="restName"
              name="restName"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="pass"
              label="Password"
              type="password"
              id="pass"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="rePass"
              label="Confirm Password"
              type="password"
              id="rePass"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
            <select
              id="country"
              name="country"
              onChange={e => {
                this.eventHandler (e);
              }}
            >
              <option value="" selected disabled>
                Select Country
              </option>
              <option value="1">
                Pakistan
              </option>
              <option value="2">
                India
              </option>
              <option value="3">
                China
              </option>
            </select>
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
            <select
              id="city"
              name="city"
              onChange={e => {
                this.eventHandler (e);
              }}
            >
              <option value="" selected disabled>
                Select City
              </option>
              <option value="1">
                Karachi
              </option>
              <option value="2">
                Lahore
              </option>
              <option value="3">
                Islamabad
              </option>
            </select>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="accepted" color="primary" />}
              label="I read terms and condition"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    );
  }
  renderUserForm () {
    const {classes} = this.props;

    return (
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="text"
              id="fullName"
              label="Full Name"
              name="fullName"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="pass"
              label="Password"
              type="password"
              id="pass"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="rePass"
              label="Confirm Password"
              type="password"
              id="rePass"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={4} sm={6} md={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="age"
              label="Age"
              type="text"
              id="age"
              onChange={e => {
                this.eventHandler (e);
              }}
            />
          </Grid>
          <Grid item xs={8} sm={6} md={6}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              className={classes.group}
              value={this.state.gender}
              onChange={e => {
                this.eventHandler (e);
              }}
              row={true}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
                labelPlacement="end"
                style={{display: 'inline'}}
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
                labelPlacement="end"
                style={{display: 'inline'}}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
            <select
              id="country"
              name="country"
              onChange={e => {
                this.eventHandler (e);
              }}
            >
              <option value="" selected disabled>
                Select Country
              </option>
              <option value="1">
                Pakistan
              </option>
              <option value="2">
                India
              </option>
              <option value="3">
                China
              </option>
            </select>
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
            <select
              id="city"
              name="city"
              onChange={e => {
                this.eventHandler (e);
              }}
            >
              <option value="" selected disabled>
                Select City
              </option>
              <option value="1">
                Karachi
              </option>
              <option value="2">
                Lahore
              </option>
              <option value="3">
                Islamabad
              </option>
            </select>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="accepted" color="primary" />}
              label="I read terms and condition"
            />
          </Grid>
        </Grid>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={()=>{this.USignUp()}}
          className={classes.button}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    );
  }
}
Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (Register);
