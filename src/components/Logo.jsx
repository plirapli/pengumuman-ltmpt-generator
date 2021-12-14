function Logo({ logo, customClass }) {
  return (
    <img className={`h-14 sm:h-20 ${customClass}`} src={logo} alt='logo' />
  );
}

export default Logo;
