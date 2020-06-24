import * as React from 'react'
import {AppBar, Grid} from '@material-ui/core'

import NavbarProfile from './NavbarProfile'

const Navbar = (props: any) => {
  return (
    <AppBar position="static">
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <NavbarProfile {...props} />
      </Grid>
    </AppBar>
  )
}

export default Navbar
