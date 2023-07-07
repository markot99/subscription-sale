import { Box, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        backgroundColor: grey[100]
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Link>Terms</Link>
        <Link>Privacy</Link>
        <Link>About</Link>
      </Box>
      <Typography component='div'>
        Copyright © 2023 <Box sx={{ display: 'inline', fontStyle: 'italic' }}>Newspaper, Inc.</Box>
      </Typography>
    </Box>
  )
}

export default Footer
