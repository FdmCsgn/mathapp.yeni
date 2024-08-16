import React, { useState } from 'react';
import { Flex, Box, FormControl, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function ParentSignUp() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    ÖğrenciAdı: '',
    ÖğrenciSoyadı: '',
    Tlf: '',
    password: '',
    passwordConfirm: '',
    birthDate: '',
    Şehir: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Önceki hataları temizle

    // Form verilerini doğrula
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.username || !formData.password || !formData.passwordConfirm) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      setError("Parolalar eşleşmiyor!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5178/signup/ParentsSignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          ÖğrenciAdı: formData.ÖğrenciAdı,
          ÖğrenciSoyadı: formData.ÖğrenciSoyadı,
          Tlf: formData.Tlf,
          password: formData.password,
          passwordConfirm: formData.passwordConfirm,
          birthDate: formData.birthDate,
          Şehir: formData.Şehir
        })
      });

      if (response.ok) {
        alert("Kayıt başarılı!");
        navigate('/'); // Ana sayfaya yönlendirme
      } else {
        alert("Kayıt başarısız oldu.");
      }
    } catch (error) {
      console.error("Kayıt sırasında hata:", error);
      setError("Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className='mt-5'>
      <Flex align='center' width='full' justifyContent='center'>
        <Box pt={10}>
          <Box my={12} textAlign='center' mt='12'>
            <form onSubmit={handleSubmit} className="LoginglassCard">
              <FormControl mt='12' mb='5'>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Mail"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Ad"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Soyad"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Kullanıcı Adı"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="ÖğrenciAdı"
                  type="text"
                  value={formData.ÖğrenciAdı}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Öğrenci Adı"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="ÖğrenciSoyadı"
                  type="text"
                  value={formData.ÖğrenciSoyadı}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Öğrenci Soyadı"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="Tlf"
                  type="text"
                  value={formData.Tlf}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Telefon Numarası"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Şifre"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="passwordConfirm"
                  type="password"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Şifre Tekrar"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  placeholder="Doğum Tarihi"
                  textAlign='center'
                  textColor='black'
                  className="forms rounded-full"
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <Input
                  name="Şehir"
                  type="text"
                  value={formData.Şehir}
                  onChange={handleChange}
                  placeholder="Şehir"
                  textAlign='center'
                  textColor='black'
                  className="forms rounded-full"
                />
              </FormControl>
              {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hata mesajı */}

              <button type="submit" className="signUp rounded-full">
                Kayıt ol
              </button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default ParentSignUp;
