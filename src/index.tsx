import App from './App';


import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';
import { createStore } from 'redux';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import ReactDOM from "react-dom/client";
import keycloak from './keycloak'

const root = ReactDOM.createRoot(document.getElementById("root"));


const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
}

root.render(
  
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <ReactKeycloakProvider
            authClient={keycloak}
            onEvent={eventLogger}
            onTokens={tokenLogger}
          >
            <App />
          </ReactKeycloakProvider>
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  
);

serviceWorker.unregister();
