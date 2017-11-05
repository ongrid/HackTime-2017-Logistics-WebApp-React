import React from 'react'
import cn from 'classnames'

import styles from './styles.css'

const Form = ({ children, className, ...rest }) => (
  <form {...rest} className={cn(className, styles.lol)}>
    { children }
  </form>
)

export default Form
