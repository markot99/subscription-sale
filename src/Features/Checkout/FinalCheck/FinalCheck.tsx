import { Card, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'

import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import PaymentIcon from '@mui/icons-material/Payment'
import ReceiptIcon from '@mui/icons-material/Receipt'

export default function FinalCheck() {
  const { t } = useTranslation()

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
                <strong>{t('delivery.newspaper')}:</strong> Norberger Bote
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.edition')}:</strong> Ost
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.deliveryDays')}:</strong> Mo-Di
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.deliveryFrom')}:</strong> 29.02.3333
              </Typography>
              <Typography variant='h6'>
                <strong>{t('delivery.price')}:</strong> 23.32 {t('delivery.priceUnit')}
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
                <strong>{t('address.title')}:</strong> Norberger Bote
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.firstName')}:</strong> Ost
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.lastName')}:</strong> Mo-Di
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.street')}:</strong> 29.02.3333
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.streetNumber')}:</strong> 2332
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.postcode')}:</strong> 2332
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.city')}:</strong> 2332
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.country')}:</strong> 2332
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
                <strong>{t('address.title')}:</strong> Norberger Bote
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.firstName')}:</strong> Ost
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.lastName')}:</strong> Mo-Di
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.street')}:</strong> 29.02.3333
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.streetNumber')}:</strong> 2332
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.postcode')}:</strong> 2332
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.city')}:</strong> 2332
              </Typography>
              <Typography variant='h6'>
                <strong>{t('address.country')}:</strong> 2332
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
                <strong>{t('features.checkout.payment.type')}:</strong> Paypal
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
