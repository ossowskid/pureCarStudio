export const NavbarToggle = () => {
  return (
    <button
      className='navbar-toggler'
      type='button'
      data-bs-toggle='offcanvas'
      data-bs-target='#offcanvasNavbar'
      aria-controls='offcanvasNavbar'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>
  );
};
