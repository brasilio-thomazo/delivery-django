import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';

const App = () => {
    return <div>
        <CssBaseline />
        <Navbar />
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));