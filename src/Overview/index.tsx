import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'src/shared/Logo';
import { useKeycloak } from '@react-keycloak/web'
import { useCallback } from 'react'
import { Navigate } from 'react-router-dom';

import { Button } from '@mui/material';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {

  const { keycloak } = useKeycloak();
  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak])

  if (keycloak?.authenticated) {
    console.log("keycloak?.authenticated", keycloak?.authenticated);
    return (
      <Navigate
            to={{
              pathname: '/patients'
            }}
            replace
          />
    );
  }else{
    return (
      <OverviewWrapper>
      <Helmet>
        <title>Antenatal</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }} style={{ display:'flex', justifyContent:'center' }}>
          
            <Button sx={{ margin: 1 }} variant="contained" color="primary"
              size="large"
              onClick={login}>
              Sign in
            </Button>
          
        </Card>
      </Container>
    </OverviewWrapper>
    );

  }
}

export default Overview;
