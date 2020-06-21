import * as React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import Navbar from './layout/Navbar'
const Blayout = (props: any) => {
  console.log('====================================')
  console.log(props)
  console.log('====================================')
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  )
}

export default Blayout
