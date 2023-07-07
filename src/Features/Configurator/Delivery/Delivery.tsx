import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import moment from 'moment'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LocalPaperVersion } from '../../../Models/LocalPaperVersion'
import { DeliveryMethod, PaymentInterval, SubscriptionInterval } from '../../../Models/Subscription'

function Delivery(props: { selectedNewspaper: LocalPaperVersion; price: string }) {
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null)
  const [selectedSubscriptionInterval, setSelectedSubscriptionInterval] = useState<SubscriptionInterval>()

  const handleDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date)
  }

  const getDisabledDates = (date: moment.Moment) => {
    if (selectedSubscriptionInterval == SubscriptionInterval.Weekends) {
      return !(date.isoWeekday() === 6 || date.isoWeekday() === 7)
    } else if (selectedSubscriptionInterval == SubscriptionInterval.Daily) {
      return !(date.isoWeekday() >= 1 && date.isoWeekday() <= 7)
    } else {
      return true
    }
  }

  const { t } = useTranslation()
  const { selectedNewspaper, price } = props
  console.log(selectedNewspaper)

  const [edition, setEdition] = useState('')
  const [deliveryDates, setDeliveryDates] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({
      edition,
      deliveryDates
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
              {/*selectedNewspaper.editions.map((edition, index) => (
                <MenuItem key={index} value={edition}>
                  {edition}
                </MenuItem>
              ))*/}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.deliveryDays.title')}
              value={selectedSubscriptionInterval}
              onChange={(e) => setSelectedSubscriptionInterval(e.target.value as SubscriptionInterval)}
            >
              {Object.values(SubscriptionInterval).map((value) => (
                <MenuItem key={value} value={value}>
                  {t('delivery.deliveryDays.' + value)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.deliveryMethod.title')}
              value={deliveryDates}
              onChange={(e) => setDeliveryDates(e.target.value as string)}
            >
              {Object.values(DeliveryMethod).map((value) => (
                <MenuItem key={value} value={value}>
                  {t('delivery.deliveryMethod.' + value)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.paymentInterval.title')}
              value={deliveryDates}
              onChange={(e) => setDeliveryDates(e.target.value as string)}
            >
              {Object.values(PaymentInterval).map((value) => (
                <MenuItem key={value} value={value}>
                  {t('delivery.paymentInterval.' + value)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='de'>
              <DatePicker value={selectedDate} onChange={handleDateChange} shouldDisableDate={getDisabledDates} />
            </LocalizationProvider>
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
