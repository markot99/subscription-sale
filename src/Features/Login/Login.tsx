import { Box, Button, Checkbox, CircularProgress, FormControlLabel, Link, TextField, Typography } from '@mui/material'
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginInProgress, setLoginInProgress] = useState(false)
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    if (redirectUrl) {
      return
    }

    if (authenticated) {
      navigate('/me')
    }
  }, [authenticated])

  const onLogIn = async () => {
    setLoginError('')

    try {
      const process = Api.loginUser(email, password)
      setLoginInProgress(true)

      const user = await process
      setLoginInProgress(false)

      dispatch(authenticate(user))
      onLogInSucceeded()
    } catch (error) {
      onLogInFailed()
    }
  }

  const onLogInSucceeded = () => {
    if (redirectUrl) {
      navigate(redirectUrl)
      return
    }

    navigate('/me')
  }

  const onLogInFailed = () => {
    setLoginInProgress(false)

    setEmail('')
    setPassword('')

    setLoginError(t('features.login.invalidCredentials'))
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
          label={t('features.login.email')}
          variant='outlined'
          value={email}
          autoComplete='email'
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label={t('features.login.password')}
          variant='outlined'
          type='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Typography variant='body1' color='error'>
          {loginError}
        </Typography>
        <FormControlLabel control={<Checkbox />} label={t('features.login.rememberMe')} />
        <Button variant='contained' onClick={() => onLogIn()} disabled={loginInProgress} fullWidth>
          {loginInProgress ? <CircularProgress /> : t('features.login.submit')}
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
          {redirectUrl ? (
            <Link href={`/register?redirectUrl=${redirectUrl}`}>{t('features.login.registerNow')}</Link>
          ) : (
            <Link href='/register'>{t('features.login.registerNow')}</Link>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Login
