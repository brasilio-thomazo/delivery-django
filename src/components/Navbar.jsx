import React, { FunctionComponent, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import useStyle from '../styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InputPhone from './InputPhone';


const Navbar = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    props.setDrawer(open);
  }, [open]);

  return <React.Fragment>
    <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
      <Toolbar>
        <IconButton onClick={() => { setOpen(true) }} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.brand}>
          Delivery v1.0.1
        </Typography>
        <Button>Entrar</Button>
      </Toolbar>
    </AppBar>
    <Drawer variant="persistent" open={props.getDrawer()} anchor="left" className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => { setOpen(false) }}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List component="nav">
        <ListItem button component={Link} to="/gui/clients">
          <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Estoque" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Produtos" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Vendas" />
        </ListItem>
      </List>
    </Drawer>
  </React.Fragment>
}

export default Navbar;