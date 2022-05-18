import App from './App';


import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';
import { createStore } from 'redux';
import reducer from './store/reducer'
import ReactDOM from "react-dom/client";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  </Provider>
);

serviceWorker.unregister();
