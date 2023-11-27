import React, { Fragment, useState } from "react";
import "../AllServices/Service.css";
import Windows from "../images/ICON_SERVICES/icons8-windows-8-64.png";
import Internet from "../images/ICON_SERVICES/icons8-internet-96.png";
import Mail from "../images/ICON_SERVICES/icons8-courrier-96.png";
import RS from "../images/ICON_SERVICES/icons8-instagram-96.png";

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
      imgSrc: Windows,
      title: "Windows",
      description:
        "Comprendre chaque partie du panneau de configuration et Apprendre à utiliser la barre de recherche de Windows, épingler les outils à la barre des tâches, utiliser les divers répertoires, créer, copier-coller, déplacer, renommer et supprimer un dossier et un fichier. Apprendre à Télécharger un logiciel et l’installer",
    },

    {
      imgSrc: Internet,
      title: "Internet",
      description:
        "Comprendre les bases : définition des termes utiles. Comprendre le fonctionnement des moteurs de recherches et les astuces pour trouver plus rapidement. Comprendre le fonctionnement d’un navigateur",
    },

    {
      imgSrc: Mail,
      title: "Messagerie",
      description:
        "Créer une adresse mail et configurer la boite de messagerie. Gérer ses contacts et ses mails. Écrire un mail et l’envoyer, ouvrir un mail. Ouvrir et télécharger une pièce jointe, ajouter une pièce jointe",
    },

    {
      imgSrc: RS,
      title: "Réseaux sociaux",
      description:
        "Facebook, Instagram, Linkedin: Apprenez à reconnaître et utiliser les différentes section. Apprendre à paramétrer son compte (renseigner le profil, choisir entre le mode public ou le mode privé, etc). Apprendre à poster des photos (retouche, utilisation des filtres…). Transformer un simple compte en compte professionnel",
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
      <h2 className="second_services_title">Initiation au numérique</h2>
      <div className="service_container" id="second_container">
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
