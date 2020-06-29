import * as React from 'react'
import {useContext} from 'react'

import ProfileForm from '../components/forms/ProfileForm'
import {BlayoutContext} from '../components/BlayoutContext'
import Blayout from '../components/Blayout'

const ProfilePage = (props: any) => {
  return (
    <Blayout {...props}>
      <ProfileForm {...props} />
    </Blayout>
  )
}

export default ProfilePage
