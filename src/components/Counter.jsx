import { useContext, useState } from "react"
import { CounterContext } from "./UseContextApi"

export const Counter =()=>{
    const {count, setCount} = useContext(CounterContext)
    const [toggled, setToggled ] = useState(false)
     const handledToggle = ()=>{
        setToggled(!toggled)
     }
    return(
        <>
        <h3>Context API Definition<span onClick={handledToggle} style={{cursor:'pointer',margin: '5px',fontSize:'1.2rem'}}>{toggled? "-": "+"}</span></h3>
          <div className={`details ${toggled? "visible": "hidden"}`}>
             <div className="bg-red-100 border-2 border-red-300 rounded-md md:w-1/2 p-4 mt-4 md:mx-auto flex gap-4 justify-center  items-center">
             It is a state manager that lets you share state across components without using 3rd party-lib</div>
            <div className="bg-red-100 border-2 border-red-300 rounded-md md:w-1/2 p-4 mt-4 md:mx-auto flex gap-4 justify-center  items-center">
                Note: It doesn't handle frequent update well and can cause multiple re-rendering</div>
            <div className="bg-red-100 border-2 border-red-300 rounded-md md:w-1/2 p-4 mt-4 md:mx-auto flex gap-4 justify-center  items-center">
                Hence less suitable for complex app like eCommerce or social medias</div>
          </div>
        <div style={{textAlign: "center"}}>
            <h2>{count}</h2>
          <button className="header" onClick={()=>{setCount(count +1)}}>Increment</button>
          <button onClick={()=>{setCount(count -1)}}>Decrement</button>
        </div>
        </>
    )
}