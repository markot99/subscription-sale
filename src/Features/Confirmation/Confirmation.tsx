import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Subscription } from '../../Models/Subscription'
import { RootState } from '../../Store/Store'

export default function Confirmation() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)

  const goToPersonalArea = () => {
    navigate('/me')
  }

  return (
    <Box>
      <Typography variant='h4' textAlign={'center'}>
        {t('features.confirmation.title')}
      </Typography>
      <br />
      <Typography variant='h5' textAlign={'center'}>
        {t('features.confirmation.thanks')}
      </Typography>
      <br />
      <Typography variant='h5' textAlign={'center'}>
        {t('features.confirmation.orderNumber') + ' ' + subscription.id}
      </Typography>

      <br />
      <br />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' color='primary' onClick={goToPersonalArea}>
          {t('features.confirmation.goToPersonalArea')}
        </Button>
      </Box>
    </Box>
  )
}
