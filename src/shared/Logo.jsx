import logo from '../assets/logo.svg';
import ChangeTheme from './ChangeTheme';

function Logo({ cn }) {
  return (
    <div className='flex items-center gap-4'>
      <div className='size-8 bg-red-300 md:bg-yellow-300 lg:bg-green-300 rounded-full'></div>
      <img className={cn} src={logo} alt='xiaomi logo' />
      <ChangeTheme />
    </div>
  );
}

export default Logo;
