import React, { useState } from 'react';
import { Flex, Box, Heading, FormControl, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


function StudentSignUp() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    StClass:'',
    password: '',
    passwordConfirm: '',
    birthDate: '',
    Şehir:''
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
    if (!formData.username || !formData.password || !formData.email || !formData.firstName || !formData.lastName || !formData.StClass || !formData.birthDate || !formData.Şehir) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      setError("Parolalar eşleşmiyor!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5176/signup/StudentSignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          StClass:formData.StClass,
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
      <Flex align='center' width='full' justifyContent='center' >
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
                  placeholder="e-mail"
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
                  placeholder="First Name"
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
                  placeholder="Last Name"
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
                  placeholder="User Name"
                  textAlign='center'
                  textColor='black'
                />
              </FormControl>
              <FormControl mt='12' mb='5'>
                <select
                    name="StClass"
                    value={formData.StClass}
                    onChange={handleChange}
                    className="forms rounded-full"
                    style={{
                       textAlign: 'center',
                       color: 'black',
                       padding: '8px 16px',
                       fontSize: '1em',
                       borderRadius: '9999px',
                       border: '1px solid #ccc',
                       backgroundColor: 'white'
                      }}
                 >
                     <option value="" disabled hidden>Sınıf Seçin</option>
                     <option value="1">1. Sınıf</option>
                     <option value="2">2. Sınıf</option>
                     <option value="3">3. Sınıf</option>
                     <option value="4">4. Sınıf</option>
                     <option value="5">5. Sınıf</option>
                     <option value="6">6. Sınıf</option>
                     <option value="7">7. Sınıf</option>
                     <option value="8">8. Sınıf</option>
                </select>
             </FormControl>

              <FormControl mt='12' mb='5'>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="forms rounded-full"
                  placeholder="Password"
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
                  placeholder="Password"
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
                Sign Up
              </button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default StudentSignUp;
