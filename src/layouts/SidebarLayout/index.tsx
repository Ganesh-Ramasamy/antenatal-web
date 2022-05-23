import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import { useKeycloak } from '@react-keycloak/web'
import Overview from 'src/content/overview';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`
);

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const { keycloak } = useKeycloak();

  if (keycloak?.authenticated) {
    return (
      <>
        <Sidebar />
        <MainWrapper>
          <Header />
          <MainContent>
            <Outlet />
          </MainContent>
        </MainWrapper>
      </>
    );
  }else{
    return (

      <Navigate
            to={{
              pathname: '/overview'
            }}
          />

    );
  }

};

export default SidebarLayout;
