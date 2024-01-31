import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


const Sidebar = ({ selectedCategory, setSelectedCategory }) =>  (
    <Stack
        direction="row"
        sx={{ 
            overflow: 'auto', 
            height: { sx: 'auto', md: '92vh'},
            flexDirection: {md: 'column'}
         }}
    >
        {
            categories.map(category => (
                <button 
                    key={category.name}
                    className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#FC1503', 
                        color: '#FFF'
                    }}
                >
                    <span style={{
                        color: category.name === selectedCategory ? 'white' : '#FC1503', 
                        marginRight: '15px'
                    }}>{category.icon}</span>
                    <span style={{
                        opacity: category.name === selectedCategory ? '1' : '0.8'
                    }}>{category.name}</span>
                </button>
            ))
        }
    </Stack>
);

export default Sidebar;
