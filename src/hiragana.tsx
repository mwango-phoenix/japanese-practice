import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { hiragana } from './data/hiragana_romaji_mapping'

export function HiraganaPractice() {
  

  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(0)


  const [error, setError] = useState<string>('')

  const setRandomHiragana = () => {
    const randomIndex = Math.floor(Math.random() * hiragana.length)
    setCurrent(randomIndex)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const h = hiragana[current].hiragana
    const r = hiragana[current].romanji

    if (input.toLowerCase() === hiragana[current].romanji) {
      setError(`Correct! The answer is ${r}`)
    } else {
      setError(`Wrong! The correct answer for ${h} is ${r}`)
    }

    setInput('')
    setRandomHiragana()
  }

  useEffect(() => {
    setRandomHiragana()
  }, [])

  return (
    <Box sx={{textAlign: 'center' }}>
      <Typography variant="h3" textTransform={'uppercase'} sx={{ padding: '24px', marginBottom: '32px', fontWeight: 'bold' }}>
        Hiragana Quiz
      </Typography>
      <Box>
        {hiragana[current].hiragana.endsWith('.png') ? (
          <img src={hiragana[current].hiragana} alt="Hiragana" style={{ width: '9rem', height: '9rem' }} />
        ) : (
          <Typography variant="h1" sx={{ fontSize: '9rem', fontWeight: "bold" }}>
            {hiragana[current].hiragana}
          </Typography>
        )}
      </Box>

      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={input}
            className="block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2" />
        </form>
      </div>
      {error &&
        <div>
          <p>{error}</p>
        </div>
      }
    </Box>
  )
}

export default HiraganaPractice
