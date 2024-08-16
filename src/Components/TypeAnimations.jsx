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

      <div className='Side-by-side'>
        <div>
          <img src={paneterakademi} alt="" className='panterakademi' />
        </div>
        <div>
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </div>



    </div>
  );
};

export default TypeAnimations;