import * as React from 'react'
import {useContext} from 'react'

import {AppBar, Grid} from '@material-ui/core'

import NavbarProfile from './NavbarProfile'
import {BlayoutContext} from '../../BlayoutContext'

const Navbar = (props: any) => {
  const user = useContext(BlayoutContext)

  return (
    <AppBar position="static">
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <NavbarProfile user={user} {...props} />
      </Grid>
    </AppBar>
  )
}

export default Navbar
