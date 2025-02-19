// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import {makeStyles} from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import logo from '../../images/logo.png';

// class Register extends React.Component {
//   constructor () {
//     super ();
//     this.state = {};
//   }

//   useStyles () {
//     makeStyles (theme => ({
//       '@global': {
//         body: {
//           backgroundColor: theme.palette.common.white,
//         },
//       },
//       paper: {
//         marginTop: theme.spacing (0),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       },
//       form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing (3),
//       },
//       submit: {
//         margin: theme.spacing (3, 0, 2),
//       },
//     }));
//   }

//   componentDidMount () {
//     const classes = this.useStyles ();
//     this.setState ({classes: classes});
//   }

//   render () {
//     const {classes} = this.setState
//     return (
//       <div
//         style={{
//           background: 'linear-gradient( rgba(245, 245, 245, 0.7) 100%, rgba(245, 245, 245, 0.7)100%), url(https://source.unsplash.com/700x500/?burger)',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '100vh',
//           backgroundBlendMode: 'lighten',
//         }}
//       >
//         <Container
//           component="main"
//           maxWidth="sm"
//           style={{
//             background: '',
//             display: 'flex',
//             minHeight: '100vh',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <CssBaseline />
//           <div className={classes.paper}>
//             <img src={logo} alt="Eaton-Logo" />
//             <Typography component="h1" variant="h5">
//               Sign up
//             </Typography>
//             <form className={classes.form} noValidate>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     autoComplete="fname"
//                     name="firstName"
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="firstName"
//                     label="First Name"
//                     autoFocus
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="lastName"
//                     label="Last Name"
//                     name="lastName"
//                     autoComplete="lname"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox value="allowExtraEmails" color="primary" />
//                     }
//                     label="I want to receive inspiration, marketing promotions and updates via email."
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//               >
//                 Sign Up
//               </Button>
//               <Grid container justify="flex-end">
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     Already have an account? Sign in
//                   </Link>
//                 </Grid>
//               </Grid>
//             </form>
//           </div>
//         </Container>
//       </div>
//     );
//   }
// };

// export default Register