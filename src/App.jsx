import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import ChildA from './components/ChildA'

// import {useNavigate} from 'react-router-dom'

const save = createContext()
function App() {
  // const navigate = useNavigate()
  const initialState = 0;
  const[ab,setAb] = useState("Hello")
  const[incr,setIncr] = useState(0)
  
  const [state,dispatch] =useReducer(reducer,initialState)

  function reducer(state,action){
    if(action.type === "INC"){
      return state + 1;
    }
    if(action.type === "DEC"){
      return state - 1;
    }
  }

const Increment = useCallback(()=>{
  setIncr(incr+1)
  console.log(Increment)
},[incr])

const Decrement = () =>{
  setIncr(incr-1)
}

  useEffect(()=>{
    // alert("i m use effect")
    document.title= ab;
  })

  const name = "Muaaz"
  
  return (
    <div>
      {/* <button onClick={()=>{navigate('/CallPage')}}></button> */}
      <button onClick={()=> setAb("Click")}>Click</button>
      <br/>
      <button onClick={()=> setAb("TO")}>TO</button>
      <h1>{ab}</h1>
      <hr/>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h1>{incr}</h1>
      <hr/>
      <hr/><br/>
      
      <save.Provider value={name}>
      <ChildA/>
      </save.Provider>
      <hr/><br/>
      <h1>{state}</h1>
      <button onClick={()=> dispatch({type: "INC"})}>INC</button>
      <button onClick={()=> dispatch({type: "DEC"})}>DEC</button>
    </div>
    
  )
}

export default App
export {save}