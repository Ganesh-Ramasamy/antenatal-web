import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/shared/SuspenseLoader';


const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const Overview = Loader(lazy(() => import('src/Overview')));





// Components
const Patients = Loader(lazy(() => import('src/Patients')));

// Status

const Status404 = Loader(lazy(() => import('src/status/Status404')));
const Status500 = Loader(lazy(() => import('src/status/Status500')));
const StatusComingSoon = Loader(lazy(() => import('src/status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('src/status/Maintenance')));


const routes: RouteObject[] = [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'overview',
        element: (
          <Navigate
            to="/"
            replace
          />
        )
      },

      {
        path: 'status',
        children: [
          {
            path: '',
            element: (
              <Navigate
                to="404"
                replace
              />
            )
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          },
        ]
      },
      {
        path: '*',
        element: <Status404 />
      },
    ]
  },
  
  
  {
    path: '',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="/patients"
            replace
          />
        )
      },
      {
        path: 'patients',
        element: <Patients />
      }
    ]
  }
];

export default routes;
