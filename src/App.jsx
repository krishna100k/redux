import './App.css'
import {useDispatch, useSelector} from "react-redux"

export default function App() {
  const dispatch = useDispatch()
  const {c} = useSelector((state)=>state.counter)
  const increment = () => {
    dispatch({
      type: "increment"
    })
  }

  const decrement = () => {
    dispatch({
      type:"decrement"
    })
  }

  const incrementByValue = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25
    })

  };

  
  return (
    <div>
      <h1>{c}</h1>
      <button onClick = {increment}>Increment</button>
      <button onClick = {incrementByValue}>Increment by 25</button>
      <button onClick = {decrement}>Decrement</button>
    </div>
  )
}
