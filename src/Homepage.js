import React, {useState} from 'react'
import { useContext } from 'react'
import {store} from './App'

export default function Homepage() {
    const [data, setData] = useContext(store)
  return (
    <div>
      hello {data}
    </div>
  )
}
