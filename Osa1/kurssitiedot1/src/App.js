const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.one.name}{props.one.exercises}</p>
      <p>{props.two.name}{props.two.exercises}</p>
      <p>{props.three.name}{props.three.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content one={parts[0]}
      two={parts[1]} 
      three={parts[2]} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
    </div>
  )
}

export default App