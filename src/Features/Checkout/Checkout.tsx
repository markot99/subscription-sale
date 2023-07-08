import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Subscription } from '../../Models/Subscription'
import { confirmSubscription } from '../../Store/Slices/SubscriptionSlice/SubscriptionSlice'
import { AppDispatch, RootState } from '../../Store/Store'
import FinalCheck from './FinalCheck/FinalCheck'
import InvoiceAddress from './InvoiceAddress/InvoiceAddress'
import Payment from './Payment/Payment'

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [steps, setSteps] = React.useState<string[]>([])
  const [privacyAccepted, setPrivacyAccepted] = React.useState(false)
  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)
  const dispatch = useDispatch() as AppDispatch
  const navigate = useNavigate()

  const { t } = useTranslation()

  // handle resize (remove label of steps on small devices)
  React.useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      if (window.innerWidth < 550) {
        const newSteps = ['', '', '']
        setSteps(newSteps)
      } else {
        const newSteps = [t('features.checkout.invoice.title'), t('features.checkout.payment.title'), t('features.checkout.overview.title')]
        setSteps(newSteps)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      await dispatch(confirmSubscription(subscription))
      navigate('/confirmation')
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}

          return (
            <Step key={index} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <br />
      <Box>
        {activeStep === 0 && <InvoiceAddress />}
        {activeStep === 1 && <Payment />}
        {activeStep === 2 && <FinalCheck />}
      </Box>
      {activeStep === steps.length - 1 ? (
        <Box sx={{ display: 'flex', pt: 2, justifyContent: 'flex-end' }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={privacyAccepted} onChange={(event) => setPrivacyAccepted(event.target.checked)} />}
              label={t('features.checkout.privacyAccepted')}
            />
          </FormGroup>
        </Box>
      ) : (
        <> </>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          {t('features.checkout.buttonBack')}
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />

        {activeStep === steps.length - 1 ? (
          <Button variant='contained' color='primary' onClick={handleNext} disabled={!privacyAccepted}>
            {t('features.checkout.buttonFinish')}
          </Button>
        ) : (
          <Button variant='contained' color='primary' onClick={handleNext}>
            {t('features.checkout.buttonNext')}
          </Button>
        )}
      </Box>
    </Box>
  )
}
