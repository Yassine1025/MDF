import React from 'react';
import accueil_2 from '../../assets/Accueil/accueil-2.png';
import accueil_4 from '../../assets/Accueil/accueil-4.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Accueil.css';
import AllCategory from './Category/AllCategory';

const images = [accueil_4, accueil_2]; // Array of images for navigation

export default function Accueil() {


  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div style={{ width: '350px', height: '400px'  }} className="col-md-5 col-12 mb-3">
          <p className="text-muted fs-5">
          Je travaille dans la conception et la fabrication de produits en matériau alternatif au bois, tels que des placards de cuisine, des bureaux et des décorations pour les salons, ainsi que le bardage. Je me concentre sur la fourniture de solutions pratiques et esthétiques qui répondent à divers besoins, en ajoutant des touches modernes et élégantes.
          </p>
        </div>
        <div className="col-md-7 col-12 d-flex flex-column flex-md-row gap-3">
          {images.map((img, index) => (
            <img
              key={index}
              style={{ width: '350px', height: '400px' }}
              className="img-fluid rounded shadow zoom-effect"
              src={img}
              alt="Collection de vêtements"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      <AllCategory/>
    </div>
  );
}
