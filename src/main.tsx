import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import BasicAlerts from './_typescript/alert';
import TestCard from './_typescript/card';

ReactDOM.createRoot(document.querySelector("#porpoalert")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BasicAlerts />
    </StyledEngineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector("#testcard")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <TestCard />
    </StyledEngineProvider>
  </React.StrictMode>
);