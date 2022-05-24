import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import { useState } from 'react';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

function Patients() {

  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [value, setValue] = useState(30);

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Patients" />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Register Patient" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue="Hello World"
                    />
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                    />
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                    <TextField
                      id="outlined-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField
                      id="outlined-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="filled-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="filled"
                    />
                    <TextField
                      disabled
                      id="filled-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="filled"
                    />
                    <TextField
                      id="filled-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="filled"
                    />
                    <TextField
                      id="filled-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                    <TextField
                      id="filled-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                    />
                    <TextField
                      id="filled-search"
                      label="Search field"
                      type="search"
                      variant="filled"
                    />
                    <TextField
                      id="filled-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                      variant="filled"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="standard"
                    />
                    <TextField
                      disabled
                      id="standard-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="standard"
                    />
                    <TextField
                      id="standard-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="standard"
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="standard-search"
                      label="Search field"
                      type="search"
                      variant="standard"
                    />
                    <TextField
                      id="standard-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                      variant="standard"
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          

        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Patients;
