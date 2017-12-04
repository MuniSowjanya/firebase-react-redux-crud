import { db } from './firebase';

// User API

export const doCreatePost = (values) =>
  db.ref('posts').push({
    title: values.title,
    description: values.description,
    content: values.content,
    isPublished: values.isPublished,
    slug: values.slug,
    timestamp: new Date()
  });

export const doDeletePost = (id) =>
  db.ref(`posts/${id}`).remove();

export const doGetAllPosts = () =>
  db.ref('posts').orderByKey;

// Other db APIs ...
