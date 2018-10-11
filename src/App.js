import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              ToDo-It
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
