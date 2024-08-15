import { TypeAnimation } from 'react-type-animation';
import React from 'react';
import { Link } from 'react-router-dom';
import book from '../assets/images/book.png'
import '../Css/TypeAnimation.css'

const TypeAnimations = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div  >
      <div className='Side-by-side'>
        <div className='TypeAnimation ' >
          <div>
            <h1 className='text-5xl flex items-center justify-center'>Başarıya giden yolda seninleyiz.</h1>
          </div>
          <div className='flex items-center justify-center'>
            <TypeAnimation
              sequence={[
                'Zorlu problemleri kolayca çözmeyi öğrenin.',
                1000,
                'Matematik, eğlenceli ve basit hale geliyor!',
                1000,
                'Hedefimiz: Matematikte MÜKEMMELLİK!',
                1000,
                'Hesaplamaların sihirli dünyasına hoş geldiniz!',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <div className='flex items-center justify-center'>
            <Link to='/Login'><button className='TypeAnimationsbutton'> Log In</button></Link>
            <Link to='/SignUp'><button className='TypeAnimationsbutton ml-5'>Sıgn Up</button></Link>
          </div>
        </div>
        <div className='ml-5'>
          <img src={book} alt="" />
        </div>
      </div>


      <div>
        <div className='Side-by-side properties '>
          <h1 className='text-5xl properties-text '>Öne Çıkan Özellikler</h1>
        </div>
      </div>



    </div>
  );
};

export default TypeAnimations;