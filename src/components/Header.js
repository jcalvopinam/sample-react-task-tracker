import Button from "./Button"
import { useLocation } from "react-router"

const Header = (props) => {
  const location = useLocation()

  return (
    <header class='header'>
      <h1>{props.title}</h1>
      {location.pathname === '/' && (
        <Button
          color={props.changeButton ? 'red' : 'green'}
          name={props.changeButton ? 'Close' : 'Add'}
          actionClick={props.showTaskForm} />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
