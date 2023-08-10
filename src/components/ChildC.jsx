import React, { useContext } from 'react'
import { save } from '../App'

const ChildC = () => {
    const any = useContext(save)
  return (
    <>
      <h1>My name is {any}</h1>
    </>
  )
}
export default ChildC
