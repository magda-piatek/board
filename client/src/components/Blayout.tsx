import * as React from 'react'
import {useEffect} from 'react'
import axios from 'axios'

import Navbar from './layout/navbar/Navbar'
import {getHeaders, userApi} from '../services/api'
import {setErrors} from '../store/actions/errorAction'

const Blayout = (props: any) => {
  const headers = getHeaders()

  useEffect(() => {
    try {
      const getMe = async () => {
        const apiClient = axios.create({
          headers,
        })
        const res = await apiClient.get(userApi().getMe)
      }

      getMe()
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }, [])

  return (
    <React.Fragment>
      <Navbar {...props} />
      {props.children}
    </React.Fragment>
  )
}

export default Blayout
