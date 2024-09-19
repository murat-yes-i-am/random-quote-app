import { useState, useEffect } from "react";
import { getRandomElement } from "./utils/getRandomElement";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { getRandomColor } from "./utils/getRandomColor";

const quoteApiUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const r = document.querySelector(':root');

const changeAppColor = () => {
  r.style.setProperty('--background-color', getRandomColor());
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({ quote: '', author: '' });

  const getQuotes = async () => {
    const response = await fetch(quoteApiUrl);
    const { quotes } = await response.json();

    setQuotes(quotes);
    setQuote(getRandomElement(quotes));
  };

  const changeQuote = () => {
    changeAppColor();
    setQuote(getRandomElement(quotes));
  }

  useEffect(() => {
    getQuotes();
    r.style.setProperty('--background-color', getRandomColor());
  }, []);

  return (
    <div className="quote-box" id="quote-box">
      <div className="quote-box__quote-text" id="text">{quote?.quote}</div>
      <div className="quote-box__quote-author" id="author">- {quote?.author}</div>
      <div className="quote-box__buttons">
        <button
          className="quote-box__new-quote-button button"
          id="new-quote"
          onClick={changeQuote}
        >
          Next quote
        </button>
        <a
          className="quote-box__tweet-button button"
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default App;
