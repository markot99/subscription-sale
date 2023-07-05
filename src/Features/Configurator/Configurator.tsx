import { Box, Button, Grid, Typography } from '@mui/material'
//import { useState } from 'react'
import { useTranslation } from 'react-i18next'
//import { DeliveryAddress } from '../../models/DeliveryAddress'
import Address from '../Address/Address'
import Delivery from './Delivery/Delivery'
import SubscriptionPreview from './SubscriptionPreview/SubscriptionPreview'

function Configurator() {
  const { t } = useTranslation()

  /*const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
    title: '',
    firstName: '',
    lastName: '',
    street: '',
    streetNumber: '',
    postalCode: '',
    city: '',
    country: ''
  })*/

  return (
    <Box>
      <Grid container spacing={4} alignItems={'stretch'}>
        <Grid item xs={12} md={3} order={{ xs: 1, md: 1 }}>
          <Box
            component='img'
            sx={{
              width: { xs: '100%' }
            }}
            alt='The house from the offer.'
            src='/images/newspaper.jpg'
          />
        </Grid>
        <Grid item xs={12} md={9} order={{ xs: 2, md: 2 }}>
          <SubscriptionPreview />
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 3, md: 3 }}>
          <Typography variant='h4'>{t('delivery.address')}</Typography>
          <br />
          <Address />
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 5, md: 4 }}>
          <Delivery></Delivery>
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 4, md: 5 }}>
          <Button type='submit' variant='contained' color='primary' sx={{ float: 'right' }}>
            {t('delivery.refresh')}
          </Button>
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 6, md: 6 }}>
          <Button type='submit' variant='contained' color='primary' sx={{ float: 'right' }}>
            {t('delivery.order')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Configurator
