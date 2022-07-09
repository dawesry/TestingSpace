import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';

import BasicAlerts from './modules/alert';
import NavBar from './modules/nav';
import CTA from './modules/cta';
import Featured from './modules/featured';

ReactDOM.createRoot(document.querySelector("#devalert")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BasicAlerts />
    </StyledEngineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector("#navbar")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <NavBar />
    </StyledEngineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector("#featured")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Featured />
    </StyledEngineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector("#cta")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CTA />
    </StyledEngineProvider>
  </React.StrictMode>
);