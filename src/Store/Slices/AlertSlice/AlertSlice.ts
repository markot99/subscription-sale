import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Alert, AlertSeverity } from '../../../Models/Alert'

export interface AlertState {
  alert: Alert
}

const initialState = {
  alert: {
    severity: 'none',
    message: ''
  }
} as AlertState

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert(state, action: PayloadAction<Alert>) {
      state.alert = action.payload
    },
    clearAlert(state) {
      state.alert.message = ''
      state.alert.severity = AlertSeverity.None
    }
  }
})

export const { setAlert, clearAlert } = alertSlice.actions
export default alertSlice.reducer
