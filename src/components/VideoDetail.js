import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactPlayer from 'react-player';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {

    const { videoId } = useParams();
    
    const [videoDetail, setVideoDetail] = React.useState(null);
    const [videos, setVideos] = React.useState([]);

    React.useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
        .then(data => setVideoDetail(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
        .then(data => setVideos(data.items))
    }, [videoId]);

    if(!videoDetail?.snippet) return 'Loading...';

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
                        <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${videoId}`} 
                            className="react-player" 
                            controls
                        />
                        <Typography color="#FFF" variant="h5" fontWeight="bold" p={2}>
                            {title}
                        </Typography>
                        <Stack 
                            direction="row" 
                            justifyContent="space-between" 
                            sx={{ color: '#FFF' }} 
                            py={1} 
                            px={2}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#FFF">
                                    { channelTitle }
                                    <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px'}} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    { parseInt(viewCount).toLocaleString() } views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    { parseInt(likeCount).toLocaleString() } likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail;
