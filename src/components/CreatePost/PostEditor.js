import React from 'react';
import { Editor, EditorState } from 'draft-js';
import './PostEditor.css'

export default class PostEditor extends React.Component {
  state = { editorState: EditorState.createEmpty() };

  onChange = editorState => this.setState({ editorState });

  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}
