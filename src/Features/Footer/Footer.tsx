import { Box, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 3,
        gap: 2,
        backgroundColor: grey[100]
      }}
    >
      <Typography component='div'>
        Copyright © 2023 <Box sx={{ display: 'inline', fontStyle: 'italic' }}>Newspaper, Inc.</Box>
      </Typography>
      <Link>Terms</Link>
      <Link>Privacy</Link>
      <Link>About</Link>
    </Box>
  )
}

export default Footer
