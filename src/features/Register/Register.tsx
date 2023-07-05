import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { User } from '../../Models/User'
import { isAuthenticated } from '../../Store/Slices/Auth/AuthSlice'
import { storeUser } from '../../Store/Slices/User/UserSlice'

const Register = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const redirectUrl = searchParams.get('redirectUrl')

  const authenticated = useSelector(isAuthenticated)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (authenticated) {
      navigate('/')
    }
  }, [authenticated])

  const validateInput = () => {
    if (!firstName) {
      return false
    }

    if (!lastName) {
      return false
    }

    if (!email) {
      return false
    }

    if (!password) {
      return false
    }

    return true
  }

  const onRegister = () => {
    const isValidInput = validateInput()
    if (!isValidInput) {
      return
    }

    const user: User = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      invoiceAddress: {
        street: '',
        streetNumber: '',
        location: '',
        zipCode: '',
        country: ''
      }
    }

    dispatch(storeUser(user))

    if (redirectUrl) {
      navigate(redirectUrl)
    } else {
      navigate('/')
    }
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
      <Typography variant='h3'>{t('features.register.header')}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          padding: 5
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'justify-between',
            alignItems: 'center',
            gap: 5,
            width: 1
          }}
        >
          <TextField
            label={t('features.register.firstName')}
            variant='outlined'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
          <TextField
            label={t('features.register.lastName')}
            variant='outlined'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
        </Box>
        <TextField
          label={t('features.register.email')}
          variant='outlined'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label={t('features.register.password')}
          variant='outlined'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <FormControlLabel control={<Checkbox />} label={t('features.register.emailUpdates')} />
        <Button variant='contained' onClick={() => onRegister()} fullWidth>
          {t('features.register.submit')}
        </Button>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 5
          }}
        >
          <Link href='/login'>{t('features.register.logIn')}</Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Register
