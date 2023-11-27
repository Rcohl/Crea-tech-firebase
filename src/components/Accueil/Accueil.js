import "./Accueil.css";
import React, { Component, Fragment } from "react";
import Logo2 from "../images/Logo_Crea_Tech/logo_transparent_text_curves.png";
class Accueil extends Component {
  render() {
    return (
      <Fragment>
        <section className="accueil" id="accueil">
        <div className="paragraphe_accueil">
        <img src={Logo2} alt="logo" className="Logo_accueil" />
            <br />
            <q>
              La seule façon de faire du bon boulot, c'est d'aimer ce que vous
              faites.
            </q>
            <p>Steve Jobs</p>
          </div>
          <div>
            <button className="btn" id="btn_accueil">
              <a href="#Contact">
                <span>Une idée de site ? Parlez-en ici</span>
              </a>
            </button>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Accueil;