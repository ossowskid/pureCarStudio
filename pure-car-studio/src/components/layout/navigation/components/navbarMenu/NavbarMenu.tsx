import { Menu } from '../menu/Menu';
import { CloseButton } from './closeButton/CloseButton';

export const NavbarMenu = () => {
  return (
    <div
      className='offcanvas offcanvas-end'
      tabIndex={-1}
      id='offcanvasNavbar'
      aria-labelledby='offcanvasNavbarLabel'
    >
      <CloseButton />
      <Menu />
    </div>
  );
};
