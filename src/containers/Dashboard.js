import React from 'react';
import { Container } from 'semantic-ui-react';
import AdminMenu from '../components/Auth/AdminMenu';
import PostList from '../components/Dashboard/PostList';

class Dashboard extends React.Component {
  render()  {
    return (
      <div>
        <AdminMenu />
        <Container>
          <PostList />
        </Container>
      </div>
    );
  }
}

export default Dashboard;
