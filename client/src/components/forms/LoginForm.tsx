import * as React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Container,
} from '@material-ui/core'

import {setAuth} from '../../store/actions/authAction'
import {loginApi} from '../../services/api'
import {findError} from '../../utils/Helpers'

const LoginForm = (props: any) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData
  const [errors, setErrors] = useState([])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({...formData, [e.target.name]: e.target.value})

  const dispatch = useDispatch()

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    try {
      const res = await axios.post(loginApi().post, {email, password})

      dispatch(setAuth({token: res.data.token, isAuthenticated: true}))

      props.history.push('/dashboard')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
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
          </Grid>
          {errors && errors[0] && errors[0].errorMsg}
          <Button
            style={{marginTop: '15px'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
        <Grid container justify="flex-end">
          <Grid item>
            If you don't have an account
            <Link style={{marginLeft: '2px'}} to="/registration">
              Sign up
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default LoginForm
