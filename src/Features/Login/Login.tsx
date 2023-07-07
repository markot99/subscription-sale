import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Api } from '../../Api/Api'
import { authenticate, isAuthenticated } from '../../Store/Slices/Auth/AuthSlice'

const Login = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const redirectUrl = searchParams.get('redirectUrl')

  const authenticated = useSelector(isAuthenticated)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  useEffect(() => {
    if (authenticated) {
      navigate('/me')
    }
  }, [authenticated])

  const onLogIn = async () => {
    setError('')

    try {
      const user = await Api.loginUser(username, password)

      dispatch(authenticate(user))
      onLogInSucceeded()
    } catch (error) {
      onLogInFailed()
    }
  }

  const onLogInSucceeded = () => {
    if (redirectUrl) {
      navigate(redirectUrl)
    } else {
      navigate('/Me')
    }
  }

  const onLogInFailed = () => {
    setUsername('')
    setPassword('')

    setError(t('features.login.invalidCredentials'))
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
      <Typography variant='h3'>{t('features.login.header')}</Typography>
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
        <TextField
          label={t('features.login.username')}
          variant='outlined'
          value={username}
          autoComplete='username'
          onChange={(e) => setUsername(e.target.value)}
          helperText={error}
          fullWidth
        />
        <TextField
          label={t('features.login.password')}
          variant='outlined'
          type='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={error}
          fullWidth
        />
        <FormControlLabel control={<Checkbox />} label={t('features.login.rememberMe')} />
        <Button variant='contained' onClick={() => onLogIn()} fullWidth>
          {t('features.login.submit')}
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
          <Link href='/'>{t('features.login.forgotPassword')}</Link>
          <Link href='/register'>{t('features.login.registerNow')}</Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
