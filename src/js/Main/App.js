import React from 'react'

export default props => {
  return (
    <div>
      <h1>Hello from App</h1>
      <main>{props.children}</main>
    </div>
  )
}