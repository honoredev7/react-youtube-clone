import React from 'react';
import { useParams } from 'react-router';
import { Box } from '@mui/system';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

    const { channelId } = useParams();

    const [channelDetail, setChannelDetail] = React.useState(null);
    const [videos, setVideos] = React.useState([]);

    React.useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${channelId}`)
        .then(data => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
        .then(data => setVideos(data?.items));
    }, [channelId]);
    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)',
                    zIndex: 10,
                    height: '300px'
                }} 
                />
                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail;
