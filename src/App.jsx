
// import './App.css'
  import './index.scss'
import { Counter } from './components/Counter'
import { Parent } from './components/propsDrilling/Parent'
import { CounterSlice } from './components/redux/counterSlice'

import { UseContextApi } from './components/UseContextApi'
import { SoundFlow } from './components/SoundFlow'
import MusicAppPricing from './components/MusicAppPricing'


function App() {
const greeting = "Hello, Prop Drilling!";
  const response = "I'm not here to play!";

  return (
    <>
    <UseContextApi>
      <h1>Welcome to React Redux</h1>
      < Counter />
    </UseContextApi>
    <CounterSlice />
     <Parent greeting={greeting} response={response} />;
     <SoundFlow />
     < MusicAppPricing />
    </>
  )
}

export default App
