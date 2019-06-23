import {makeStyles} from '@material-ui/core/styles';

const userStyles = makeStyles (theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/400x600/?burger,food)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing (8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing (1),
    },
    submit: {
      margin: theme.spacing (3, 0, 2),
    },
  }))

  const classes = console.log(userStyles())


  export default classes