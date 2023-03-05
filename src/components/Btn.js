import React from 'react'
import "../styles/loginBtn.css"

const LoginBtn = (props) => {
  return (
    <button className='btn'>
        {props.name}
    </button>
  )
}

export default LoginBtn