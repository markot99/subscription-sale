import { Box, Grid, Skeleton, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { availablePaperVersions, fetchLocalPaperVersions } from '../../Store/Slices/LocalPaperVersion/LocalPaperVersionSlice'
import { AppDispatch } from '../../Store/Store'
import OfferCard from './OfferCard'

const Home = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch() as AppDispatch

  const localPaperVersions = useSelector(availablePaperVersions)

  useEffect(() => {
    dispatch(fetchLocalPaperVersions())
  }, [dispatch])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        width: 1
      }}
    >
      <Typography
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
            md: 'flex',
            lg: 'flex',
            xl: 'flex'
          }
        }}
        variant='h2'
      >
        {t('features.home.header')}
      </Typography>
      <Grid container spacing={2} alignItems='stretch'>
        {localPaperVersions.length > 0
          ? localPaperVersions.map((paper) => (
              <Grid item key={paper.id} xs={12} sm={12} md={6} lg={4} xl={3}>
                <OfferCard paper={paper} />
              </Grid>
            ))
          : undefined}

        {localPaperVersions.length === 0
          ? [0, 1, 2, 3, 4, 5].map((index) => (
              <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                <Skeleton variant='rectangular' animation='wave' width={400} height={300} sx={{ width: 1, height: 1, margin: 'auto' }} />
              </Grid>
            ))
          : undefined}
      </Grid>
    </Box>
  )
}

export default Home
