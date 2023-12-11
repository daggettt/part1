/* Refactor to have 3 new components - Header, Content, Footer*/

const Header = (props) => {
  console.log('this is the header component')
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h3>Unit: {props.part}</h3>
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
  console.log('this is exercise 1.1')

  const course = 'Half Stack application dev'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercises={exercise1}/>
      <Content part={part2} exercises={exercise2}/>
      <Content part={part3} exercises={exercise3}/>
      <Total total={exercise1 + exercise2 + exercise3}/>
    </div>
  )
}

export default App
