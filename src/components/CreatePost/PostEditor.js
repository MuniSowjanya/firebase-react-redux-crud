import React from 'react';
import { Grid, Segment, TextArea } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import './PostEditor.css'

const PostEditor = ({ onChange, source }) => (
  <Grid columns={2} stackable>
    <Grid.Column>
      <TextArea name='content' onInput={onChange} style={{ minHeight: 400 }} />
    </Grid.Column>
    <Grid.Column>
      <Segment style={{ minHeight: 400 }}>
        <ReactMarkdown source={source}  />
      </Segment>
    </Grid.Column>
  </Grid>
);

export default PostEditor;
