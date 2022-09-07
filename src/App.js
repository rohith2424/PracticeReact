import React from 'react';
import Appbar from './Paterson/Appbar'
import Sidebar from './Paterson/Sidebar';
import Summary from './Paterson/Summary';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid sx={{ background: '#D8D8D9', height: '100vh' }}>
      <Appbar />
      <Grid style={{ display: 'flex', overflowY:'hidden'}}>

         <Sidebar /> 
        <Summary />
      </Grid>

    </Grid> 
  );
}

export default App;
