import React from "react";
import serveonLogo from "../../assets/logo/serveon logo.webp";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src={serveonLogo}
        alt="Serveon Logo"
        className="h-8 w-auto md:h-9 lg:h-10 object-contain"
      />
    </div>
  );
};

export default Logo;
