import { useRoutes, BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './router';


import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

// import ThemeProvider from './theme/ThemeProvider';
// import { CssBaseline } from '@mui/material';
import { useKeycloak } from '@react-keycloak/web'

const App = () => {

  const content = useRoutes(routes);
  const { initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }

  
  console.log('content', content);
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
