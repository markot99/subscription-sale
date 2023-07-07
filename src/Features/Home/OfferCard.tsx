import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { LocalPaperVersion } from '../../Models/LocalPaperVersion'

const OfferCard = (props: { paper: LocalPaperVersion }) => {
  const { t } = useTranslation()

  const { paper } = props

  return (
    <Card
      sx={{
        boxShadow: 4,
        ':hover': {
          boxShadow: 10
        }
      }}
    >
      <CardMedia component='img' image={paper.imageUrl} height={200} />
      <CardContent>
        <Typography component='div' variant='h5'>
          {paper.title}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' component='div'>
          {paper.basePrice.toFixed(2)} € / Monat
        </Typography>
        <Typography variant='body1'>{paper.description}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Rating name='read-only' value={4} readOnly />
        <Button variant='outlined'>{t('features.home.card.buy')}</Button>
      </CardActions>
    </Card>
  )
}

/**
 * The component export.
 */
export default OfferCard
