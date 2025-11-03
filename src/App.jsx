
import './App.css'
import { Counter } from './components/Counter'
//import { UseContextApi } from './components/CounterContext'
import { UseContextApi } from './components/UseContextApi'


function App() {


  return (
    <UseContextApi>
      <h1>Welcome to React Redux</h1>
      < Counter />
    </UseContextApi>
    
  )
}

export default App
