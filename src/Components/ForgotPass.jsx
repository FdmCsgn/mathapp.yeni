import React, { useState } from "react";
import { Flex, Box, Heading, FormControl, Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import Forgotpassimg from '../assets/icons/Forgotpassimg.png';

function ForgotPass() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email });
      setMessage(response.data);
    } catch (error) {
      console.error('Error in forgot password request', error);
      setMessage('Error occurred while sending email.');
    }
  };

  return (
    <div>
      <Flex align='center' width='full' justifyContent='center' className="ForgotCard">
        <Box pt={10}>
          <Box textAlign='center' mt='12'>
            <form onSubmit={handleSubmit} className="LoginglassCard">
              <img src={Forgotpassimg} alt="" className="login-png" />
              <Heading fontSize='50px' fontFamily='Gupter, serif' color='#ffe6e6'>Forgot Password</Heading>
              <FormControl mt='12' mb='5'>
                <Input 
                  type="Email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="forms rounded-full"
                  placeholder="e-mail"
                  textAlign='center'
                  required
                />
              </FormControl>
              <Button type="submit" className="signUp rounded-full">
                Send
              </Button>
              {message && <p>{message}</p>}
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default ForgotPass;
