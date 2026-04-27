import React from "react";

const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #111f18 50%, rgba(15, 110, 86, 0.2) 100%)",
      }}
    />
  );
};

export default FooterBackgroundGradient;
