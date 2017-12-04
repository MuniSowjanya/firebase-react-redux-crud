const INITIAL_STATE = {
  posts: [],
};

function postsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'POST_CREATED':
      return (state, action) => ({
        ...state,
        posts: state.posts.push(action.post)
      });
    case 'POST_DELETED':
      return (state, action) => ({
        ...state,
        posts: state.posts.push(action.postId)
      });
    case 'GOT_ALL_POSTS':
      return (state, action) => ({
        ...state,
        posts: action.posts
      });
    default : return state;
  }
}

export default postsReducer;
