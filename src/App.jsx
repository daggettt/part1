/* Exercises 1.3 - 1.5 */

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h3>Unit: {props.name}</h3>
      <p>Exercises: {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h3>Total exercises for the course: {props.total}</h3>
    </div>
  )
}

const App = () => {
  console.log('1.4 complete')
  

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]

  const partsnames = parts.map(parts => parts.name)

  const partsexercises = parts.map(parts => parts.exercises)

  const partstotal = partsexercises.reduce((sum, num) => sum + num)
  

  return (
    <div>
      <Header course={course}/>
      <Content name={partsnames[0]} exercises={partsexercises[0]}/>
      <Content name={partsnames[1]} exercises={partsexercises[1]}/>
      <Content name={partsnames[2]} exercises={partsexercises[2]}/>
      <Total total={partstotal}/>
    </div>
  )
}

export default App
