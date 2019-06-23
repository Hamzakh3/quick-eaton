// import React from 'react';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import {makeStyles} from '@material-ui/core/styles';
// import logo from '../../images/logo.png';

// // https://source.unsplash.com/random

// class Login extends React.Component {
//   constructor () {
//     super ();
//     this.state = {};
//   }
  
//   componentDidMount() {
//     console.log('classes')
//     const classes = makeStyles (theme => ({
//         root: {
//           height: '100vh',
//         },
//         image: {
//           backgroundImage: 'url(https://source.unsplash.com/400x600/?burger,food)',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         },
//         paper: {
//           margin: theme.spacing (8, 4),
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         },
//         form: {
//           width: '100%', // Fix IE 11 issue.
//           marginTop: theme.spacing (1),
//         },
//         submit: {
//           margin: theme.spacing (3, 0, 2),
//         },
//       }));
      
//     this.setState ({classes: classes});
//   }
//   render () {
//     const {classes} = this.state;
//     console.log(classes)
//     return (
//       <Grid container component="main" className={classes.root}>
//         <CssBaseline />
//         <Grid item xs={false} sm={5} md={7} className={classes.image} />
//         <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
//           <div className={classes.paper}>
//             <img src={logo} alt="Eaton-Logo" />
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <form className={classes.form} noValidate>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="button"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//                 onClick={() => {
//                   console.log ('Login');
//                 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link
//                     onClick={() => {
//                       this.props.register = true;
//                       console.log (this.props.register);
//                     }}
//                     variant="body2"
//                   >
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </form>
//           </div>
//         </Grid>
//       </Grid>
//     );
//   }
// }

// export default Login;
// // 