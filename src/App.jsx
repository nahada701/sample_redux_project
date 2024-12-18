import './App.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'  
//to use state from store useSelector hook is needed
import { decrement, increment, reset,incrementByAmount } from './Redux/counterSlice'
import { useDispatch } from 'react-redux'
//cannot call actions directly have to use dispatch function usedispatch hook
function App() {
const {count}=useSelector(state=>state.counterReducer)   
const[amount,setAmount]=useState()
console.log(amount);
const handleIncrmentByAmount=()=>{
  if(amount){
    dispatch(incrementByAmount(Number(amount)))
  }
  else{
    alert("please enter an amount")
  }

}
const dispatch=useDispatch()
  return (
   <>
   <h3 className='text-center mt-4 '>Counte App</h3>
   <div className='m-auto rounded border p-5 my-5 border-2 border-white'>
    <h3 className='text-center mb-5'>{count}</h3>
   <div className='d-flex justify-content-center gap-4'>
      <button className='btn btn-success'onClick={()=>dispatch(increment())} >Increment</button>
      <button className='btn btn-warning'onClick={()=>dispatch(reset())} >Reset</button>
      <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>Decrement</button>
   </div>
<div className=' d-flex align-items-center justify-content-center gap-4 mt-4'>
     <input onChange={(e)=>setAmount(e.target.value)} type="number" className='input ' style={{height:"50px"}}  placeholder='enter a vlaue' />
     <button className='btn btn-primary m-0' style={{height:"50px"}} onClick={handleIncrmentByAmount} >Increment by amount</button>
</div>
    

   </div>
    </>
  )
}

export default App
