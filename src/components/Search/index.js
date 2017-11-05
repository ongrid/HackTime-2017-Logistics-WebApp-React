import React, { Component } from 'react'
import { get } from 'lodash/fp'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, List, ListItem, ListItemText, CircularProgress } from 'material-ui'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { search } from '../../actions'

import Form from '../Form'

class Search extends Component {

  handleSearch = (data) => {
    return this.props.search(data)
  }

  render() {
    const { loading, item, path, error } = this.props;
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit(this.handleSearch)}>
          <h1>Search</h1>
          <Field type="text" name="id" label="id" component={TextField} />
          <Button raised color="primary" type="submit">
            Search
          </Button>
          {
            loading && <CircularProgress />
          }
          {
            error ? (
              'Not found'
            ) : (
              item && (
                <div>
                  <List>
                    <ListItem>
                      <ListItemText secondary={item.name} primary="Item" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary={item.name_from} primary="From" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary={item.name_to} primary="To" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary={item.address_from} primary="Sender address" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary={item.address_to} primary="Reciever address" />
                    </ListItem>
                  </List>
                  { path.length && <h2>Path</h2> }
                  {
                    path && path.map(
                      ({ name, time }) => name
                    )
                  }
                  <span></span>
                </div>
              )
            )
          }
        </Form>
      </div>
    )
  }
}


export default connect(
  ({ search }) => ({
    item: get('data.data.item', search),
    path: get('data.data.path', search),
    loading: search.loading,
    error: search.error,
    initialValues: undefined,
  }),
  { search }
)(
  reduxForm({
    form: 'search',
  })(Search)
)
