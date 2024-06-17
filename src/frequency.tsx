// src/App.tsx
import React, { useEffect, useState } from 'react';
import Flashcard from './components/flashcard';
import { frequency } from './data/frequency_words';
import { Button } from '@mui/material';

const FrequencyPractice: React.FC = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const setRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * frequency.length)
        setCurrentCardIndex(randomIndex)
    }

    useEffect(() => {
        setRandomIndex();
    }, []);

    const currentCard = frequency[currentCardIndex];

    return (
        <div>
            <h2>
                Frequency flashcards
            </h2>
            <p>
                Click card to reveal other side.
            </p>
            <Flashcard
                key={currentCardIndex}
                phrase={currentCard.phrase}
                translation={currentCard.translation}
                romaji={currentCard.romaji}
            />
            <Button onClick={setRandomIndex} color="secondary">
                Next
            </Button>
        </div>
    );
};

export default FrequencyPractice;
