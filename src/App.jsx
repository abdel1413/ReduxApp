
import './App.css'
import { Counter } from './components/Counter'
import { CounterSlice } from './components/redux/counterSlice'

import { UseContextApi } from './components/UseContextApi'


function App() {


  return (
    <>
    <UseContextApi>
      <h1>Welcome to React Redux</h1>
      < Counter />
    </UseContextApi>
    <CounterSlice />
    </>
  )
}

export default App
