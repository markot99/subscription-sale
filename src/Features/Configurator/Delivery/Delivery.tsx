import { Box, Grid, MenuItem, Select, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Delivery() {
  const { t } = useTranslation()

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
            <Select fullWidth value={edition} onChange={(e) => setEdition(e.target.value as string)}>
              <MenuItem value='north'>Nord</MenuItem>
              <MenuItem value='ost'>Ost</MenuItem>
              <MenuItem value='west'>West</MenuItem>
              <MenuItem value='...'>...</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Select fullWidth value={deliveryDates} onChange={(e) => setDeliveryDates(e.target.value as string)}>
              <MenuItem value='monday-saturday'>Monday - Saturday</MenuItem>
              <MenuItem value='monday-sunday'>Monday - Sunday</MenuItem>
              <MenuItem value='sunday'>Sunday</MenuItem>
              <MenuItem value='...'>...</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Select fullWidth value={deliveryFrom} onChange={(e) => setDeliveryFrom(e.target.value as string)}>
              <MenuItem value='23.06.2023'>23.06.2023</MenuItem>
              <MenuItem value='23.07.2023'>23.07.2023</MenuItem>
              <MenuItem value='23.08.2023'>23.08.2023</MenuItem>
              <MenuItem value='...'>...</MenuItem>
            </Select>
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
