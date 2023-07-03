import { Box, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Address() {
  const { t } = useTranslation()

  const [title, setTitle] = useState('mr')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [street, setStreet] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({
      title,
      firstName,
      lastName,
      street,
      streetNumber,
      postcode,
      city,
      country
    })
  }

  return (
    <Box>
      <Typography variant='h4'>{t('delivery.address')}</Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Select fullWidth value={title} onChange={(e) => setTitle(e.target.value as string)}>
              <MenuItem value='mr'>{t('title.mr')}</MenuItem>
              <MenuItem value='mrs'>{t('title.mrs')}</MenuItem>
              <MenuItem value='other'>{t('title.other')}</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label={t('address.firstName')} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label={t('address.lastName')} value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Grid>
          <Grid item xs={9}>
            <TextField fullWidth label={t('address.street')} value={street} onChange={(e) => setStreet(e.target.value)} />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label={t('address.streetNumber')} value={streetNumber} onChange={(e) => setStreetNumber(e.target.value)} />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label={t('address.postcode')} value={postcode} onChange={(e) => setPostcode(e.target.value)} />
          </Grid>
          <Grid item xs={9}>
            <TextField fullWidth label={t('address.city')} value={city} onChange={(e) => setCity(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label={t('address.country')} value={country} onChange={(e) => setCountry(e.target.value)} />
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
export default Address
