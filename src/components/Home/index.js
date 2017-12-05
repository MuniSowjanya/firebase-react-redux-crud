import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  Container,
  Header
} from 'semantic-ui-react';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import PostList from './PostList';
import posts from '../../posts.json';

class HomePage extends Component {
  componentDidMount() {

    /* db.doGetAllPosts().then(snapshot =>
      this.props.onGetAllPosts(map(snapshot.val(), post => post))
    );*/
  }

  onDelete = postId => {
    db.doDeletePost(postId).then(snapshot =>
      this.props.onDeletePost(snapshot.val())
    );
  }

  render() {
    return (
      <Container>
        <Header as='h1' dividing textAlign='center'>Dashboard</Header>
        <section>
          <PostList
            allPosts={posts}
            onDelete={this.onDelete}
          />
        </section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  onDeletePost: (postId) => dispatch({ type: 'POST_DELETED', postId }),
  onGetAllPosts: (posts) => dispatch({ type: 'ALL_POSTS_GOT', posts })
});

export default compose(
  withAuthorization(true),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
