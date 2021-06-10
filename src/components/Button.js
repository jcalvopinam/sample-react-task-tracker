import PropTypes from 'prop-types'

const Button = ({ color, name, actionClick }) => {
  return (
    <button
      onClick={actionClick}
      style={{ backgroundColor: color }}
      className='btn'> {name}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  actionClick: PropTypes.func,
}

export default Button
