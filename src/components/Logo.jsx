function Logo({ logo, customClass }) {
  return <img className={`${customClass}`} src={logo} alt='logo' />;
}

export default Logo;
