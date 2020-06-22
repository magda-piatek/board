import * as React from 'react'

import Navbar from './layout/Navbar'

const Blayout = (props: any) => {
  return (
    <React.Fragment>
      <Navbar {...props} />
      {props.children}
    </React.Fragment>
  )
}

export default Blayout
