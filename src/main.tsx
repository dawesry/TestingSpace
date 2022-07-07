import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import BasicAlerts from './_typescript/alert';

ReactDOM.createRoot(document.querySelector("#devalert")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BasicAlerts />
    </StyledEngineProvider>
  </React.StrictMode>
);