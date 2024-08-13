import React, { useState, useEffect } from 'react';
import { Flex, Box, FormControl, Input, Button } from '@chakra-ui/react'; // Chakra UI bileşenleri
import axios from 'axios'; // Axios importu
import { useLocation, useNavigate } from 'react-router-dom'; // URL'den token'ı almak için

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  useEffect(() => {
    async function verifyToken() {
      try {
        const response = await axios.post('http://localhost:5000/api/verify-token', { token });
        setIsTokenValid(response.data.valid);
      } catch (error) {
        console.error('Token doğrulama hatası:', error);
        alert('Token doğrulama hatası.');
      }
    }

    if (token) {
      verifyToken();
    }
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Şifreler uyuşmuyor.');
      return;
    }

    setIsProcessing(true);

    try {
      await axios.post('http://localhost:5000/api/reset-password', { token, newPassword });
      alert('Şifreniz başarıyla güncellendi.');
      navigate('/');
    } catch (error) {
      console.error('Şifre güncelleme hatası:', error);
      alert('Şifre güncelleme hatası.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Flex align='center' width='full' justifyContent='center'>
      <Box pt={10}>
        <Box my={12} textAlign='center' mt='12'>
          {isTokenValid ? (
            <form onSubmit={handleSubmit} className="LoginglassCard">
              <FormControl mt='12' mb='5'>
                <Input
                  name='password'
                  type='password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="forms rounded-full"
                  placeholder="New Password"
                  textAlign='center'
                  color='black'
                />
              </FormControl>
              <FormControl mt='12' mb='12'>
                <Input
                  name='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="forms rounded-full"
                  placeholder="Confirm Password"
                  textAlign='center'
                  color='black'
                />
              </FormControl>
              <div>
                <Button type="submit" className="signUp rounded-full" isLoading={isProcessing}>
                  Reset
                </Button>
              </div>
            </form>
          ) : (
            <p>Token doğrulanıyor...</p>
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default ResetPassword;
