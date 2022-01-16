import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Box sx={{flexGrow:1, display: 'flex'}}>
          <Typography variant="h4" className={classes.logo} noWrap>Transparency</Typography>
          <Link to="/" className={classes.navLink} sx={{ my: 2, color: 'white', display: 'block' }}><Button>Home</Button></Link>
          <Link to="/about" className={classes.navLink}><Button>About</Button></Link>
          <Link to="/records" className={classes.navLink}><Button>Records</Button></Link>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;