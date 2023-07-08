import CloseIcon from '@mui/icons-material/Close'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert as AlertModel } from '../../Models/Alert'
import { clearAlert } from '../../Store/Slices/AlertSlice/AlertSlice'
import { AppDispatch, RootState } from '../../Store/Store'

export default function AlertBox() {
  type AlertType = 'info' | 'warning' | 'error' | 'success'

  const [open, setOpen] = React.useState(false)
  const [severity, setSeverity] = React.useState<AlertType>('info')

  const alert = useSelector<RootState, AlertModel>((state) => state.alert.alert)

  const dispatch = useDispatch() as AppDispatch

  useEffect(() => {
    if (alert.severity !== 'none') {
      setSeverity(alert.severity)
      setOpen(true)
    } else {
      setOpen(false)
    }

    if (alert.timeout !== 0) {
      setTimeout(() => {
        dispatch(clearAlert())
      }, alert.timeout * 1000) // 10 Sekunden
    }
  }, [alert, dispatch])

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alert.message}
        </Alert>
      </Collapse>
    </Box>
  )
}
