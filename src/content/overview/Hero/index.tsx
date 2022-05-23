import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';

import { Link as RouterLink, Navigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import React from 'react';
import { useKeycloak } from '@react-keycloak/web'
import { useCallback } from 'react'

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
  const { keycloak } = useKeycloak();
  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak])



  if (keycloak?.authenticated) {
    console.log("keycloak?.authenticated", keycloak?.authenticated);
    return (
      <Navigate
            to={{
              pathname: '/components/patients'
            }}
          />
    );
  }else{
    return (
        <div>
          <button type="button" onClick={login}>
            Login
          </button>
        </div>
    );

  }
}

export default Hero;
