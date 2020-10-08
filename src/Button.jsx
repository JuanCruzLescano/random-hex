import React from 'react'
import Style from './Button.module.css'
import { Button } from 'semantic-ui-react'

function ButtonHex({handleChange}) {

const abc = 'AaBbCcDdEeFf1234567890'
const num = '1234567890'

let totalIndexRandom = Math.floor(Math.random() * 6)

const hexFunction = () => {
  let hexColor = ''
  let abcLength = abc.length

  for (let i = 0; i < 6; i++) {
    hexColor += abc.charAt(Math.floor(Math.random() * abcLength))
  }
  return hexColor
}

  return (
    <>
    <Button onClick={() => handleChange(hexFunction)}  secondary style={{width: '20%', height: '50px', fontSize: '16px'}}>Go Hex!</Button>
    </>
  )
}

export default ButtonHex
