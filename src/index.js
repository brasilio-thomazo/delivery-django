import clsx from 'clsx';
import { CssBaseline, useTheme } from '@material-ui/core';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Clients from './pages/clients';
import useStyle from './styles';

const App = () => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleSetDrawer = (v) => {
    setDrawerOpen(v);
  };

  const handleGetDrawer = () => {
    return drawerOpen;
  }


  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar setDrawer={setDrawerOpen} getDrawer={handleGetDrawer} />
        <main className={clsx(classes.content, { [classes.contentShift]: drawerOpen })}>
          <div className={classes.drawerHeader} />
          <Route path="/gui/clients" component={Clients} />
          <p>{drawerOpen ? 'TRUE' : 'FALSE'}</p>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));