import React from 'react'
import './container.css'
import { useContext} from 'react'
import Store from './Context'
const Check = () => {
  const {data} = useContext(Store)

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Check
