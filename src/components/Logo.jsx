import React from "react";
import logoSNM from "../../src/assets/images/logo-snmptn.png";
import logoLTMPT from "../../src/assets/images/logo-ltmpt.png";

function Logo() {
  return (
    <div className="flex mb-4">
      <img className="h-14 sm:h-20 mr-4" src={logoSNM} alt="logo" />
      <img className="h-14 sm:h-20" src={logoLTMPT} alt="logo_ltmpt" />
    </div>
  );
}

export default Logo;
