import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

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