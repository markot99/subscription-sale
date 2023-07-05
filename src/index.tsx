import React from 'react'
import ReactDOM from 'react-dom/client'
import AppShell from './Features/AppShell/AppShell'
import './i18n'
import './index.css'

/**
 * The document's root element.
 */
const element = document.getElementById('root') as HTMLElement

/**
 * The react root.
 */
const root = ReactDOM.createRoot(element)

/**
 * Renders the application.
 */
root.render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>
)
