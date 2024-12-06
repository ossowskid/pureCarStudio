import { StyledNav, NavigationWrapper } from './Navigation.styles';
import { NavbarMenu } from './components/navbarMenu/NavbarMenu';
import { NavbarBrand } from './components/navbarBrand/NavbarBrand';
import { NavbarToggle } from './components/navbarToggle/NavbarToggle';

export const Navigation = () => {
  return (
    <StyledNav className='navbar navbar-expand-lg bg-body-tertiary'>
      <NavbarBrand />
      <NavigationWrapper className='container-fluid justify-content-lg-end'>
        <NavbarToggle />
        <NavbarMenu />
      </NavigationWrapper>
    </StyledNav>
  );
};
