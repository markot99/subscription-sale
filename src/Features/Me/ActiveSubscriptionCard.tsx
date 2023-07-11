import { Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Subscription, SubscriptionInterval } from '../../Models/Subscription'

const ActiveSubscriptionCard = (props: { subscription: Subscription }) => {
  const { subscription } = props

  const { t } = useTranslation()

  return (
    <Card
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 4,
        ':hover': {
          boxShadow: 10
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component='div' variant='h5'>
          {subscription.newspaper}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' component='div'>
          {subscription.edition}
        </Typography>
        <Typography variant='subtitle2' color='text.secondary' component='div'>
          {subscription.price.toFixed(2)} {t('features.me.subscriptions.currencyPerMonth')}
        </Typography>
        <Typography variant='body1'>
          {t('features.me.subscriptions.interval')}
          {': '}
          {subscription.subscriptionInterval === SubscriptionInterval.Daily
            ? t('features.me.subscriptions.daily')
            : t('features.me.subscriptions.weekly')}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ActiveSubscriptionCard
