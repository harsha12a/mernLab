// import { useReducer } from "react"
// let red = (state, action) => {
//   switch(action.type){
//     case 'inc':
//       return state + 1
//     case 'dec':
//       return state - 1
//     default:
//       return state
//   }
// }
// function App(){
//   let [st, ds] = useReducer(red, 0)
//   return(
//     <div>
//       {st}
//       <button onClick={() => ds({type: 'inc'})}>Inc</button>
//       <button onClick={() => ds({type: 'dec'})}>Dec</button>
//     </div>
//   )
// }
// export default App
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Prod from './Prod'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/prod' element={<Prod />} />
      </Routes>
    </Router>
  )
}

export default App