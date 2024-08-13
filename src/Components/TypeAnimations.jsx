import { TypeAnimation } from 'react-type-animation';
import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

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
             'Matematik korkulacak bir şey değil, keşfedilecek bir dünya!',
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
     </div>

     <div className='flex items-center justify-center'>
     <div className='accordion'>
     <Accordion open={open === 1}>
           <AccordionHeader onClick={() => handleOpen(1)} className='Side-by-side text-3xl mt-3 border-b-2 border-white '>1. Sınıf</AccordionHeader>
           <AccordionBody className='Side-by-side text-2xl'>
              <ul>
                <li>Sayılara Genel Bakış</li>
                <li>Toplama ve Çıkarma İşlemleri</li>
                <li>Çarpma ve Bölme İşlemleri</li>
                <li>Kesirler</li>
                <li>Ondalık Kesirler</li>
              </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
           <AccordionHeader onClick={() => handleOpen(2)} className='Side-by-side text-3xl mt-3 border-b-2 border-white '>2. Sınıf</AccordionHeader>
           <AccordionBody className='Side-by-side text-2xl'>
              <ul>
                <li>Sayılara Genel Bakış</li>
                <li>Toplama ve Çıkarma İşlemleri</li>
                <li>Çarpma ve Bölme İşlemleri</li>
                <li>Kesirler</li>
                <li>Ondalık Kesirler</li>
              </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
           <AccordionHeader onClick={() => handleOpen(3)} className='Side-by-side text-3xl mt-3 border-b-2 border-white '>3. Sınıf</AccordionHeader>
           <AccordionBody className='Side-by-side text-2xl'>
              <ul>
                <li>Sayılara Genel Bakış</li>
                <li>Toplama ve Çıkarma İşlemleri</li>
                <li>Çarpma ve Bölme İşlemleri</li>
                <li>Kesirler</li>
                <li>Ondalık Kesirler</li>
              </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
           <AccordionHeader onClick={() => handleOpen(3)} className='Side-by-side text-3xl mt-3 border-b-2 border-white '>4. Sınıf</AccordionHeader>
           <AccordionBody className='Side-by-side text-2xl'>
              <ul>
                <li>Sayılara Genel Bakış</li>
                <li>Toplama ve Çıkarma İşlemleri</li>
                <li>Çarpma ve Bölme İşlemleri</li>
                <li>Kesirler</li>
                <li>Ondalık Kesirler</li>
              </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)} className='Side-by-side text-3xl mt-3 border-b-2 border-white '>5. Sınıf</AccordionHeader>
            <AccordionBody className='Side-by-side text-2xl'>
              <ul>
                <li>Sayılara Genel Bakış</li>
                <li>Toplama ve Çıkarma İşlemleri</li>
                <li>Çarpma ve Bölme İşlemleri</li>
                <li>Kesirler</li>
                <li>Ondalık Kesirler</li>
              </ul>
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 6}>
           <AccordionHeader onClick={() => handleOpen(6)} className='Side-by-side text-3xl mt-3 border-b-2 border-white '> 6. Sınıf</AccordionHeader>
           <AccordionBody className='Side-by-side text-2xl'>
              <ul>
                <li>Sayılara Genel Bakış</li>
                <li>Toplama ve Çıkarma İşlemleri</li>
                <li>Çarpma ve Bölme İşlemleri</li>
                <li>Kesirler</li>
                <li>Ondalık Kesirler</li>
              </ul>
           </AccordionBody>
        </Accordion>
        <Accordion open={open === 7}>
           <AccordionHeader onClick={() => handleOpen(7)} className='Side-by-side text-3xl mt-3 border-b-2 border-white '>7. Sınıf</AccordionHeader>
           <AccordionBody className='Side-by-side text-2xl'>
              <ul>
                <li>Sayılara Genel Bakış</li>
                <li>Toplama ve Çıkarma İşlemleri</li>
                <li>Çarpma ve Bölme İşlemleri</li>
                <li>Kesirler</li>
                <li>Ondalık Kesirler</li>
              </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 8} className='mb-3'>
           <AccordionHeader onClick={() => handleOpen(8)} className='Side-by-side text-3xl mt-3 border-b-2 border-white '>8. Sınıf</AccordionHeader>
           <AccordionBody className='Side-by-side text-2xl'>
              <ul>
                <li>Sayılara Genel Bakış</li>
                <li>Toplama ve Çıkarma İşlemleri</li>
                <li>Çarpma ve Bölme İşlemleri</li>
                <li>Kesirler</li>
                <li>Ondalık Kesirler</li>
              </ul>
          </AccordionBody>
        </Accordion>
     </div>
     </div>


    </div>
  );
};

export default TypeAnimations;