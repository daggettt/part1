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
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }

 /*
  course.parts.forEach((part) => {
    courseparts.push(part)
  }
 
  console.log(course.parts)
  console.log(course.parts[0].name + ' ' + course.parts[0].exercises)

  /*const coursenames = course[parts].map(parts => parts.name)
  const partsexercises = course.map(parts => parts.exercises)
  const partstotal = partsexercises.reduce((sum, num) => sum + num)/

  const coursenames = course[parts].map(parts => parts.name) */

  return (
    <div>
      <Header course={course.name}/>
      <Content name={course.name} exercises={10}/>
      <Total total={10}/>
    </div>
  )
}

export default App
