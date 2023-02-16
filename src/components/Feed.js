import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = React.useState('New');
    const [videos, setVideos] = React.useState([]);

    React.useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then(data => setVideos(data.items));
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box 
            sx={{ height: { sx: 'auto', md: '92vh' }, 
            borderRight: '1px solid #3D3D3D', 
            px: { sx: 0, md: 2} }}
            >
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#FFF' }}>
                    Copyright { new Date().getFullYear() } Youtube Clone by Honoré
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', height: '100vh', flex: 2 }}>
                 <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: '#FFF'}}>
                    { selectedCategory } <span style={{ color: '#F31503' }}>Videos</span>
                 </Typography>

                 <Videos videos={videos} />
            </Box>
        </Stack>
    );
}

export default Feed;
