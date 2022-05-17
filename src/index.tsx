import App from './App';
import ReactDOM from 'react-dom';
import 'src/utils/chart';
import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';
import { createStore } from 'redux';
import reducer from './store/reducer'

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  </Provider>
,
  document.getElementById('root')
);

serviceWorker.unregister();
