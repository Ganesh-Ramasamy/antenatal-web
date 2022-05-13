import { Helmet } from 'react-helmet-async';

import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container } from '@mui/material';

import Footer from 'src/components/Footer';

function Patients() {

  return (
    <>
      <Helmet>
        <title>Patient registration - Component</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Patient registration"
          subHeading="Register patient."/>
      </PageTitleWrapper>
      <Container maxWidth="lg">

      </Container>
      <Footer />
    </>
  );
}

export default Patients;
