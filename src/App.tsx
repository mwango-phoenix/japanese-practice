import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Typography, Tab, Tabs } from '@mui/material';
import HiraganaPractice from './hiragana';
import TranslationPractice from './phrasePractices';
import FrequencyPractice from './frequency';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };
    return (
        <Router>
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: '#374151',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    textTransform={'uppercase'}
                    sx={{ marginBottom: '32px', fontWeight: 'bold', textAlign: 'center' }}
                >
                    Hiragana Practice App
                </Typography>
                <Tabs
                    variant="fullWidth"
                    value={activeTab}
                    onChange={handleChange}
                    aria-label="navigation tabs"
                    sx={{
                        backgroundColor: 'transparent',
                        borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                >
                    <Tab
                        label="Practice Hiragana"
                        component={Link}
                        to="/"
                        sx={{
                            backgroundColor: activeTab === 0 ? '#1f2937' : '#4a5568',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '8px 8px 0 0',
                        }}
                    />
                    <Tab
                        label="Practice Phrases"
                        component={Link}
                        to="/translation-practice"
                        sx={{
                            color: 'white',
                            backgroundColor: activeTab === 1 ? '#1f2937' : '#4a5568',
                            padding: '10px 20px',
                            borderRadius: '8px 8px 0 0',
                        }}
                    />
                    <Tab
                        label="Frequency Phrases"
                        component={Link}
                        to="/frequency"
                        sx={{
                            color: 'white',
                            backgroundColor: activeTab === 1 ? '#1f2937' : '#4a5568',
                            padding: '10px 20px',
                            borderRadius: '8px 8px 0 0',
                        }}
                    />
                </Tabs>
                <Box
                    sx={{
                        width: '80vw',
                        height: '60vh',
                        backgroundColor: '#1f2937',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<HiraganaPractice />} />
                        <Route path="/translation-practice" element={<TranslationPractice />} />
                        <Route path="/frequency" element={<FrequencyPractice />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
};

export default App;
