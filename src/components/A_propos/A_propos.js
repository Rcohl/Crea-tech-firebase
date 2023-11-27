import "./A_propos.css";
import React, { Component, Fragment } from "react";
import Check from "../images/apple-touch-icon.png";

class A_propos extends Component {
  render() {
    return (
      <Fragment>
        <section id="about" className="about">
          <div className="container_about">
            <div className="about-title">
              <h2>Qui sommes-nous ?</h2>
            </div>

            <div className="content_about">
              <div className="paragrapheAbout">
                <p>
                  Chez <b>Créa-tech</b>, nous créons des <b>sites Internet</b> pour <b>les
                  professionnels</b>, quel que soit le secteur d'activité.
                </p>
                <p>
                  {" "}
                  Notre priorité est de <b>comprendre les besoins de nos clients</b>,
                  les aider à les exprimer si nécessaire, et à mettre en oeuvre
                  les solutions les plus adaptées qui permettront d'atteindre
                  les objectifs fixés.
                </p>
                <p>
                  Nous nous donnons pour mission de vous <b>aider</b> à tirer le
                  meilleur parti de la puissance du <b>numérique</b>, en la combinant à
                  la qualité de la relation humaine.
                </p>
              </div>
              <div className="listAbout">
                <h3>Concrètement, comment ça se passe ?</h3>
                <ul>
                  <img src={Check} alt="" className="check-logo" />
                  <li> Nous convenons d'un rendez-vous</li>
                  <br />
                  <img src={Check} alt="" className="check-logo" />
                  <li> Vous nous parlez de vous et de votre entreprise </li>
                  <br />
                  <img src={Check} alt="" className="check-logo" />
                  <li> Nous vous préparons un devis</li>
                  <br />
                  <img src={Check} alt="" className="check-logo" />
                  <li>
                    S'il vous convient, nous commençons à créer votre site
                  </li>
                  <br />
                </ul>
                <button className="btn" id="btn_about">
                  {" "}
                  <a href="#Contact">
                    <span>Créons ensemble votre site web</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="section-separator" id="about-separator"></div>
      </Fragment>
    );
  }
}

export default A_propos;
