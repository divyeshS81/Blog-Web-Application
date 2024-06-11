import React from 'react'
import logo from "../../src/assets/Logo.png"

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} alt=''/>
    </div>
  )
}

export default Logo