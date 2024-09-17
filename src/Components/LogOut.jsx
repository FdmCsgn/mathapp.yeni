import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App'; // useAuth'ı doğru dosyadan içe aktarın
import { Link } from 'react-router-dom';

const LogOutConfirmation = () => {
  const { logout, isAuthenticated } = useAuth(); // AuthContext'ten logout ve isAuthenticated fonksiyonlarını alın
  const navigate = useNavigate();
  const [isConfirming, setIsConfirming] = useState(true);

  const handleConfirm = () => {
    if (!isAuthenticated) {
      navigate('/login'); // Giriş sayfasına yönlendirin
      return;
    }

    logout(); // Kullanıcıyı çıkış yapmış olarak işaretleyin
    navigate('/'); // Anasayfaya yönlendirin
  };

  const handleCancel = () => {
    setIsConfirming(false); // Kullanıcı mevcut sayfada kalacak
  };

  if (!isConfirming) {
    return null; // Onay penceresi kapandıysa hiçbir şey göstermeyin
  }

  return (
    <div align='center' width='full' justifyContent='center'>
      <div className='LogOutglassCard'>
        <h1 className='text-2xl'>Çıkış yapmak istediğinizden emin misiniz?</h1>
        <button onClick={handleConfirm} className="LogOut rounded-full">Evet, çıkış yap</button>
        <Link to='/WeatherApp'><button onClick={handleCancel} className="LogOut rounded-full mb-12">Hayır, kal</button></Link>
      </div>
    </div>
  );
};

export default LogOutConfirmation;
