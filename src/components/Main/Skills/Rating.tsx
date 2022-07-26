import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import classes from "./Rating.module.css"

const BasicRating: React.FC<{ rating: any }> = (props) => {

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
                color: '#1B1B1B',
            }}
        >
            <div className={classes.container}>
                <Typography component="legend">{props.rating}</Typography>
                <Rating name="read-only" value={props.rating} precision={0.1} readOnly size='small' sx={{
                    color: '#373AF5',
                    ml: '12px'
                }}/>
            </div>
        </Box>
    );
}

export default BasicRating;