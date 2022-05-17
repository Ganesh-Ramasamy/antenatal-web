import { useRoutes, BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './router';
import { CALLBACK_PATH } from './constants';

import Callback from './callback/Callback';
import PKCE from './containers/PKCE';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

// import ThemeProvider from './theme/ThemeProvider';
// import { CssBaseline } from '@mui/material';

const App = () => {

  const content = useRoutes(routes);
  console.log('content', content);
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );

  // return (
  //   <ThemeProvider>
  //     <div className="App">

  //       <div className="App-body">
  //         <Routes>
  //           <Route path={CALLBACK_PATH} element={ <Callback />} />
  //           <Route path="/" element={ <PKCE />} />
  //         </Routes>
  //       </div>
  //     </div>
  //   </ThemeProvider>
  // );
  
}
export default App;
