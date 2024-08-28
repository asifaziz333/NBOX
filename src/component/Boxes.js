import React, { useEffect, useRef, useState } from 'react'
import Box from './Box'
import '../css/box.css'

const Boxes = () => {
 
  const count=16;
  const [order,setOrder]=useState([]);
  const [config,setConfig]=useState(new Array(count).fill({selected:false,order:null}))
  
  let interval=useRef(null);
const handleBoxClick=(index)=>{
  if(interval.current)
    return;
  const copy=JSON.parse(JSON.stringify(config));
  copy[index]['selected']=true;
  copy[index]['order']=order.length+1;
  const orderCopy=[index,...order]
  setConfig(()=>copy);
  setOrder(()=>orderCopy);
}

useEffect(()=>{
  if(count===order.length){
   interval.current=setInterval(()=>{
    let index=order.pop();
    config[index]['selected']=false;
    config[index]['order']=null;
    setConfig(()=>[...config]);
    setOrder(()=>[...order]);
    if(!order.length){
      clearInterval(interval.current)
      interval.current=null;
    }
    },500)
  }
},[order])

     const getBox=()=>{
        let box=[]
        for(let index=0;index<count;index++){
          // console.log(`in loop ${index}`);
            box.push(<Box handleClick={handleBoxClick} index={index} config={config[index]}/>)
        }
            return box
            }
  return (
    <div className='boxContainer'>
        {getBox()}
    </div>
  )
}

export default Boxes
