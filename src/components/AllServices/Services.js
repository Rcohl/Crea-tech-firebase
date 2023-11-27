import React, { Fragment, useState } from "react";
import "../AllServices/Service.css";
import WordPress from "../images/ICON_SERVICES/icons8-wordpress.svg";
import Caddie from "../images/ICON_SERVICES/icons8-caddie-96.png";
import Smartphone from "../images/ICON_SERVICES/icons8-smartphone-96.png";
import Ordi from "../images/ICON_SERVICES/icons8-ordinateur-portable-96.png";

// Composant Produit

const Product = ({ imgSrc, title, description, onClick, isActive }) => {
  return (
    <div className={`bloc ${isActive ? "actived" : ""}`} onClick={onClick}>
      <div className="bloc-haut">
        <button className="see-more"></button>
        <div className="rond">
          <img src={imgSrc} alt={title} />
        </div>
        <p className="titre-section-service">{title}</p>
      </div>
      <div className="service-contenu">
        <img src={imgSrc} alt={title} />
        <div className="infos-service">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

// Composant Liste de Produits
const Services = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const products = [
    {
      imgSrc: Ordi,
      title: "Site one page",
      description:
        "Avec ou sans CMS, c’est le site idéal pour les personnes pressées qui souhaitent que le site soit terminé dans les plus brefs délais. Ce genre de site convient parfaitement aux personnes qui désirent montrer en quoi consiste leur activité.",
    },

    {
      imgSrc: WordPress,
      title: "Site vitrine",
      description:
        "Site créé avec le CMS WordPress et le thème de votre choix ou from scratch. C’est la meilleure façon de montrer votre travail sur plusieurs pages. Nous nous chargeons, bien entendu, de vous former afin que vous puissiez faire d’éventuelles modifications en toute sérénité.",
    },

    {
      imgSrc: Caddie,
      title: "Site E-commerce",
      description:
        "Vous souhaitez développer votre activité en ligne ? Rien de tel qu’un site E-commerce ! Pour vous donner la meilleure expérience possible, nous utilisons le CMS WordPress couplé au module WooCommerce.",
    },

    {
      imgSrc: Smartphone,
      title: "Site Responsive",
      description: "75% du trafic web est représenté par les smartphones. C'est pourquoi nous accordons une intentions très particulière à ce que votre site web soit consultable sur toutes les tailles d'écrans.",
    },
  ];

  const handleProductClick = (index) => {
    if (activeProduct === index) {
      setActiveProduct(null); // Ferme la div si elle est déjà ouverte
    } else {
      setActiveProduct(index); // Ouvre la div du produit cliqué
    }
  };

  return (
    <Fragment>
      <h2 className="first_services_title">Conception de site web</h2>
      <div className="service_container" id="first_container">
        {products.map((product, index) => (
          <Product
            key={index}
            imgSrc={product.imgSrc}
            title={product.title}
            description={product.description}
            isActive={activeProduct === index}
            onClick={() => handleProductClick(index)}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
