import * as React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
} from '@material-ui/core'

const Blayout = (props: any) => {
  console.log('====================================')
  console.log(props)
  console.log('====================================')
  return (
    <AppBar position="static">
      <Grid spacing={8} item xs={4}>
        <Button>LOG OUT</Button>
      </Grid>
    </AppBar>
  )
}

export default Blayout
