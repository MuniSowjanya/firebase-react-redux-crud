import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  Container,
  Header
} from 'semantic-ui-react';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import PostList from '../Dashboard/PostList';
import posts from '../../posts.json';

const fromObjectToList = (object) =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(fromObjectToList(snapshot.val()))
    );
  }

  render() {
    const { users } = this.props;

    return (
      <Container>
        <Header as='h1' dividing textAlign='center'>Dashboard</Header>
        <section>
          <PostList allPosts={posts}/>
        </section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

export default compose(
  withAuthorization(true),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
