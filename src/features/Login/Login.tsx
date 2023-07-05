import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { authenticate, isAuthenticated } from '../../Store/Slices/Auth/AuthSlice'
import { registeredUsers } from '../../Store/Slices/User/UserSlice'

const Login = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const redirectUrl = searchParams.get('redirectUrl')

  const users = useSelector(registeredUsers)
  const authenticated = useSelector(isAuthenticated)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (authenticated) {
      navigate('/me')
    }
  }, [authenticated])

  const onLogIn = () => {
    const user = users.find((user) => username === user.firstName + ' ' + user.lastName && user.password === password)

    if (!user) {
      onLogInFailed()
      return
    }

    dispatch(authenticate(user))
    onLogInSucceeded()
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
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label={t('features.login.password')}
          variant='outlined'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
