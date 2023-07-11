import { Box, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { CountryApi } from '../../../Api/CountryApi'
import { Subscription } from '../../../Models/Subscription'
import { UserTitle } from '../../../Models/User'
import { setSubscription } from '../../../Store/Slices/SubscriptionSlice/SubscriptionSlice'
import { AppDispatch, RootState } from '../../../Store/Store'

function InvoiceAddress() {
  const { t } = useTranslation()
  const dispatch = useDispatch() as AppDispatch

  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)
  const [sameAsDelivery, setSameAsDelivery] = useState(true)
  const [countries, setCountries] = useState<string[]>([])

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

  useEffect(() => {
    dispatch(
      setSubscription({
        ...subscription,
        invoiceAddress: {
          ...subscription.deliveryAddress
        }
      })
    )
  }, [])

  const handleInvoiceAddressSameAsDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    if (isChecked) {
      dispatch(
        setSubscription({
          ...subscription,
          invoiceAddress: {
            ...subscription.deliveryAddress
          }
        })
      )
    }
    setSameAsDelivery(isChecked)
    console.log('Checkbox ist jetzt:', isChecked)
  }

  return (
    <Box>
      <Typography variant='h4' textAlign={'center'}>
        {t('features.checkout.invoice.title')}
      </Typography>
      <br />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={sameAsDelivery} onChange={handleInvoiceAddressSameAsDeliveryChange} />}
          label={t('features.checkout.invoice.sameAsDelivery')}
        />
      </FormGroup>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <TextField
              disabled={sameAsDelivery}
              select
              fullWidth
              label={t('address.title')}
              value={subscription.invoiceAddress.title}
              error={!subscription.invoiceAddress.title}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    invoiceAddress: {
                      ...subscription.invoiceAddress,
                      title: e.target.value
                    }
                  })
                )
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
              disabled={sameAsDelivery}
              fullWidth
              label={t('address.firstName')}
              value={subscription.invoiceAddress.firstName}
              error={!subscription.invoiceAddress.firstName}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    invoiceAddress: {
                      ...subscription.invoiceAddress,
                      firstName: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={sameAsDelivery}
              fullWidth
              label={t('address.lastName')}
              value={subscription.invoiceAddress.lastName}
              error={!subscription.invoiceAddress.lastName}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    invoiceAddress: {
                      ...subscription.invoiceAddress,
                      lastName: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              disabled={sameAsDelivery}
              fullWidth
              label={t('address.street')}
              value={subscription.invoiceAddress.street}
              error={!subscription.invoiceAddress.street}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    invoiceAddress: {
                      ...subscription.invoiceAddress,
                      street: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              disabled={sameAsDelivery}
              fullWidth
              label={t('address.houseNumber')}
              value={subscription.invoiceAddress.houseNumber}
              error={!subscription.invoiceAddress.houseNumber}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    invoiceAddress: {
                      ...subscription.invoiceAddress,
                      houseNumber: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              disabled={sameAsDelivery}
              fullWidth
              label={t('address.postcode')}
              value={subscription.invoiceAddress.postalCode}
              error={!subscription.invoiceAddress.postalCode}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    invoiceAddress: {
                      ...subscription.invoiceAddress,
                      postalCode: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              disabled={sameAsDelivery}
              fullWidth
              label={t('address.city')}
              value={subscription.invoiceAddress.city}
              error={!subscription.invoiceAddress.city}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    invoiceAddress: {
                      ...subscription.invoiceAddress,
                      city: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={sameAsDelivery}
              select
              fullWidth
              label={t('address.country')}
              value={countries.length != 0 ? subscription.invoiceAddress.country : ''}
              error={!subscription.invoiceAddress.country}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    invoiceAddress: {
                      ...subscription.invoiceAddress,
                      country: e.target.value
                    }
                  })
                )
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
export default InvoiceAddress
