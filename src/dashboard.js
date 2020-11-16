import React from 'react';
import { Helmet } from 'react-helmet';
import { useAuthState } from './auth';
import UserContent from './components/layout/user-content';
import AdminContent from './components/layout/admin-content';
import Body from './components/layout/body';

const Dashboard = () => {
  const { user } = useAuthState().user;
  // if (!user && typeof window !== 'undefined') {
  //   Router.replace('/');
  //   return null;
  // }

  return (
    <>
      <Helmet>
        <title>User Dashboard</title>
      </Helmet>

      <Body>
        {
          user && (user.role === 'Admin') ? (
            <AdminContent
              user={user}
            />
          ) : (
            <UserContent
              user={user}
            />
          )
        }
      </Body>
    </>
  );
};

export default Dashboard;
