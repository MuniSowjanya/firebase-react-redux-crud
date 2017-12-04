import React from 'react'
import { Button, Checkbox, Icon, Item, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Postlist = ({ allPosts, createPost, onDelete }) => (
  <Table celled compact definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell>Published</Table.HeaderCell>
        <Table.HeaderCell>Post Details</Table.HeaderCell>
        <Table.HeaderCell>Updated on</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {allPosts && allPosts.length > 0 ? allPosts.map(post => (
        <Table.Row key={post.id}>
          <Table.Cell collapsing>
            <Checkbox slider checked={post.isPublished} />
          </Table.Cell>
          <Table.Cell collapsing>
            <Item.Group>
              <Item>
                <Item.Image size='small' src={`/assets/images/${post.slug}.png`} />
                <Item.Content>
                  <Item.Header as='a'>{post.title}</Item.Header>
                  <Item.Description content={post.description} />
                </Item.Content>
              </Item>
            </Item.Group>
          </Table.Cell>
          <Table.Cell collapsing>{post.timestamp}</Table.Cell>
          <Table.Cell collapsing>
            <Button.Group>
              <Button icon size='medium'>
                <Icon name='edit' />
              </Button>
              <Button icon size='medium'>
                <Icon name='remove' color='red' onClick={() => onDelete(post.id)} />
              </Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      )) : null}
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Link to="/create-post" color={'white'} >
            <Button
              floated='right'
              icon
              labelPosition='left'
              primary size='small'
            >
                <Icon name='write' /> Add Post
            </Button>
          </Link>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default Postlist;
