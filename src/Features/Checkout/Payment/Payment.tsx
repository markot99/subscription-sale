import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { PaymentType, Subscription } from '../../../Models/Subscription'
import { setSubscription } from '../../../Store/Slices/SubscriptionSlice/SubscriptionSlice'
import { AppDispatch, RootState } from '../../../Store/Store'

export default function Payment() {
  const { t } = useTranslation()
  const dispatch = useDispatch() as AppDispatch

  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)

  const payments = [
    {
      type: PaymentType.CreditCard,
      images: ['/images/payment/mastercard.svg', '/images/payment/visa.svg']
    },
    {
      type: PaymentType.PayPal,
      images: ['/images/payment/paypal.svg']
    },
    {
      type: PaymentType.AmazonPay,
      images: ['/images/payment/amazonpay.svg']
    },
    {
      type: PaymentType.Klarna,
      images: ['/images/payment/klarna.svg']
    }
  ]

  return (
    <Box>
      <Typography variant='h4' textAlign={'center'}>
        {t('features.checkout.payment.title')}
      </Typography>

      <Grid container spacing={2}>
        {payments.map((payment) => (
          <Grid key={payment.type} item xs={12} sm={6}>
            <Card sx={subscription.paymentType === payment.type ? { border: '2px solid #1976d2' } : {}}>
              <CardActionArea
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}
                onClick={() =>
                  dispatch(
                    setSubscription({
                      ...subscription,
                      paymentType: payment.type
                    })
                  )
                }
              >
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  {payment.images.map((image, index) => (
                    <CardMedia
                      key={index}
                      component='img'
                      sx={{ padding: '1em 1em 0 1em', objectFit: 'contain', height: '3em' }}
                      src={image}
                      alt={image}
                    />
                  ))}
                </Box>

                <CardContent>
                  <Typography variant='h4'>{t('features.checkout.payment.provider.' + payment.type)} </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
