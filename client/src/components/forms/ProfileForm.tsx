import * as React from 'react'
import {useContext, useState, useEffect} from 'react'
import {TextField, Grid, Button} from '@material-ui/core'
import axios from 'axios'

import {BlayoutContext} from '../BlayoutContext'
import {userApi} from '../../services/api'

interface IUser {
  firstName: string
  lastName: string
}

const ProfileForm = () => {
  let initialState = {firstName: '', lastName: ''}
  let user = useContext(BlayoutContext)

  const [formData, setFormData] = useState<IUser>(initialState)
  const [avatar, setAvatar] = useState<File | null>()

  useEffect(() => {
    const {firstName, lastName} = user
    setFormData({
      firstName,
      lastName,
    })
  }, [user])

  const {firstName, lastName} = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    const newUser: IUser | any = {
      firstName,
      lastName,
    }

    let formData = new FormData()

    formData.append('avatar', avatar)

    for (let key in newUser) {
      formData.append(key, newUser[key])
    }

    await axios.patch(userApi(user._id).getOne, formData)

    e.preventDefault()
  }
  const imageSelectedHandler = (event: any) => {
    setAvatar(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="firstName"
            variant="outlined"
            required
            fullWidth
            label="First Name"
            value={firstName}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <label htmlFor="file-upload"></label>
          <input id="file-upload" type="file" onChange={imageSelectedHandler} />
        </Grid>

        <Button
          style={{marginTop: '15px'}}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </Grid>
    </form>
  )
}

export default ProfileForm
