import { Box, Button, Grid, Skeleton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { NewsApi } from '../../Api/NewsApi'
import { DeliveryAddress } from '../../Models/DeliveryAddress'
import { availablePaperVersions, fetchLocalPaperVersions } from '../../Store/Slices/LocalPaperVersion/LocalPaperVersionSlice'
import { AppDispatch } from '../../Store/Store'
import Address from '../Address/Address'
import { LocalPaperVersion } from './../../Models/LocalPaperVersion'
import Delivery from './Delivery/Delivery'
import SubscriptionPreview from './SubscriptionPreview/SubscriptionPreview'

function Configurator() {
  const { t } = useTranslation()

  const dispatch = useDispatch() as AppDispatch
  const [selectedNewspaper, setSelectedNewsPaper] = React.useState<LocalPaperVersion>({} as LocalPaperVersion)
  //const [subscription, setSubscription] = React.useState<Subscription>({} as Subscription)
  //const [localPaperEditions, setLocalPaperEditions] = React.useState<LocalEdition[]>([])
  const [deliveryAddress, setDeliveryAddress] = React.useState<DeliveryAddress>({} as DeliveryAddress)

  const [price, setPrice] = React.useState('?')

  function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
  }

  const query = useQuery()
  const newspaperIDStr = query.get('id')

  const localPaperVersions = useSelector(availablePaperVersions)

  useEffect(() => {
    dispatch(fetchLocalPaperVersions())
  }, [dispatch])

  useEffect(() => {
    if (newspaperIDStr === null) return
    const newspaperID = Number(newspaperIDStr)
    if (isNaN(newspaperID)) return
    if (localPaperVersions != null && localPaperVersions.length > 0) {
      const paper = localPaperVersions.find((paper) => paper.id === Number(newspaperID))
      if (paper !== undefined) {
        setSelectedNewsPaper(paper)
      }
    }
  }, [localPaperVersions])

  /*useEffect(() => {
    const localEditions = 
    setLocalPaperEditions(localEditions)
  }, [deliveryAddress.postalCode])*/

  const calculatePrice = async () => {
    try {
      const price = await NewsApi.calculateNewspaperPrice(deliveryAddress.postalCode, deliveryAddress.country, selectedNewspaper.id)
      setPrice(price)
    } catch (error) {
      console.log('Failed to delete item')
    }
  }

  const configuratorValid = () => {
    if (deliveryAddress.title === undefined || deliveryAddress.title === '') return false
    if (deliveryAddress.firstName === undefined || deliveryAddress.firstName === '') return false
    if (deliveryAddress.lastName === undefined || deliveryAddress.lastName === '') return false
    if (deliveryAddress.street === undefined || deliveryAddress.street === '') return false
    if (deliveryAddress.streetNumber === undefined || deliveryAddress.streetNumber === '') return false
    if (deliveryAddress.postalCode === undefined || deliveryAddress.postalCode === '') return false
    if (deliveryAddress.city === undefined || deliveryAddress.city === '') return false
    if (deliveryAddress.country === undefined || deliveryAddress.country === '') return false
    return true
  }

  const deliveryValid = () => {
    return false
  }

  return (
    <Box>
      <Grid container spacing={4} alignItems={'stretch'}>
        <Grid item xs={12} md={2} order={{ xs: 1, md: 1 }}>
          {selectedNewspaper.title ? (
            <Box
              component='img'
              sx={{
                width: { xs: '100%' }
              }}
              alt={selectedNewspaper.imageUrl}
              src={selectedNewspaper.imageUrl}
            />
          ) : (
            <Skeleton variant='rectangular' animation='wave' width={'100%'} height={'100%'} />
          )}
        </Grid>
        <Grid item xs={12} md={10} order={{ xs: 2, md: 2 }}>
          <SubscriptionPreview selectedNewspaper={selectedNewspaper} />
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 3, md: 3 }}>
          <Typography variant='h4'>{t('delivery.address')}</Typography>
          <br />
          <Address address={deliveryAddress} setAddress={setDeliveryAddress} disabled={false} />
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 5, md: 4 }}>
          <Delivery selectedNewspaper={selectedNewspaper} price={price}></Delivery>
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 4, md: 5 }}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ float: 'right' }}
            onClick={calculatePrice}
            disabled={!configuratorValid()}
          >
            {t('delivery.refresh')}
          </Button>
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 6, md: 6 }}>
          <Button type='submit' variant='contained' color='primary' sx={{ float: 'right' }} disabled={!deliveryValid()}>
            {t('delivery.order')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Configurator
