

  import './index.css'
import { Counter } from './components/Counter'
import { Parent } from './components/propsDrilling/Parent'
import { CounterSlice } from './components/redux/counterSlice'

import { UseContextApi } from './components/UseContextApi'
import { SoundFlow } from './components/SoundFlow'
import MusicAppPricing from './components/MusicAppPricing'
import PhotoExhibit from './components/PhotoExhibit'
import MusicShoppingCard from './components/MusicShoppingCard'


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
     <MusicShoppingCard />
     <PhotoExhibit/>

    </>
  )
}

export default App
