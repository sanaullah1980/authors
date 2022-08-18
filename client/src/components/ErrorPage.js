import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginTop="3rem">
        <Typography variant='h6'>
            We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?
        </Typography>
        <Link to={'/new'}> Add New Author </Link>
    </Box>
    
  )
}

export default ErrorPage;