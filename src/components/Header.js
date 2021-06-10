import Button from "./Button"

const Header = (props) => {
  return (
    <header class='header'>
      <h1>{props.title}</h1>
      <Button
        color={props.changeButton ? 'red' : 'green'}
        name={props.changeButton ? 'Close' : 'Add'}
        actionClick={props.showTaskForm} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
