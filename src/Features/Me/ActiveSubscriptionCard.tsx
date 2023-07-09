import { Card, CardContent, Typography } from '@mui/material'
import { PaymentInterval, Subscription } from '../../Models/Subscription'

const ActiveSubscriptionCard = (props: { subscription: Subscription }) => {
  const { subscription } = props

  return (
    <Card
      sx={{
        boxShadow: 4,
        ':hover': {
          boxShadow: 10
        }
      }}
    >
      <CardContent>
        <Typography component='div' variant='h5'>
          {subscription.edition}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' component='div'>
          {subscription.price.toFixed(2)} {subscription.paymentInterval === PaymentInterval.Monthly ? '€ / Monat' : '€ / Jahr'}
        </Typography>
        <Typography variant='body1'>{subscription.startDay}</Typography>
      </CardContent>
    </Card>
  )
}

export default ActiveSubscriptionCard
