
import { LineChart } from 'recharts'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import Phones from './Components/Phones/Phones'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {
 

  return (
    <>
      
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-red-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>


    
    </>
  )
}

export default App
