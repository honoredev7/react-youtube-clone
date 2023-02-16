import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, VideoDetail, ChannelDetail, Feed, SearchFeed } from './components';

const App = () => (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
          <Route path="/channel/:channelId" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
);

export default App;
