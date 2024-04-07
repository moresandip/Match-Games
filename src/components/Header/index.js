import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="website-logo"
        alt="website logo"
      />
      <ul className="score-timer-container">
        <li className="time-container">
          <p className="heading-text">
            Score: <span className="score-time">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer-image"
            alt="timer"
          />
          <p className="score-time">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default Header
