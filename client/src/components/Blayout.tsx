import * as React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

import Navbar from './layout/navbar/Navbar'
import {getHeaders, userApi} from '../services/api'
import {setErrors} from '../store/actions/errorAction'
import {BlayoutContext} from './BlayoutContext'

const Blayout = (props: any): JSX.Element => {
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
    <BlayoutContext.Provider value={user}>
      <Navbar {...props} />
      {props.children}
    </BlayoutContext.Provider>
  )
}

export default Blayout
