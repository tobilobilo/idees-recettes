import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from "react-router-dom";
import Button from '@mui/material/Button';
import foodLogo from './assets/svg/food-logo.svg'

const drawerWidth = 240;
const navItems = [
    {name: 'Accueil', path: '/'}, 
    {name: 'Glossaire', path: '/glossaire'}, 
    {name: 'Admin', path: '/admin'}
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={foodLogo} className="logo-food" alt="logo Idée Recette" width="70" />
      </Typography>
      <Divider />
      <List>
        {navItems.map(({name, path}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton component={RouterLink} to={path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1, alignItems: 'center', gap: '1rem', display: { xs: 'none', sm: 'flex' } }}
          >
            <img src={foodLogo} className="logo-food svg-white" alt="logo Idée Recette" width="40" />
            Mes Idées Recettes
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map(({name, path}) => (
              <Button key={name} component={RouterLink} to={path} sx={{ color: '#fff' }}>
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
