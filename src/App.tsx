import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'



function App() {
  const hiragana = [
    { romanji: 'a', hiragana: 'a.png' },
    { romanji: 'i', hiragana: 'i.png' },
    { romanji: 'u', hiragana: 'u.png' },
    { romanji: 'e', hiragana: 'e.png' },
    { romanji: 'o', hiragana: 'o.png' },
    { romanji: 'ka', hiragana: 'か' },
    { romanji: 'ki', hiragana: 'き' },
    { romanji: 'ku', hiragana: 'く' },
    { romanji: 'ke', hiragana: 'け' },
    { romanji: 'ko', hiragana: 'こ' },
    { romanji: 'sa', hiragana: 'さ' },
    { romanji: 'shi', hiragana: 'し' },
    { romanji: 'su', hiragana: 'す' },
    { romanji: 'se', hiragana: 'せ' },
    { romanji: 'so', hiragana: 'そ' },
    { romanji: 'ta', hiragana: 'た' },
    { romanji: 'chi', hiragana: 'ち' },
    { romanji: 'tsu', hiragana: 'つ' },
    { romanji: 'te', hiragana: 'て' },
    { romanji: 'to', hiragana: 'と' },
    { romanji: 'na', hiragana: 'な' },
    { romanji: 'ni', hiragana: 'に' },
    { romanji: 'nu', hiragana: 'ぬ' },
    { romanji: 'ne', hiragana: 'ね' },
    { romanji: 'no', hiragana: 'の' },
    { romanji: 'ha', hiragana: 'は' },
    { romanji: 'hi', hiragana: 'ひ' },
    { romanji: 'fu', hiragana: 'ふ' },
    { romanji: 'he', hiragana: 'へ' },
    { romanji: 'ho', hiragana: 'ほ' },
    { romanji: 'ma', hiragana: 'ま' },
    { romanji: 'mi', hiragana: 'み' },
    { romanji: 'mu', hiragana: 'む' },
    { romanji: 'me', hiragana: 'め' },
    { romanji: 'mo', hiragana: 'も' },
    { romanji: 'ya', hiragana: 'や' },
    { romanji: 'yu', hiragana: 'ゆ' },
    { romanji: 'yo', hiragana: 'よ' },
    { romanji: 'ra', hiragana: 'ら' },
    { romanji: 'ri', hiragana: 'り' },
    { romanji: 'ru', hiragana: 'る' },
    { romanji: 're', hiragana: 'れ' },
    { romanji: 'ro', hiragana: 'ろ' },
    { romanji: 'wa', hiragana: 'わ' },
    { romanji: 'wo', hiragana: 'を' },
    { romanji: 'n', hiragana: 'ん' }
  ]

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
    <Box sx={{ height: '100vh', width: '100vw', backgroundColor: '#374151', color: 'white', textAlign: 'center' }}>
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

export default App
