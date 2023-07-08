import { Box, Skeleton, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { LocalPaperVersion } from '../../../Models/LocalPaperVersion'

function SubscriptionPreview(props: { selectedNewspaper: LocalPaperVersion }) {
  const { selectedNewspaper } = props

  const { t } = useTranslation()

  return (
    <Box>
      <Typography variant='h4'>{t('subscriptionPreview.yourSubscription')}</Typography>
      <Typography variant='h3'>
        {selectedNewspaper.title ? selectedNewspaper.title : <Skeleton variant='text' animation='wave' />}
      </Typography>

      <Typography>
        {selectedNewspaper.description ? selectedNewspaper.description : <Skeleton variant='text' animation='wave' />}
      </Typography>
    </Box>
  )
}
export default SubscriptionPreview
