import { Box, Button, Grid, Skeleton, Typography } from '@mui/material'
//import { useState } from 'react'
import { useTranslation } from 'react-i18next'
//import { DeliveryAddress } from '../../models/DeliveryAddress'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { availablePaperVersions, fetchLocalPaperVersions } from '../../Store/Slices/LocalPaperVersion/LocalPaperVersionSlice'
import { AppDispatch } from '../../Store/Store'
import Address from '../Address/Address'
import { LocalPaperVersion } from './../../Models/LocalPaperVersion'
import Delivery from './Delivery/Delivery'
import SubscriptionPreview from './SubscriptionPreview/SubscriptionPreview'

function Configurator() {
  const { t } = useTranslation()

  const dispatch = useDispatch() as AppDispatch
  const [selectedNewspaper, setSelectedNewsPaper] = React.useState<LocalPaperVersion>({
    id: 0,
    title: '',
    description: '',
    imageUrl: '',
    basePrice: 0,
    deliveryDays: [],
    editions: []
  })

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

  return (
    <Box>
      <Grid container spacing={4} alignItems={'stretch'}>
        <Grid item xs={12} md={3} order={{ xs: 1, md: 1 }}>
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
        <Grid item xs={12} md={9} order={{ xs: 2, md: 2 }}>
          <SubscriptionPreview selectedNewspaper={selectedNewspaper} />
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 3, md: 3 }}>
          <Typography variant='h4'>{t('delivery.address')}</Typography>
          <br />
          <Address disabled={false} />
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 5, md: 4 }}>
          <Delivery selectedNewspaper={selectedNewspaper}></Delivery>
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
