import React from 'react'
import Navigation from './Navigation'

const Layout = ({children}) => {
  return (
      <>
    <Navigation></Navigation>
      {children}
      </>
  )
}

export default Layout