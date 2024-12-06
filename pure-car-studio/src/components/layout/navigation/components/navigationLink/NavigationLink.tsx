import { Anchor } from './NavigationLink.styles';
import { NavigationProps as NavigationLinkProps } from './NavigationLink.types';

export const NavigationLink = ({ name, url }: NavigationLinkProps) => {
  return (
    <li className='nav-item active'>
      <Anchor className='nav-link' aria-current='page' href={url}>
        {name}
      </Anchor>
    </li>
  );
};
