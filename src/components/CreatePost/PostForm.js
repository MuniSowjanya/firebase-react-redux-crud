import React from 'react'
import { Button, Dropdown, Form , Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import PostEditor from './PostEditor';

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
];

export default class PostForm extends React.Component {
  state = { content: '', description: '', tags: [], title: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { content, description, tags, title } = this.state;
    const { onCreatePost } = this.props;

    return (
      <Form onSubmit={onCreatePost}>
        <Form.Field>
          <label>Post Title</label>
          <Input
            name='title'
            value={title}
            onChange={this.handleChange}
            type='text'
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Input
            name='description'
            value={description}
            onChange={this.handleChange}
            type='text'
          />
        </Form.Field>
        <Form.Field>
          <label>Post Body (markdown syntax)</label>
          <PostEditor
            source={this.state.content}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <Dropdown
            name='tags'
            placeholder='Tags'
            fluid
            multiple
            selection
            options={options}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button
          fluid
          primary
          type='submit'
        >
          Submit
        </Button>
      </Form>
    );
  }
}
