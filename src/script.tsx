import * as ReactDOM from "react-dom/client";
import * as React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './alert.tsx';

ReactDOM.createRoot(document.querySelector("#alert")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
);