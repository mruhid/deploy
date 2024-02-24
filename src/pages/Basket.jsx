import React from 'react'
import { connect } from 'react-redux'

export const Basket = ({items}) => {
  console.log(items);

  return (
    <>
    {items.length? <h1>{items.length}</h1>: <h2>Empty</h2>}
    </>
  )
}


const t=(a)=>a
export default connect(t)(Basket)