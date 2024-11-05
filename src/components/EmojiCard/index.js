// Write your code here.
import React from 'react';
import './index.css';

const EmojiCard = ({ emoji, onClickEmoji }) => {
  const { id, emojiName, emojiUrl } = emoji;

  const onClickCard = () => {
    onClickEmoji(id);
  };

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={onClickCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  );
};

export default EmojiCard;

