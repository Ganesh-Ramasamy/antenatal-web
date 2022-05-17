import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import PKCEState from 'src/components/PKCEState';
import PKCECodeVerifier from 'src/components/PKCECodeVerifier';
import PKCECodeChallenge from 'src/components/PKCECodeChallenge';
import AuthorizationCode from 'src/components/AuthorizationCode';
import AccessToken from 'src/components/AccessToken';
import Resource from 'src/components/Resource';
import React from 'react';

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

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <React.Fragment>
            <PKCEState></PKCEState>
            <PKCECodeVerifier></PKCECodeVerifier>
            <PKCECodeChallenge></PKCECodeChallenge>
            <AuthorizationCode></AuthorizationCode>
            <AccessToken></AccessToken>
            <Resource></Resource> 
        </React.Fragment>
    </Container>
  );
}

export default Hero;
