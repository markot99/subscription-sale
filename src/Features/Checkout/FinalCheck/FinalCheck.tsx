import { Card, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'

import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import PaymentIcon from '@mui/icons-material/Payment'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { useSelector } from 'react-redux'
import { Subscription } from '../../../Models/Subscription'
import { RootState } from '../../../Store/Store'

export default function FinalCheck() {
  const { t } = useTranslation()
  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)

  return (
    <Box>
      <Typography variant='h4' textAlign={'center'}>
        {t('features.checkout.overview.title')}
      </Typography>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <NewspaperIcon sx={{ fontSize: '5em' }} />
            </Box>
            <Box padding={'1em'}>
              <Typography variant='h4' textAlign={'center'}>
                {t('subscriptionPreview.yourSubscription')}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.newspaper')}:</strong> {subscription.id}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.edition')}:</strong> {subscription.edition}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.deliveryDays.title')}:</strong> {t('delivery.deliveryDays.' + subscription.subscriptionInterval)}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.deliveryFrom')}:</strong> {subscription.startDay}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.price')}:</strong> {subscription.price} {t('delivery.priceUnit')}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LocalShippingIcon sx={{ fontSize: '5em' }} />
            </Box>
            <Box padding={'1em'}>
              <Typography variant='h4' textAlign={'center'}>
                {t('delivery.address')}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.title')}:</strong> {t('title.' + subscription.deliveryAddress.title)}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.firstName')}:</strong> {subscription.deliveryAddress.firstName}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.lastName')}:</strong> {subscription.deliveryAddress.lastName}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.street')}:</strong> {subscription.deliveryAddress.street}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.houseNumber')}:</strong> {subscription.deliveryAddress.houseNumber}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.postcode')}:</strong> {subscription.deliveryAddress.postalCode}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.city')}:</strong> {subscription.deliveryAddress.city}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.country')}:</strong> {subscription.deliveryAddress.country}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ReceiptIcon sx={{ fontSize: '5em' }} />
            </Box>
            <Box padding={'1em'}>
              <Typography variant='h4' textAlign={'center'}>
                {t('features.checkout.invoice.title')}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.title')}:</strong> {t('title.' + subscription.invoiceAddress.title)}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.firstName')}:</strong> {subscription.invoiceAddress.firstName}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.lastName')}:</strong> {subscription.invoiceAddress.lastName}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.street')}:</strong> {subscription.invoiceAddress.street}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.houseNumber')}:</strong> {subscription.invoiceAddress.houseNumber}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.postcode')}:</strong> {subscription.invoiceAddress.postalCode}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.city')}:</strong> {subscription.invoiceAddress.city}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.country')}:</strong> {subscription.invoiceAddress.country}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PaymentIcon sx={{ fontSize: '5em' }} />
            </Box>
            <Box padding={'1em'}>
              <Typography variant='h4' textAlign={'center'}>
                {t('features.checkout.payment.title')}
              </Typography>
              <Typography variant='h6'>
                <strong>{t('features.checkout.payment.type')}:</strong>{' '}
                {t('features.checkout.payment.provider.' + subscription.paymentType)}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
