/* Part 1 C - Complete */

import { useState } from "react"

const Display = ({counter}) => <div>{counter}</div>


const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='Add 1'/>
      <Button onClick={decreaseByOne} text='Subtract 1'/>
      <Button onClick={setToZero} text='Reset'/>
    </div>
  )
}

export default App
