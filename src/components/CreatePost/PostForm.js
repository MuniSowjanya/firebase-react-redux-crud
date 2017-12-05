import React from 'react'
import { Button, Dropdown, Form , Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class PostForm extends React.Component {
  state = { content: '', description: '', tags: [], title: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { content, description, tags, title } = this.state;
    const { options, onCreatePost } = this.props;
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
            value={description}
            onChange={this.handleChange}
            type='text'
          />
        </Form.Field>
        <Form.Field>
          <label>Post Body (markdown syntax)</label>
          <Form.TextArea
            minHeight={400}
            onChange={this.handleChange}
            value={content}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder='Skills'
            fluid
            multiple
            selection
            options={options}
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
