import React, { useEffect, useState } from 'react';
import { phrases } from './data/phrases';
import { Box, Button } from '@mui/material';

const TranslationPractice: React.FC = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [userTranslation, setUserTranslation] = useState('');
    const [feedback, setFeedback] = useState('');

    const currentPhrase = phrases[currentPhraseIndex];

    const setRandomIndex = () => {
        setFeedback(` `)
        setUserTranslation('')
        const randomIndex = Math.floor(Math.random() * phrases.length)
        setCurrentPhraseIndex(randomIndex)
    }

    useEffect(() => {
        setRandomIndex();
    }, []);

    const handlePlayAudio = () => {
        const audio = new Audio(currentPhrase.audio);
        audio.play();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userTranslation.trim().toLowerCase() === currentPhrase.translation.toLowerCase()) {
            setFeedback(`Correct! The phrase "${currentPhrase.phrase}" means "${currentPhrase.translation}".`);
        } else {
            setFeedback(`Incorrect. The phrase "${currentPhrase.phrase}" means "${currentPhrase.translation}".`);
        }
    };

    return (
        <Box sx={{textAlign: 'center'}}>
            <h1>Translation Practice</h1>
            <Button variant="contained" onClick={handlePlayAudio}>Play Audio</Button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userTranslation}
                    onChange={(e) => setUserTranslation(e.target.value)}
                    placeholder="Type the translation"
                />
                <Button type="submit">Submit</Button>
            </form>
            {feedback && <p>{feedback}</p>}
            <Button variant="contained" color="primary" onClick={setRandomIndex} sx={{ marginTop: '20px' }}>
                Next
            </Button>
        </Box>
    );
};

export default TranslationPractice;
