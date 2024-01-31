import React from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {

    const [videos, setVideos] = React.useState([]);
    const { searchTerm } = useParams();

    React.useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then(data => setVideos(data.items));
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '100vh', flex: 2 }}>
                 <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: '#FFF'}}>
                    Search Results for : <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
                 </Typography>

                 <Videos videos={videos} />
        </Box>
    );
}

export default SearchFeed;
