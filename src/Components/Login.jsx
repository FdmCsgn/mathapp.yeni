import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Box, Heading, FormControl, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import loginimg from "../assets/images/loginimg.png";
// useAuth'u kendi kimlik doğrulama hook'unuz olarak varsaydım, import etmeyi unutmayın.
// import { useAuth } from "../path-to-your-auth-hook";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // useAuth'unuz yoksa bu satırı kaldırın veya ilgili kodu ekleyin
  // const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5175/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        // login(); // Eğer useAuth kullanıyorsanız, kullanıcıyı giriş yapmış olarak işaretler
        navigate("/WeatherApp");
      } else {
        alert("Giriş başarısız oldu.");
      }
    } catch (error) {
      console.error("Giriş sırasında hata:", error);
    }
  };

  return (
    <Flex align="center" width="full" justifyContent="center">
      <Box pt={10}>
        <Box textAlign="center">
          <Heading fontSize="100px" fontFamily="Gupter, serif" color="#ffe6e6">

          </Heading>
        </Box>
        <Box my={12} textAlign="center" mt="12">
          <form onSubmit={handleSubmit} className="LoginglassCard">
            <img src={loginimg} alt="Login" className="login-png" />
            <FormControl mt="12" mb="5">
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="forms rounded-full mt-5"
                placeholder="Mail"
                textAlign="center"
                color="black"
              />
            </FormControl>
            <FormControl mt="12" mb="12">
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="forms rounded-full"
                placeholder="Şifre"
                textAlign="center"
                color="black"
              />
            </FormControl>
            {error && <Box color="red" mb="4">{error}</Box>}
            <div className="flex justify-center">
              <span>
                <Link to="/ForgotPass" className="text-blue-500">
                  Şifrenimi unuttun?
                </Link>
              </span>
            </div>
            <div>
              <button type="submit" className="signUp rounded-full">
                Giriş yap
              </button>
            </div>
            <div className="mb-5">
              <span>
                Hesabın yokmu?{" "}
                <Link to="/SignUp" className="text-blue-500">
                  Kayıt ol
                </Link>
              </span>
            </div>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
