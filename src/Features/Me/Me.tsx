import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Api } from '../../Api/Api'
import { authenticate, authenticatedUser } from '../../Store/Slices/Auth/AuthSlice'

const Me = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const user = useSelector(authenticatedUser)

  if (!user) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1
        }}
      >
        <Typography variant='h3'>Not authenticated.</Typography>
      </Box>
    )
  }

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
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Typography variant='h3'>{t('features.me.header')}</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: 2
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'center',
              gap: 2,
              padding: 5
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                width: 1
              }}
            >
              <TextField
                label={t('features.me.firstName')}
                variant='outlined'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
              />
              <TextField
                label={t('features.me.lastName')}
                variant='outlined'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
              />
            </Box>
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'center',
              gap: 2,
              padding: 5
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                width: 1
              }}
            >
              <TextField
                label={t('features.me.street')}
                variant='outlined'
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                fullWidth
              />
              <TextField
                label={t('features.me.houseNumber')}
                variant='outlined'
                value={houseNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
                fullWidth
              />
            </Box>
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
        </Box>
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
    </>
  )
}

export default Me
