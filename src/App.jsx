import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(()=>{
    axios.get("https://type.fit/api/quotes")
    .then((response) => {
      setQuotes(response.data);
      setQuote(response.data[0]);
    });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <>
       <main>
        <h1>Quote generator</h1>
        <section>
          <button onClick={getNewQuote}>New Quote</button>
          <h3>
            <span>"</span>
            {quote?.text}
          </h3>
          <i>{quote?.text}</i>
        </section>
       </main>
    </>
  )
}

export default App
