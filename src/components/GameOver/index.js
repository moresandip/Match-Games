import './index.css'

const GameOver = props => {
  const {score, onClick} = props
  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy-image"
        alt="trophy"
      />
      <p className="text">YOUR SCORE</p>
      <p className="result-score">{score}</p>
      <button className="reset-button" type="button" onClick={onClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="reset-image"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default GameOver
