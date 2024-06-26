import { Box, Button, Grid, Skeleton } from '@mui/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../../Store/Slices/Auth/AuthSlice'
import { availablePaperVersions, fetchLocalPaperVersions } from '../../Store/Slices/LocalPaperVersion/LocalPaperVersionSlice'
import { configuratorValid, newSubscription } from '../../Store/Slices/SubscriptionSlice/SubscriptionSlice'
import { AppDispatch } from '../../Store/Store'
import { LocalPaperVersion } from './../../Models/LocalPaperVersion'
import Delivery from './Delivery/Delivery'
import DeliveryAddress from './DeliveryAddress/DeliveryAddress'
import SubscriptionPreview from './SubscriptionPreview/SubscriptionPreview'

function Configurator() {
  const { t } = useTranslation()

  const dispatch = useDispatch() as AppDispatch
  const navigate = useNavigate()

  const authenticated = useSelector(isAuthenticated)

  const [selectedNewspaper, setSelectedNewsPaper] = React.useState<LocalPaperVersion>({} as LocalPaperVersion)
  const localPaperVersions = useSelector(availablePaperVersions)

  function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
  }
  const query = useQuery()
  const newspaperId = query.get('id')

  useEffect(() => {
    dispatch(fetchLocalPaperVersions())
  }, [newspaperId])

  useEffect(() => {
    if (localPaperVersions != null && localPaperVersions.length > 0) {
      const paper = localPaperVersions.find((paper) => paper.id === newspaperId)
      if (paper !== undefined) {
        setSelectedNewsPaper(paper)
        dispatch(newSubscription(paper.title))
      }
    }
  }, [localPaperVersions])

  const onSubmit = () => {
    if (!authenticated) {
      navigate('/register?redirectUrl=/checkout')
      return
    }

    navigate('/checkout')
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
          <DeliveryAddress />
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 5, md: 4 }}>
          <Delivery />
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 4, md: 5 }}></Grid>
        <Grid item xs={12} md={4} order={{ xs: 6, md: 6 }}>
          <Button
            onClick={() => onSubmit()}
            variant='contained'
            color='primary'
            sx={{ float: 'right' }}
            disabled={!useSelector(configuratorValid)}
          >
            {t('delivery.order')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Configurator
