import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Api } from '../../Api/Api'
import { User, UserTitle } from '../../Models/User'
import { authenticate, isAuthenticated } from '../../Store/Slices/Auth/AuthSlice'
import { cachedSubscription } from '../../Store/Slices/SubscriptionSlice/SubscriptionSlice'

const Register = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const redirectUrl = searchParams.get('redirectUrl')

  const authenticated = useSelector(isAuthenticated)
  const subscription = useSelector(cachedSubscription)

  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [registerInProgress, setRegisterInProgress] = useState(false)
  const [registerError, setRegisterError] = useState('')

  useEffect(() => {
    if (authenticated) {
      navigate('/')
    }
  }, [authenticated])

  useEffect(() => {
    if (!subscription) {
      return
    }

    setTitle(subscription.deliveryAddress.title)
    setFirstName(subscription.deliveryAddress.firstName)
    setLastName(subscription.deliveryAddress.lastName)
  }, [subscription])

  const validateInput = () => {
    if (!firstName) {
      setFirstNameError(t('features.register.invalid.firstName'))
      return false
    }

    if (!lastName) {
      setLastNameError(t('features.register.invalid.lastName'))
      return false
    }

    if (!email) {
      setEmailError(t('features.register.invalid.email'))
      return false
    }

    if (!password) {
      setPasswordError(t('features.register.invalid.password'))
      return false
    }

    return true
  }

  const onRegister = async () => {
    setRegisterError('')
    setFirstNameError('')
    setLastNameError('')
    setEmailError('')
    setPasswordError('')

    const isValidInput = validateInput()
    if (!isValidInput) {
      return
    }

    const user: User = {
      id: uuidv4(),
      title: title,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      invoiceAddress: {
        street: '',
        houseNumber: '',
        city: '',
        postalCode: '',
        country: ''
      }
    }

    try {
      const process = Api.createUser(user)
      setRegisterInProgress(true)

      await process
      setRegisterInProgress(false)

      dispatch(authenticate(user))
    } catch (error) {
      setRegisterError(t('features.register.error.failed'))
      return
    }

    if (redirectUrl) {
      navigate(redirectUrl)
      return
    }

    navigate('/me')
  }

  function getEnumKey(enumObj: object, value: string): string | undefined {
    const keys = Object.keys(enumObj) as (keyof typeof enumObj)[]
    const matchingKey = keys.find((key) => enumObj[key] === value)

    return matchingKey ? enumObj[matchingKey] : undefined
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
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          padding: 5
        }}
      >
        <FormControl fullWidth>
          <InputLabel>{t('features.register.title.header')}</InputLabel>
          <Select label={t('features.register.title.header')} value={title} onChange={(e) => setTitle(e.target.value)}>
            {Object.values(UserTitle).map((value) => (
              <MenuItem key={value} value={value}>
                {t('title.' + getEnumKey(UserTitle, value))}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
            autoComplete='given-name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            helperText={firstNameError}
            fullWidth
          />
          <TextField
            label={t('features.register.lastName')}
            variant='outlined'
            autoComplete='family-name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            helperText={lastNameError}
            fullWidth
          />
        </Box>
        <TextField
          label={t('features.register.email')}
          variant='outlined'
          type='email'
          autoComplete='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={emailError}
          fullWidth
        />
        <TextField
          label={t('features.register.password')}
          variant='outlined'
          type='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={passwordError}
          fullWidth
        />
        <Typography variant='body1' color='error'>
          {registerError}
        </Typography>
        <FormControlLabel control={<Checkbox />} label={t('features.register.emailUpdates')} />
        <Button variant='contained' onClick={() => onRegister()} disabled={registerInProgress} fullWidth>
          {registerInProgress ? <CircularProgress /> : t('features.register.submit')}
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
          {redirectUrl ? (
            <Link href={`/login?redirectUrl=${redirectUrl}`}>{t('features.register.logIn')}</Link>
          ) : (
            <Link href='/login'>{t('features.register.logIn')}</Link>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Register
