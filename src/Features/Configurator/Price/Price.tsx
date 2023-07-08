import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { NewsApi } from '../../../Api/NewsApi'
import { AlertSeverity } from '../../../Models/Alert'
import { Subscription } from '../../../Models/Subscription'
import { setAlert } from '../../../Store/Slices/AlertSlice/AlertSlice'
import { setSubscription } from '../../../Store/Slices/SubscriptionSlice/SubscriptionSlice'
import { AppDispatch, RootState } from '../../../Store/Store'

function Price() {
  const { t } = useTranslation()
  const dispatch = useDispatch() as AppDispatch

  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)

  const calculatePrice = async () => {
    console.log('calculating price')
    try {
      const price = await NewsApi.calculateNewspaperPrice(subscription.deliveryAddress.postalCode, subscription.deliveryAddress.country, 1)
      dispatch(
        setSubscription({
          ...subscription,
          price: Number(price)
        })
      )
    } catch (error) {
      if (error instanceof Error && error.message.includes('Zip code does not exist')) {
        dispatch(setAlert({ message: t('delivery.errors.unknownZip'), severity: AlertSeverity.Error, timeout: 5 }))
        return
      }
      dispatch(setAlert({ message: t('delivery.errors.general'), severity: AlertSeverity.Error, timeout: 5 }))
    }
  }

  useEffect(() => {
    calculatePrice
  }, [subscription.deliveryAddress.postalCode, subscription.deliveryAddress.country])

  return (
    <>
      <br />
      <Typography variant='h4'>{t('delivery.price')}</Typography>
      <br />
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Typography variant='h3' sx={{ paddingLeft: '2em' }}>
          {subscription.price}
        </Typography>
        <Typography variant='h5' sx={{ paddingLeft: '1em' }}>
          {t('delivery.priceUnit')}
        </Typography>
      </Box>
    </>
  )
}
export default Price
