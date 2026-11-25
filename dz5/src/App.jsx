import { useState, useEffect } from 'react'
import { QUOTES } from './data/quotes'
import './App.css'

function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)]
}

function App() {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('🔄 useEffect сработал — компонент смонтировался')

    const timer = setTimeout(() => {
      setQuote(getRandomQuote())
      setLoading(false)
    }, 1500)

    return () => {
      clearTimeout(timer)
      console.log('🧹 Компонент размонтировался — таймер очищен')
    }
  }, [])

  const handleNewQuote = () => {
    setQuote(getRandomQuote())
  }

  return (
    <div className="app">
      <div className="quote-card">
        <h1 className="quote-card__title">💬 Случайная цитата</h1>

        {loading ? (
          <div className="quote-card__loading">
            <span className="spinner" />
            <p>Загрузка…</p>
          </div>
        ) : (
          <>
            <blockquote className="quote-card__text">
              «{quote.text}»
            </blockquote>
            <p className="quote-card__author">— {quote.author}</p>

            <button
              className="quote-card__btn"
              onClick={handleNewQuote}
            >
              🎲 Показать другую цитату
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default App