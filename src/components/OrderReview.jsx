import React from 'react';
import { Typography, Grid, Stack, Divider } from '@mui/material';

export default function OrderReview({ shippingData, paymentData }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Review Your Order</Typography>
      
      <Divider />
      <Typography variant="subtitle1">Shipping Details</Typography>
      <Typography>{shippingData.firstName} {shippingData.lastName}</Typography>
      <Typography>{shippingData.address1}, {shippingData.address2}</Typography>
      <Typography>{shippingData.city}, {shippingData.state}, {shippingData.zip}</Typography>

      <Divider />
      <Typography variant="subtitle1">Payment Details</Typography>
      <Typography>Card Type: {paymentData.cardType}</Typography>
      <Typography>Card Holder: {paymentData.cardHolder}</Typography>
      <Typography>Card Number: {paymentData.cardNumber}</Typography>
      <Typography>Expiry Date: {paymentData.expiryDate}</Typography>
    </Stack>
  );
}
