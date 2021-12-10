import React, { useState } from "react";
import "./styles.css";

const emojiDoc = {
  "😀": "happy",
  "🤣": "lol",
  "😍": "in love",
  "😢": "sad",
  "😤": "angry",
  "😴": "slliping"
};

const emojis = Object.keys(emojiDoc);

const App = () => {
  const [inputText, setInputText] = useState();
  const [emoji, setEmoji] = useState();

  const textHandler = (event) => {
    let text = event.target.value;
    setInputText(text);
    if (text in emojiDoc) setEmoji(text);
    else setEmoji("Not available, Will be added new emoji soon....");
  };

  return (
    <div className="App">
      <header>
        <h1>Choose the Emoji</h1>
      </header>
      <section>
        <input
          style={{
            padding: "10px 20px",
            width: "500px"
          }}
          placeHolder="Search Emoji"
          onChange={textHandler}
        />
      </section>
      <section>
        <h2>{inputText}</h2>
        <h2>{emoji}</h2>
      </section>
      <section>
        {emojis.map((emoji) => (
          <span
            style={{
              margin: "2px 10px",
              padding: "2px 5px",
              fontSize: "36px",
              cursor: "pointer"
            }}
            onClick={(e) => setEmoji(emojiDoc[emoji])}
          >
            {emoji}
          </span>
        ))}
      </section>
    </div>
  );
};

export default App;
