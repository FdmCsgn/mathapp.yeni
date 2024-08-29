import { TypeAnimation } from 'react-type-animation';
import React from 'react';
import { Link } from 'react-router-dom';
import book from '../assets/images/book.png'
import '../Css/TypeAnimation.css'
import analiz from '../assets/icons/HomePageIcons/analiz.png'
import istatistik from '../assets/icons/HomePageIcons/istatistik.png'
import professioanl from '../assets/icons/HomePageIcons/professional.png'
import responsive from '../assets/icons/HomePageIcons/responsive.png'
import userInterface from '../assets/icons/HomePageIcons/userinterface.png'
import paneterakademi from '../assets/icons/HomePageIcons/panterakademi.jpg'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const TypeAnimations = () => {
  const [open, setOpen] = React.useState(0);
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


      <div className='properties '>
        <div>
          <h1 className='text-5xl properties-text mb-12'>Öne Çıkan Özellikler</h1>
        </div>

        <div className='Side-by-side'>
          <section id="card1" className="card mr-5 mb-5">
            <img src={analiz} alt="" className='card-icon' />
            <div className="card__content">
              <p className="card__title">Veri Analizi ve Geri Bildirim</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
                justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra,
                tincidunt augue id, efficitur massa.
              </p>
            </div>
          </section>

          <section id="card1" className="card mr-5 mb-5">
            <img src={istatistik} alt="" className='card-icon' />
            <div className="card__content">
              <p className="card__title">istatistik Takibi</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
                justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra,
                tincidunt augue id, efficitur massa.
              </p>
            </div>
          </section>

          <section id="card1" className="card mr-5 mb-5">
            <img src={professioanl} alt="" className='card-icon' />
            <div className="card__content">
              <p className="card__title">Deneyim Sahibi Ekip</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
                justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra,
                tincidunt augue id, efficitur massa.
              </p>
            </div>
          </section>

          <section id="card1" className="card mr-5 mb-5">
            <img src={responsive} alt="" className='card-icon' />
            <div className="card__content">
              <p className="card__title">Mobil ve Web Erişimi</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
                justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra,
                tincidunt augue id, efficitur massa.
              </p>
            </div>
          </section>

          <section id="card1" className="card mr-5 mb-5">
            <img src={userInterface} alt="" className='card-icon' />
            <div className="card__content">
              <p className="card__title">Eğlenceli ve Etkileşimli Kullanıcı Arayüzü</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
                justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra,
              </p>
            </div>
          </section>

        </div>
      </div>

      <div className='Side-by-side-Accordion'>
        <div>
          <img src={paneterakademi} alt="" className='panterakademi' />
        </div>
        <div>
          <div>
            <h1 className='text-4xl mb-12 Side-by-side '>Neden Panter Akademi</h1>
          </div>
          <div className='ml-5'>
            <Accordion open={open === 1}>
              <AccordionHeader className='text-3xl mt-4 Side-by-side ' onClick={() => handleOpen(1)}>Güçlü performans</AccordionHeader>
              <AccordionBody className='Side-by-side text-2xl'>
                Uygulamanın hızlı ve sorunsuz çalışması, büyük verilerle bile güçlü bir performans sergilemektedir.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} >
              <AccordionHeader className='text-3xl mt-4 Side-by-side' onClick={() => handleOpen(2)}> Hızlı ve Dinamik Kullanıcı Deneyimi </AccordionHeader>
              <AccordionBody className='Side-by-side text-2xl'>
                Kullanıcıların hızlıca sorular arasında geçiş yapabilmesi ve yanıtlarını anında alabilmektedir.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} >
              <AccordionHeader className='text-3xl mt-4 Side-by-side' onClick={() => handleOpen(3)}>Keskin Analiz ve Değerlendirme</AccordionHeader>
              <AccordionBody className='Side-by-side text-2xl'>
                Öğrencilerin performansını detaylı ve doğru bir şekilde analiz eden algoritmalar kullanılmaktadır.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} >
              <AccordionHeader className='text-3xl mt-4 Side-by-side' onClick={() => handleOpen(4)}> Stratejik Öğrenme Yöntemleri</AccordionHeader>
              <AccordionBody className='Side-by-side text-2xl'>
                Öğrencilere stratejik düşünme ve problem çözme becerileri kazandıran öğretim yöntemleri kullanılmaktadır.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} >
              <AccordionHeader className='text-3xl mt-4 Side-by-side' onClick={() => handleOpen(5)}>Esneklik ve Uyum</AccordionHeader>
              <AccordionBody className='Side-by-side text-2xl'>
                Farklı cihazlar ve platformlar arasında uyumlu çalışma, esnek kullanım.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>



    </div>
  );
};

export default TypeAnimations;