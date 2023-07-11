import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

export default function Confirmation() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { orderID } = useParams()

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
        {t('features.confirmation.orderNumber') + ' ' + orderID}
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
