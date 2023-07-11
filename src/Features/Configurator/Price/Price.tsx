import { Box, Skeleton, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Subscription } from '../../../Models/Subscription'
import { subscriptionIsValid } from '../../../Store/Slices/SubscriptionSlice/SubscriptionSlice'
import { RootState } from '../../../Store/Store'

function Price() {
  const { t } = useTranslation()

  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)

  return (
    <Box>
      <br />
      <Typography variant='h4'>{t('delivery.price')}</Typography>
      <br />
      <Box sx={{ display: 'flex' }}>
        <Box width={'100%'}>
          {subscription.price ? (
            <Typography variant='h3' sx={{ paddingLeft: '2em' }}>
              {subscription.price.toFixed(2)}
            </Typography>
          ) : subscriptionIsValid(subscription) ? (
            <Typography variant='h3' sx={{ paddingLeft: '2em' }}>
              <Skeleton width={'100%'} variant='text' animation='wave' />
            </Typography>
          ) : (
            <Typography variant='h3' sx={{ paddingLeft: '2em' }}>
              ?
            </Typography>
          )}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h5' textAlign={'end'}>
            {t('delivery.priceUnit')}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default Price
