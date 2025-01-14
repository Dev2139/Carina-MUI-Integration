import React, { useState } from 'react';
import { Box, Grid, Paper, Button, Stepper, Step, StepLabel, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ShippingAddressForm from './components/ShippingAddressForm';
import CardBankDetails from './components/CardBankDetails';
import OrderReview from './components/OrderReview'; 
import SummaryPanel from './components/SummaryPanel';

function App() {
  const steps = ['Shipping Address', 'Payment Details', 'Order Review'];
  const [activeStep, setActiveStep] = useState(0);
  
  const [shippingData, setShippingData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false); 
  const [openDialog, setOpenDialog] = useState(false);  
  const [orderId, setOrderId] = useState(null);  

  const generateOrderId = () => {
    return 'ORD-' + Math.floor(Math.random() * 1000000);  
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      const newOrderId = generateOrderId();
      setOrderId(newOrderId);  
      setOrderPlaced(true);
      setOpenDialog(true);  
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);  
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
      }}
    >
      <Grid container spacing={3} sx={{ width: '90%', height: '100%' }}>
        <Grid item xs={12} md={4}>
          <SummaryPanel />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={12} sx={{ p: 4 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && <ShippingAddressForm setShippingData={setShippingData} />}
            {activeStep === 1 && <CardBankDetails setPaymentData={setPaymentData} />}
            {activeStep === 2 && <OrderReview shippingData={shippingData} paymentData={paymentData} />}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button
                variant="outlined"
                startIcon={<ChevronLeftRoundedIcon />}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                endIcon={<ChevronRightRoundedIcon />}
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Order Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="h6" color="success.main">
            Aapka order confirm ho gya hai. Aapka order ID: {orderId}. Aapka order aap tk jald hi pahoch jayega.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default App;
