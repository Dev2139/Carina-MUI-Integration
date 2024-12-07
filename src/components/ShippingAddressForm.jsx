import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  marginTop: '30px',
}));

const FormHeader = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

const validateContact = (contact) => {
  const re = /^[0-9]{10}$/;
  return re.test(contact);
};

export default function ShippingAddressForm({ setShippingData }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    contact: '',
    city: '',
    state: '',
    zip: '',
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const validationErrors = {};

    
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'address2') {
        validationErrors[key] = 'This field is required';
      }
    });

    
    if (formData.email && !validateEmail(formData.email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    
    if (formData.contact && !validateContact(formData.contact)) {
      validationErrors.contact = 'Please enter a valid 10-digit contact number';
    }

    
    if (Object.keys(validationErrors).length === 0) {
      setShippingData(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <FormWrapper>
      <FormHeader variant="h6">Shipping Address Form</FormHeader>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Email id"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Address Line 1"
            variant="outlined"
            fullWidth
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            error={!!errors.address1}
            helperText={errors.address1}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Address Line 2 (Optional)"
            variant="outlined"
            fullWidth
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Contact Number"
            variant="outlined"
            fullWidth
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            error={!!errors.contact}
            helperText={errors.contact}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            name="state"
            value={formData.state}
            onChange={handleChange}
            error={!!errors.state}
            helperText={errors.state}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Zip/Postal Code"
            variant="outlined"
            fullWidth
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            error={!!errors.zip}
            helperText={errors.zip}
            required
          />
        </Grid>

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
            Save Shipping Address
          </Button>
        </Grid>
      </Grid>
    </FormWrapper>
  );
}
