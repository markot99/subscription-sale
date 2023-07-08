import { CssBaseline, LinkProps, ThemeProvider, createTheme } from '@mui/material'
import { cyan, green, red, yellow } from '@mui/material/colors'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import store from '../../Store/Store'
import App from '../App/App'

/**
 * Overrides the default Material UI link behavior to use react router's link component.
 */
const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>((props, ref) => {
  const { href, ...other } = props
  return <RouterLink ref={ref} to={href} {...other} />
})

/**
 * Fix for the following error: 'component is missing display name'.
 */
LinkBehavior.displayName = 'LinkBehavior'

/**
 * The global Material UI theme definition.
 */
const Theme = createTheme({
  palette: {
    primary: green,
    secondary: cyan,
    error: red,
    warning: yellow,
    info: cyan,
    success: green
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior
      } as LinkProps
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior
      }
    }
  }
})

/**
 * The app shell component.
 * This component represents a wrapper around the main app.
 * Used to provide external dependencies and theming.
 */
const AppShell = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

/**
 * The component export.
 */
export default AppShell
