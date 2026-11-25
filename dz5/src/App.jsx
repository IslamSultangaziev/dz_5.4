import { useState, useEffect } from 'react'
import { QUOTES } from './data/quotes'
import styles from './App.module.css'

function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)]
}

export const App = () => {
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
    <div className={styles.app}>
      <div className={styles.quote_card}>
        <h1 className={styles.quote_card__title}>💬 Случайная цитата</h1>

        {loading ? (
          <div className={styles.quote_card__loading}>
            <span className={styles.spinner} />
            <p>Загрузка…</p>
          </div>
        ) : (
          <>
            <blockquote className={styles.quote_card__text}>
              «{quote.text}»
            </blockquote>
            <p className={styles.quote_card__author}>— {quote.author}</p>

            <button
              className={styles.quote_card__btn}
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