import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';

import BasicAlerts from './_typescript/alert';
import NavBar from './_typescript/nav';
import NavBarProj from './_typescript/projects-nav';
import CTA from './_typescript/cta';

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

ReactDOM.createRoot(document.querySelector("#cta")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CTA />
    </StyledEngineProvider>
  </React.StrictMode>
);