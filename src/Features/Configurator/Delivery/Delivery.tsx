import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LocalPaperVersion } from '../../../Models/LocalPaperVersion'

function Delivery(props: { selectedNewspaper: LocalPaperVersion }) {
  const { t } = useTranslation()
  const { selectedNewspaper } = props

  const [edition, setEdition] = useState('')
  const [deliveryDates, setDeliveryDates] = useState('')
  const [deliveryFrom, setDeliveryFrom] = useState('')
  const [price] = useState('52.65')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({
      edition,
      deliveryDates,
      deliveryFrom,
      price
    })
  }

  return (
    <Box>
      <Typography variant='h4'>{t('delivery.title')}</Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.edition')}
              value={edition}
              onChange={(e) => setEdition(e.target.value as string)}
            >
              {selectedNewspaper.editions.map((edition, index) => (
                <MenuItem key={index} value={edition}>
                  {edition}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.deliveryDays.title')}
              value={deliveryDates}
              onChange={(e) => setDeliveryDates(e.target.value as string)}
            >
              {selectedNewspaper.deliveryDays.map((deliveryDay, index) => (
                <MenuItem key={index} value={deliveryDay}>
                  {t('delivery.deliveryDays.' + deliveryDay)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.deliveryFrom')}
              value={deliveryFrom}
              onChange={(e) => setDeliveryFrom(e.target.value as string)}
            >
              <MenuItem value='23.06.2023'>23.06.2023</MenuItem>
              <MenuItem value='23.07.2023'>23.07.2023</MenuItem>
              <MenuItem value='23.08.2023'>23.08.2023</MenuItem>
              <MenuItem value='...'>...</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <br />
            <Typography variant='h4'>{t('delivery.price')}</Typography>
            <br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Typography variant='h3' sx={{ paddingLeft: '2em' }}>
                {price}
              </Typography>
              <Typography variant='h5' sx={{ paddingLeft: '1em' }}>
                {t('delivery.priceUnit')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
export default Delivery
