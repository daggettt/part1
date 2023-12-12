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
      <h4>Total exercises for the course: {props.total}</h4>
    </div>
  )
}

const App = () => {

  console.log('1.3 complete')
  console.log('1.4 complete')
  console.log('1.5 ongoing')

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

  return (
    <div>
      <Header course={course}/>
      <Content name={parts[0].name} exercises={parts[0].exercises}/>
      <Content name={parts[1].name} exercises={parts[1].exercises}/>
      <Content name={parts[2].name} exercises={parts[2].exercises}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App
