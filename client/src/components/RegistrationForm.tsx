import * as React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Container,
} from '@material-ui/core'

import {userApi} from '../services/api'
import {findError} from '../utils/Helpers'

interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
  password2: string
}

const RegistrationForm = (props: any) => {
  const [formValues, setFormValues] = useState<IUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })

  const [errors, setErrors] = useState([])
  const [avatar, setAvatar] = useState<File | null>()

  const {firstName, lastName, email, password, password2} = formValues

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({...formValues, [e.target.name]: e.target.value})

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    try {
      const newUser: IUser | any = {
        firstName,
        lastName,
        email,
        password,
        password2,
      }

      let formData = new FormData()

      formData.append('avatar', avatar)

      for (let key in newUser) {
        formData.append(key, newUser[key])
      }

      await axios.post(userApi().post, formData)

      props.history.push('/')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  const imageSelectedHandler = (event: any) => {
    setAvatar(event.target.files[0])
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <h1>Sign up</h1>
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
                helperText={findError(errors, 'firstName')}
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
                helperText={findError(errors, 'lastName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email"
                name="email"
                value={email}
                onChange={onChange}
                helperText={findError(errors, 'email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={onChange}
                helperText={findError(errors, 'password')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Password2"
                type="password"
                value={password2}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <label htmlFor="file-upload"></label>
          <input id="file-upload" type="file" onChange={imageSelectedHandler} />
          <Button
            style={{marginTop: '15px'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              Already have an account?
              <Link to="/">Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default RegistrationForm
