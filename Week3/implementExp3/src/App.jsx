import {add, sub} from 'exp3_e4'
function App() {
  return (
    <h1>
      {
        `Add(1, 2)  --  ${add(1,2)}`
      }
        <br/>
      {
        `Sub(40, 5) -- ${sub(40,5)}`
      }
    </h1>
  )
}

export default App