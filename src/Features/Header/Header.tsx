import NewspaperIcon from '@mui/icons-material/Newspaper'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Translation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authenticatedUser, deauthenticate, isAuthenticated } from '../../Store/Slices/Auth/AuthSlice'

function Header() {
  const user = useSelector(authenticatedUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleProfile = () => {
    setAnchorEl(null)
    navigate('/me')
  }

  const handleLogout = () => {
    setAnchorEl(null)
    dispatch(deauthenticate())
    navigate('/')
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const navigateHome = () => {
    navigate('/')
  }

  const checkIfUserIsLoggedIn = () => {
    const authenticated = useSelector(isAuthenticated)
    return authenticated
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  return (
    <AppBar position='static'>
      <Container style={{ maxWidth: '100%' }}>
        <Toolbar disableGutters>
          <NewspaperIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onClick={navigateHome}
          >
            <Translation>{(t) => <p>{t('appname')}</p>}</Translation>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}></Box>

          <Box>
            {checkIfUserIsLoggedIn() ? (
              <>
                <IconButton sx={{ p: 0 }} onClick={handleMenu}>
                  <Avatar alt='Remy Sharp'>{user.firstName.charAt(0) + user.lastName.charAt(0)}</Avatar>
                </IconButton>
              </>
            ) : (
              // <Button variant='contained' color='secondary' href='/login'>
              //   Log In
              // </Button>
              <IconButton sx={{ p: 0 }} onClick={() => navigate('/login')}>
                <Avatar alt='Remy Sharp'></Avatar>
              </IconButton>
            )}
          </Box>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
