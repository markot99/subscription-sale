import { Grid, Skeleton, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { activeSubscriptions, fetchActiveSubscriptions } from '../../Store/Slices/ActiveSubscriptions/ActiveSubscriptionsSlice'
import { authenticatedUser } from '../../Store/Slices/Auth/AuthSlice'
import { AppDispatch } from '../../Store/Store'
import ActiveSubscriptionCard from './ActiveSubscriptionCard'

const ActiveSubscriptions = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch() as AppDispatch

  const user = useSelector(authenticatedUser)
  const subscriptions = useSelector(activeSubscriptions)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      return
    }

    dispatch(fetchActiveSubscriptions(user)).then(() => {
      setIsLoading(false)
    })
  }, [user])

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {subscriptions.length > 0 ? (
        subscriptions.map((subscription) => (
          <Grid item key={subscription.id} xs={12} sm={12} md={6} lg={4} xl={3}>
            <ActiveSubscriptionCard subscription={subscription} />
          </Grid>
        ))
      ) : isLoading ? (
        [0, 1, 2].map((index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
            <Skeleton variant='rectangular' animation='wave' width={400} height={300} sx={{ width: 1, height: 1, margin: 'auto' }} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography align='center' color='text.secondary'>
            {t('features.me.subscriptions.noActiveSubscriptions')}
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}

export default ActiveSubscriptions
