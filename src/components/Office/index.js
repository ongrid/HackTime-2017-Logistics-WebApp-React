import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TextField, Button } from 'material-ui'

const Office = props => (
  <form>
    <h1>Search</h1>
    <TextField />
  </form>
)

const mapStateToProps = ({ data }) => ({
  data
})

export default connect(
  mapStateToProps
)(Office)
