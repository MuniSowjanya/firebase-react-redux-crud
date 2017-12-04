import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Header
} from 'semantic-ui-react';

import * as routes from '../../constants/routes';
import { db } from '../../firebase';
import withAuthorization from '../Session/withAuthorization';

class CreatePostPage extends React.Component {
  state = { postContent: null };

  createPost = (event, values) => {
    event.preventDefault();
    const { history } = this.props;
    db.doCreatePost(values).then(snapshot => {
      this.props.onCreatePost(snapshot.val());
      history.push(routes.HOME);
    })
  }

  render() {
    return (
      <Container>
        <Header as='h1' dividing textAlign='center'>Create a new post</Header>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePost: (post) => dispatch({ type: 'POST_CREATED', post }),
});

export default compose(
  withAuthorization(true),
  connect(mapStateToProps),
)(withRouter(CreatePostPage));
