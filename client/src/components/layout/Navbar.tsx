import * as React from 'react'
import {AppBar, Button, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'

import {setAuth} from '../../store/actions/authAction'

const Navbar = (props: any) => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(setAuth({token: null, isAuthenticated: false}))
    props.history.push('/')
  }
  return (
    <AppBar position="static">
      <Grid item xs={4}>
        <Button onClick={handleLogOut}>LOG OUT</Button>
      </Grid>
    </AppBar>
  )
}

export default Navbar
