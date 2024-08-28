import React from 'react'
import '../css/box.css'
const Box = ({index,config,handleClick}) => {
  const {selected,order}=config;
  return (
    <div className={`box ${selected&&'selected'}`} onClick={()=>!selected && handleClick(index)}>
      {order  }
    </div>
  )
}

export default Box
