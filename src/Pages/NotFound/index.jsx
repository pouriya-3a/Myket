import React, { useState } from 'react'
import MyketNotFound from './MyketNotFound'
import AiNotFound from './AiNotFound'

export default function NotFound() {

  const [changeUi , setChangeUi] = useState(false)
  console.log(changeUi)
  const handleUi = ()=>{
    changeUi ? setChangeUi(false) : setChangeUi(true)
  }
  
  if(changeUi) {return (<AiNotFound  handleUi={handleUi}/>)}
  else{
    return (
      <MyketNotFound handleUi={handleUi} />
    )
  }
}
