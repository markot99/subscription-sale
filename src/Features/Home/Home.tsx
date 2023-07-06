import { Box, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SubscriptionOffer } from '../../Models/Subscription'
import OfferCard from './OfferCard'

const Home = () => {
  const offers: SubscriptionOffer[] = [
    {
      id: '1',
      title: 'Standardausgabe: Wochenende',
      description: 'Erhalten sie die unsere Zeitung jeden Samstag, mit allen wichtigen Informationen der Woche.',
      price: 9.99,
      img: '/images/home/paper.jpg'
    },
    {
      id: '2',
      title: 'Standardausgabe: Täglich',
      description: 'Erhalten sie die unsere Zeitung jeden Tag, mit allen wichtigen Informationen des Tages.',
      price: 20.99,
      img: '/images/home/paper.jpg'
    },
    {
      id: '3',
      title: 'Spezialausgabe: Politik',
      description: 'Erhalten sie unsere Spezialausgabe mit allen Themen rund um die Politik.',
      price: 14.99,
      img: '/images/home/politics.jpg'
    },
    {
      id: '4',
      title: 'Spezialausgabe: Wirtschaft',
      description: 'Erhalten sie unsere Spezialausgabe mit allen Themen aus der Wirtschaft.',
      price: 14.99,
      img: '/images/home/economy.jpg'
    },
    {
      id: '5',
      title: 'Spezialausgabe: Sport',
      description: 'Erhalten sie unsere Spezialausgabe mit allen Themen rund um den Sport.',
      price: 14.99,
      img: '/images/home/sports.jpg'
    }
  ]

  const { t } = useTranslation()

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
      <Grid container spacing={2}>
        {offers.map((offer) => (
          <Grid item key={offer.id} xs={12} sm={12} md={6} lg={4} xl={3}>
            <OfferCard offer={offer} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home
