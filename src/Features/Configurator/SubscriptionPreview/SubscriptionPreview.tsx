import { Box, Skeleton, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { LocalPaperVersion } from '../../../Models/LocalPaperVersion'

function SubscriptionPreview(props: { selectedNewspaper: LocalPaperVersion }) {
  const { selectedNewspaper } = props

  const { t } = useTranslation()

  return (
    <Box>
      <Typography variant='h4'>{t('subscriptionPreview.yourSubscription')}</Typography>
      {selectedNewspaper.title ? (
        <Typography variant='h3'>{selectedNewspaper.title}</Typography>
      ) : (
        <Skeleton variant='text' animation='wave' sx={{ fontSize: '3rem' }} />
      )}

      {selectedNewspaper.description ? (
        <Typography>{selectedNewspaper.description}</Typography>
      ) : (
        <Skeleton variant='text' animation='wave' />
      )}
    </Box>
  )
}
export default SubscriptionPreview
