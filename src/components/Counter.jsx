import { useContext } from "react"
import { CounterContext } from "./UseContextApi"

export const Counter =()=>{
    const {count, setCount} = useContext(CounterContext)
    return(
        <>
        <h1>Context API Counter</h1>
         <p>It is a state manager that lets you share state across components without using 3rd party-lib</p>
         <p>Note: It doesn't handle frequent update well and can cause multiple re-rendering</p>
         <p>Hence less suitable for complex app like eCommerce or social medias</p>
        <div style={{textAlign: "center"}}>
            <h2>{count}</h2>
          <button onClick={()=>{setCount(count +1)}}>Increment</button>
          <button onClick={()=>{setCount(count -1)}}>Decrement</button>
        </div>
        </>
    )
}