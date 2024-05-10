import React from 'react'

const Login = () => {
  return (
    <button onClick={() =>  {
      throw new Error('I crashed!');
    }}>Login</button >
  )
}

export default Login