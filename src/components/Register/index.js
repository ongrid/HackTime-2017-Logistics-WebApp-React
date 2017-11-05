import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { TextField, Button } from 'material-ui'
import Form from '../Form'

const Register = props => (
  <Form>
    <h1>Register</h1>
    <Field name="name" label="Item name" component={TextField} />
    <Field name="from_name" label="Sender name" component={TextField} />
    <Field name="to_name" label="Reciever name" component={TextField} />
    <Field name="address_from" label="Sender address" component={TextField} />
    <Field name="address_to" label="Reciever address" component={TextField} />
    <Field name="weight" label="Weight" component={TextField} />
    <Button raised color="primary">
      Register
    </Button>
  </Form>
)

const mapStateToProps = ({ data }) => ({
  data
})

export default connect(
  mapStateToProps
)(
  reduxForm({
    form: 'register',
  })(Register)
)
