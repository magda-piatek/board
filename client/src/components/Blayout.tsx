import * as React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

import Navbar from './layout/navbar/Navbar'
import {getHeaders, userApi} from '../services/api'
import {setErrors} from '../store/actions/errorAction'

const Blayout = (props: any) => {
  const [user, setUser] = useState({})

  const headers = getHeaders()
  useEffect(() => {
    try {
      const getMe = async () => {
        const apiClient = axios.create({
          headers,
        })
        const result = await apiClient.get(userApi().getMe)
        setUser(result.data)
      }

      getMe()
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }, [])

  return (
    <React.Fragment>
      <Navbar user={user} {...props} />
      {props.children}
    </React.Fragment>
  )
}

export default Blayout
