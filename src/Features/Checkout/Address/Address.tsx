import { Box, Grid, MenuItem, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CountryApi } from '../../../Api/CountryApi'
import { DetailedAddress } from '../../../Models/Address'
import { UserTitle } from '../../../Models/User'

function Address(props: {
  address: DetailedAddress
  setAddress: React.Dispatch<React.SetStateAction<DetailedAddress>>
  disabled: boolean
}) {
  const { t } = useTranslation()

  const { address, setAddress, disabled } = props
  const [countries, setCountries] = React.useState<string[]>([])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const fetchAvailableCountries = async () => {
    try {
      const availableCountries = await CountryApi.fetchAvailableCountries()
      setCountries(availableCountries)
    } catch (error) {
      console.log('Failed to get available countries')
    }
  }

  useEffect(() => {
    fetchAvailableCountries()
  }, [])

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <TextField
              disabled={disabled}
              select
              fullWidth
              label={t('address.title')}
              value={address.title}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  title: e.target.value
                }))
              }
            >
              {Object.values(UserTitle).map((value) => (
                <MenuItem key={value} value={value}>
                  {t('title.' + value)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={disabled}
              fullWidth
              label={t('address.firstName')}
              value={address.firstName}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  firstName: e.target.value
                }))
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={disabled}
              fullWidth
              label={t('address.lastName')}
              value={address.lastName}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  lastName: e.target.value
                }))
              }
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              disabled={disabled}
              fullWidth
              label={t('address.street')}
              value={address.street}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  street: e.target.value
                }))
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              disabled={disabled}
              fullWidth
              label={t('address.houseNumber')}
              value={address.houseNumber}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  houseNumber: e.target.value
                }))
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              disabled={disabled}
              fullWidth
              label={t('address.postcode')}
              value={address.postalCode}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  postalCode: e.target.value
                }))
              }
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              disabled={disabled}
              fullWidth
              label={t('address.city')}
              value={address.city}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  city: e.target.value
                }))
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('address.country')}
              value={address.country}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  country: e.target.value
                }))
              }
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
export default Address
