import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

function SubscriptionPreview() {
  const { newspaper } = useParams()

  const { t } = useTranslation()

  return (
    <Box>
      <Typography variant='h4'>{t('subscriptionPreview.yourSubscription')}</Typography>
      <Typography variant='h3'>{newspaper}</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </Box>
  )
}
export default SubscriptionPreview
