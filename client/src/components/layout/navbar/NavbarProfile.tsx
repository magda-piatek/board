import * as React from 'react'
import {MenuItem, Button, Menu} from '@material-ui/core'
import {useDispatch} from 'react-redux'

import {setAuth} from '../../../store/actions/authAction'

const NavbarProfile = (props: any) => {
  const dispatch = useDispatch()

  const [open, handleOpen] = React.useState(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleOpen(event.currentTarget)
  }

  const handleClose = () => {
    handleOpen(null)
  }

  const handleLogOut = () => {
    dispatch(setAuth({token: null, isAuthenticated: false}))
    props.history.push('/')
  }

  const {user} = props

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="menu_button"
      >
        {user.avatar && (
          <img
            className="img-rounded"
            style={{height: '220px'}}
            src={user.avatar.location}
          />
        )}

        <span>{`${user.firstName} ${user.lastName}`}</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => props.history.push('/profile')}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default NavbarProfile
