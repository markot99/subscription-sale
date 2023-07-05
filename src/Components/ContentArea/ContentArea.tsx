import { Box } from '@mui/material'
import { ReactNode } from 'react'

const ContentArea = (props: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        padding: 10
      }}
    >
      {props.children}
    </Box>
  )
}

export default ContentArea