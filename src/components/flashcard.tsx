// src/components/Flashcard.tsx
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions, CardActionArea } from '@mui/material';

interface FlashcardProps {
    phrase: string;
    translation: string;
    romaji: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ phrase, translation, romaji }) => {
    const [showTranslation, setShowTranslation] = useState(false);

    const handleFlip = () => {
        setShowTranslation(!showTranslation);
    };

    useEffect(() => {
        setShowTranslation(Math.random() < 0.5)
    }, []);

    return (
        <>
            <Card sx={{ minWidth: 345, minHeight: 250 }}>
                <CardActionArea onClick={handleFlip} sx={{ minWidth: 345, minHeight: 300 }}>
                    <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <Typography variant="h4" component="div">
                            {showTranslation ? translation : `${phrase} (${romaji})`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default Flashcard;
