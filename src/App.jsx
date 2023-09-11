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
        <h1 className='font-serif'>Quote generator</h1>
        <section>
          <button className='font-semibold my-5 px-3 py-2 border-solid bg-red-400 rounded-full' onClick={getNewQuote}>New Quote</button>
          <h3 className='text-slate-600'>
            <span>&quot;</span>
            {quote?.text}&quot;
          </h3>
        </section>
       </main>
    </>
  )
}

export default App
