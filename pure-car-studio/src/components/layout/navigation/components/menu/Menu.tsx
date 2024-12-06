import { navigationLinkData } from '../../Navigation.utils';
import { StyledUl } from '../navbarMenu/NavbarMenu.styles';
import { NavigationLink } from '../navigationLink/NavigationLink';

export const Menu = () => {
  return (
    <div className='offcanvas-body'>
      <StyledUl className='navbar-nav nav-underline me-auto mb-2 mb-lg-0'>
        {navigationLinkData.map(({ name, url }) => (
          <NavigationLink name={name} url={url} key={name} />
        ))}
      </StyledUl>
    </div>
  );
};
