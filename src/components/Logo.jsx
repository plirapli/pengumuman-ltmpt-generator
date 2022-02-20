function Logo({ logo, customClass }) {
  return (
    <img className={`${customClass || 'h-14 sm:h-20'}`} src={logo} alt='logo' />
  );
}

export default Logo;
