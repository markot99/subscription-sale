import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Payment() {
  const { t } = useTranslation()

  const [selectedPayment, setSelectedPayment] = React.useState('')

  const payments = [
    {
      name: t('features.checkout.payment.provider.creditCard'),
      images: ['/images/payment/mastercard.svg', '/images/payment/visa.svg']
    },
    {
      name: t('features.checkout.payment.provider.paypal'),
      images: ['/images/payment/paypal.svg']
    },
    {
      name: t('features.checkout.payment.provider.amazonpay'),
      images: ['/images/payment/amazonpay.svg']
    },
    {
      name: t('features.checkout.payment.provider.klarna'),
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
          <Grid key={payment.name} item xs={12} sm={6}>
            <Card sx={selectedPayment === payment.name ? { border: '2px solid #1976d2' } : {}}>
              <CardActionArea
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}
                onClick={() => {
                  setSelectedPayment(payment.name)
                }}
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
                  <Typography variant='h4'>{payment.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
