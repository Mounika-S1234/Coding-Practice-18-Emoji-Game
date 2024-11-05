/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import React, {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    isGameOver: false,
    isWon: false,
  }

  shuffleEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {clickedEmojis, score, topScore} = this.state

    if (clickedEmojis.includes(id)) {
      this.setState({isGameOver: true, isWon: false})
    } else {
      const newScore = score + 1
      const isGameWon = newScore === this.props.emojisList.length

      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
        score: newScore,
        topScore: newScore > topScore ? newScore : topScore,
        isGameOver: isGameWon,
        isWon: isGameWon,
      }))
    }
  }

  resetGame = () => {
    this.setState({
      clickedEmojis: [],
      score: 0,
      isGameOver: false,
      isWon: false,
    })
  }

  renderGameView = () => {
    const shuffledEmojis = this.shuffleEmojis()
    return (
      <ul className="emojis-list">
        {shuffledEmojis.map(emoji => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameOver, isWon} = this.state

    return (
      <div className="emoji-game-container">
        {!isGameOver && <NavBar score={score} topScore={topScore} />}
        <div className="game-body">
          {isGameOver ? (
            <WinOrLoseCard
              isWon={isWon}
              score={score}
              onClickPlayAgain={this.resetGame}
            />
          ) : (
            this.renderGameView()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
