import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookie = () => {
  return (
    <CookieConsent
      debug={true}
      location="bottom"
      style={{ background: "#45144c" }}
      buttonStyle={{ background: "pink", color: "#45144c", fontSize: "13px", borderRadius: "5px" }}
      buttonText="J'ai compris !"
      expires={1}
    >
      Ce site utilise des cookies. Voir notre{" "}
      <a href="#">politique de confidentialité</a> pour en savoir plus.
    </CookieConsent>
  );
};

export default Cookie;
