import { motion, useMotionValue, useAnimationFrame } from 'motion/react';
import { useState, useRef } from 'react';
import Testimonial from './Testimonial';

import pfpUrl1 from '@/assets/testimonial/pfp1.jpg';
import pfpUrl2 from '@/assets/testimonial/pfp2.jpg';
import pfpUrl3 from '@/assets/testimonial/pfp3.jpg';
import pfpUrl4 from '@/assets/testimonial/pfp4.jpg';
import pfpUrl5 from '@/assets/testimonial/pfp5.jpg';
import pfpUrl6 from '@/assets/testimonial/pfp6.jpg';
import pfpUrl7 from '@/assets/testimonial/pfp7.jpg';
import pfpUrl8 from '@/assets/testimonial/pfp8.jpg';
import pfpUrl9 from '@/assets/testimonial/pfp9.jpg';
import pfpUrl10 from '@/assets/testimonial/pfp10.jpg';
import pfpUrl11 from '@/assets/testimonial/pfp11.jpg';
import pfpUrl12 from '@/assets/testimonial/pfp12.jpg';
import pfpUrl13 from '@/assets/testimonial/pfp13.jpg';
import pfpUrl14 from '@/assets/testimonial/pfp14.jpg';
import pfpUrl15 from '@/assets/testimonial/pfp15.jpg';

const testimonials = [
  {
    userName: 'Rodrigo',
    testimonial:
      'Lo uso todos los días para ir al trabajo y llego sin esfuerzo. La suspensión se siente genial, mucho más cómodo que la bici o el bondi',
    pfpUrl: pfpUrl1,
  },
  {
    userName: 'Claudia',
    testimonial:
      'No pensé que iba a subir las pendientes de mi barrio tan fácil. Se siente firme, frena bien y con las luces ando tranquila hasta de noche',
    pfpUrl: pfpUrl2,
  },
  {
    userName: 'Joaquín',
    testimonial:
      'Me encanta el diseño y la batería dura pila. Lo cargo una vez y me olvido por días. Además se pliega fácil, lo llevo conmigo a todos lados',
    pfpUrl: pfpUrl3,
  },
  {
    userName: 'María',
    testimonial:
      'Cambió mi vida desde que lo compré. Ya no dependo de horarios de ómnibus y ahorro banda en pasajes. Es súper práctico y re bien',
    pfpUrl: pfpUrl4,
  },
  {
    userName: 'Diego',
    testimonial:
      'Al principio tenía miedo de las velocidades pero es re seguro. Los frenos responden al toque y la estabilidad es buena en calles rotas',
    pfpUrl: pfpUrl5,
  },
  {
    userName: 'Valentina',
    testimonial:
      'Lo mejor que compré este año. Voy a la facultad en 15 min, antes tardaba 40. La app es intuitiva y me gusta controlar todo desde ahí',
    pfpUrl: pfpUrl6,
  },
  {
    userName: 'Sebastián',
    testimonial:
      'La relación calidad-precio es increíble. Probé otros scooters más caros y este rinde igual o mejor. La autonomía es tal cual prometen',
    pfpUrl: pfpUrl7,
  },
  {
    userName: 'Lucía',
    testimonial:
      'Mis amigos no lo podían creer cuando subí la cuesta de mi casa sin bajar velocidad. El motor tiene fuerza de verdad y se nota la calidad',
    pfpUrl: pfpUrl8,
  },
  {
    userName: 'Martín',
    testimonial:
      'Lo tengo hace 6 meses y cero problemas. Aguanta la lluvia, las calles en mal estado y el uso diario. Muy resistente y confiable',
    pfpUrl: pfpUrl9,
  },
  {
    userName: 'Sofía',
    testimonial:
      'Me encanta que tiene luces delante y atrás. Me siento segura de noche y los autos me ven bien. El diseño es súper moderno',
    pfpUrl: pfpUrl10,
  },
  {
    userName: 'Facundo',
    testimonial:
      'Lo compré para pasear y terminó siendo mi medio de transporte principal. Es cómodo, rápido y me divierto cada vez que lo uso',
    pfpUrl: pfpUrl11,
  },
  {
    userName: 'Carolina',
    testimonial:
      'La suspensión hace toda la diferencia. Paso por adoquines y ni se siente. Para las calles de acá es perfecto, re suave el andar',
    pfpUrl: pfpUrl12,
  },
  {
    userName: 'Ignacio',
    testimonial:
      'Lo guardo en mi apartamento sin problema porque ocupa poco espacio plegado. Es liviano para subirlo y bajarlo, muy bien pensado',
    pfpUrl: pfpUrl13,
  },
  {
    userName: 'Camila',
    testimonial:
      'Llegué tarde al laburo solo una vez desde que lo tengo. Es confiable, predecible y siempre arranca. La inversión valió cada peso',
    pfpUrl: pfpUrl14,
  },
  {
    userName: 'Pablo',
    testimonial:
      'Mis vecinos ya se compraron dos después de ver el mío. Les encanta la velocidad y lo fácil que es manejarlo. Recomendadísimo',
    pfpUrl: pfpUrl15,
  },
];

function TestimonialMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(200);
  const containerRef = useRef(null);

  useAnimationFrame((t, delta) => {
    if (!isPaused && containerRef.current) {
      const newX = x.get() - 1;
      const containerWidth = containerRef.current.scrollWidth / 2;

      if (Math.abs(newX) >= containerWidth) {
        x.set(0);
      } else {
        x.set(newX);
      }
    }
  });

  return (
    <motion.div
      className='relative overflow-hidden py-8'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 2 }}>
      <div className='absolute left-0 top-0 bottom-0 w-75 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none' />

      <div className='absolute right-0 top-0 bottom-0 w-75 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none' />

      <motion.div
        ref={containerRef}
        className='flex gap-35'
        style={{ x }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>
        {testimonials.map((t, i) => (
          <div key={i} className='w-80 flex-shrink-0'>
            <Testimonial userName={t.userName} testimonial={t.testimonial} pfpUrl={t.pfpUrl} />
          </div>
        ))}
        {testimonials.map((t, i) => (
          <div key={`duplicate-${i}`} className='w-80 flex-shrink-0'>
            <Testimonial userName={t.userName} testimonial={t.testimonial} pfpUrl={t.pfpUrl} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default TestimonialMarquee;
