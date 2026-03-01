import { motion } from 'motion/react';

import SocialLink from './SocialLink';
import SvgIg from '@/assets/icons/socials_ig.svg';
import SvgFb from '@/assets/icons/socials_fb.svg';
import SvgX from '@/assets/icons/socials_x.svg';

function SocialMedia() {
  const mediaLinks = [
    {
      svg: SvgIg,
      url: 'https://www.instagram.com/xiaomiuruguay/',
      label: 'Instagram',
    },
    {
      svg: SvgFb,
      url: 'https://www.facebook.com/XiaomiGlobal/',
      label: 'Facebook',
    },
    {
      svg: SvgX,
      url: 'https://x.com/Xiaomi',
      label: 'X',
    },
  ];

  const containerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        ease: 'easeIn',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  };

  return (
    <div>
      <motion.p
        className='mx-auto mb-8 font-bold text-center'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeIn', duration: 0.6 }}>
        Siguienos en nuestras redes sociales:
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial='initial'
        animate='animate'
        className='flex justify-center gap-8'>
        {mediaLinks.map((l) => (
          <motion.div key={l.label} variants={itemVariants}>
            <SocialLink svg={l.svg} url={l.url} label={l.label} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SocialMedia;
