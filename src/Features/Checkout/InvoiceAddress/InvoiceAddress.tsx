import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Address from '../../Address/Address'
import { DeliveryAddress } from '../../../Models/DeliveryAddress'

export default function InvoiceAddress() {
  const { t } = useTranslation()

  const [invoiceAddress, setInvoiceAddress] = React.useState<DeliveryAddress>({} as DeliveryAddress)
  const [sameAsDelivery, setSameAsDelivery] = useState(false)

  return (
    <Box>
      <Typography variant='h4' textAlign={'center'}>
        {t('features.checkout.invoice.title')}
      </Typography>
      <br />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={sameAsDelivery} onChange={(event) => setSameAsDelivery(event.target.checked)} defaultChecked />}
          label={t('features.checkout.invoice.sameAsDelivery')}
        />
      </FormGroup>
      <Address address={invoiceAddress} setAddress={setInvoiceAddress} disabled={sameAsDelivery} />
    </Box>
  )
}
