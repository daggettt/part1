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

  const course = 'Half Stack application dev'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      <Header course={course}/>
      <Content name={part1.name} exercises={part1.exercises}/>
      <Content name={part2.name} exercises={part2.exercises}/>
      <Content name={part3.name} exercises={part3.exercises}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
