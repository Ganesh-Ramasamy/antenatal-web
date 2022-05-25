import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/shared/PageTitle';


import PageTitleWrapper from 'src/shared/PageTitleWrapper';
import { Container} from '@mui/material';
import Footer from 'src/shared/Footer';
import { Outlet, Navigate } from 'react-router-dom';

function Patients() {

  return (
    <>
      <Helmet>
        <title>Patients</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Patients" />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Outlet></Outlet>
      </Container>
      <Footer />
    </>
  );
}

export default Patients;
