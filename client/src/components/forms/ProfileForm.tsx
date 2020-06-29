import * as React from 'react'
import {useContext, useState} from 'react'
import {TextField, Grid} from '@material-ui/core'

import {BlayoutContext} from '../BlayoutContext'

interface IUser {
  firstName: string
  lastName: string
}

const ProfileForm = () => {
  const user = useContext(BlayoutContext)

  const {firstName, lastName} = user

  const [formValues, setFormValues] = useState<IUser>({
    firstName,
    lastName,
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({...formValues, [e.target.name]: e.target.value})

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            label="First Name"
            value={firstName}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default ProfileForm
