import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
}));

const FormHeader = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

export default function CardBankDetails({ setPaymentData }) {
  const [formData, setFormData] = useState({
    cardType: '',
    cardNumber: '',
    expiryDate: '',
    cardHolder: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setPaymentData(formData); // Pass data to the parent component
  };

  return (
    <FormWrapper>
      <FormHeader variant="h6">Enter Payment Details</FormHeader>
      <Grid container spacing={3}>
        {/* Card Type */}
        <Grid item xs={12}>
          <TextField
            label="Card Type"
            variant="outlined"
            fullWidth
            name="cardType"
            value={formData.cardType}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Card Number */}
        <Grid item xs={12}>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            inputProps={{
              maxLength: 19, // Optional: limit the card number length
            }}
          />
        </Grid>

        {/* Expiry Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Expiry Date"
            variant="outlined"
            fullWidth
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
            inputProps={{
              placeholder: 'MM/YY',
              maxLength: 5, // Optional: format expiry date to MM/YY
            }}
          />
        </Grid>

        {/* Cardholder Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Cardholder Name"
            variant="outlined"
            fullWidth
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Save Payment Details
          </Button>
        </Grid>
      </Grid>
    </FormWrapper>
  );
}
