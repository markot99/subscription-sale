import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { authenticatedUser } from '../../Store/Slices/Auth/AuthSlice'
import ActiveSubscriptions from './ActiveSubscriptions'
import Profile from './Profile'

const Me = () => {
  const { t } = useTranslation()

  const user = useSelector(authenticatedUser)

  if (!user) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1
        }}
      >
        <Typography variant='h3'>Not authenticated.</Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
      }}
    >
      <Typography variant='h3'>{t('features.me.header')}</Typography>
      <Profile />
      <Typography variant='h3'>{t('features.me.subscriptions')}</Typography>
      <ActiveSubscriptions />
    </Box>
  )
}

export default Me
