
function Hello() {
  console.log('this is a test from hello')
  return (
    <div>
      <p>Hello again!</p>
    </div>
  )
}

function App() {
  console.log('this is a test from App()')
  return (
    <div>
      <h1>Another greeting!</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App
