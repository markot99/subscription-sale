import { Box, Button, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Api } from '../../Api/Api'
import { authenticate, authenticatedUser } from '../../Store/Slices/Auth/AuthSlice'

const Profile = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const user = useSelector(authenticatedUser)

  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
  const [confirmPassword, setConfirmPassword] = useState(user.password)

  const [street, setStreet] = useState(user.invoiceAddress.street ?? '')
  const [houseNumber, setStreetNumber] = useState(user.invoiceAddress.houseNumber ?? '')
  const [city, setCity] = useState(user.invoiceAddress.city ?? '')
  const [postalCode, setPostalcode] = useState(user.invoiceAddress.postalCode ?? '')
  const [country, setCountry] = useState(user.invoiceAddress.country ?? '')

  const onSaveProfile = async () => {
    const userClone = { ...user }
    const addressClone = { ...userClone.invoiceAddress }

    userClone.firstName = firstName
    userClone.lastName = lastName
    userClone.email = email
    userClone.password = password

    addressClone.street = street
    addressClone.houseNumber = houseNumber
    addressClone.city = city
    addressClone.postalCode = postalCode
    addressClone.country = country

    userClone.invoiceAddress = addressClone

    dispatch(authenticate(userClone))
    await Api.updateUser(userClone)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'center',
              gap: 2,
              width: 1,
              padding: 5
            }}
          >
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  label={t('features.me.firstName')}
                  variant='outlined'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  label={t('features.me.lastName')}
                  variant='outlined'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <TextField
              label={t('features.me.email')}
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              label={t('features.me.password')}
              variant='outlined'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            <TextField
              label={t('features.me.confirmPassword')}
              variant='outlined'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'center',
              gap: 2,
              width: 1,
              padding: 5
            }}
          >
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  label={t('features.me.street')}
                  variant='outlined'
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  label={t('features.me.houseNumber')}
                  variant='outlined'
                  value={houseNumber}
                  onChange={(e) => setStreetNumber(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>

            <TextField
              label={t('features.me.location')}
              variant='outlined'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              fullWidth
            />
            <TextField
              label={t('features.me.zipCode')}
              variant='outlined'
              value={postalCode}
              onChange={(e) => setPostalcode(e.target.value)}
              fullWidth
            />
            <TextField
              label={t('features.me.country')}
              variant='outlined'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          width: 1
        }}
      >
        <Button variant='contained' onClick={() => onSaveProfile()}>
          {t('features.me.save')}
        </Button>
      </Box>
    </Box>
  )
}

export default Profile
