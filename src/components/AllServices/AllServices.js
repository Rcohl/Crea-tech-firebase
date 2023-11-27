import React, { Fragment } from "react";
import "../AllServices/Service.css";
import Services from "./Services";
import Services2 from "./Services2";
import Services3 from "./Services3";

// Composant principal pour contenir trois instances de Services
const AllServices = () => {
  return (
    <Fragment>
      <section id="services">
        <div>
          <Services />
          <Services2 />
          <Services3 />
        </div>
      </section>
    </Fragment>
  );
};

export default AllServices;
