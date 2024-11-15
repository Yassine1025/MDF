import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import accueil_1 from '../../../assets/Accueil/accueil-1.png';
import Salon_1 from '../../../assets/Salon/S1.png';
import Salon_2 from '../../../assets/Salon/S2.png';
import Salon_3 from '../../../assets/Salon/S3.png';
import Cuisine_1 from '../../../assets/Cuisine/C1.png';
import Cuisine_2 from '../../../assets/Cuisine/C2.png';
import Bureau_3 from '../../../assets/Bureau/B3.png';
import Bureau_7 from '../../../assets/Bureau/B7.png';
export default function AllCategory() {
  const [activeTab, setActiveTab] = useState('Bureau');

  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <h2 className="fs-1 fw-bold text-Black text-center pb-5">Catégories</h2>
          
          <ul className="nav nav-tabs d-flex flex-wrap justify-content-center" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'Salon' ? 'active' : ''} me-md-3 me-1 text-dark`}
                onClick={() => setActiveTab('Salon')}
                type="button"
                role="tab"
                aria-selected={activeTab === 'Salon'}
              >
                Salon
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'Cuisine' ? 'active' : ''} me-md-3 me-1 text-dark`}
                onClick={() => setActiveTab('Cuisine')}
                type="button"
                role="tab"
                aria-selected={activeTab === 'Cuisine'}
              >
                Cuisine
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'Bureau' ? 'active' : ''} me-md-3 me-1 text-dark`}
                onClick={() => setActiveTab('Bureau')}
                type="button"
                role="tab"
                aria-selected={activeTab === 'Bureau'}
              >
                Bureau
              </button>
            </li>
            
            
          </ul>
          
          <div className="tab-content" id="myTabContent">
            {activeTab === 'Bureau' && (
              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel">
                <div className="row g-4 mt-5 justify-content-center align-items-center">
                  <div className="col-12 col-md-4">
                    <img src={Bureau_3} alt="" className="img-fluid d-block mx-auto" />
                  </div>
                  <div className="col-12 col-md-4">
                    <img src={Bureau_7} alt="" className="img-fluid d-block mx-auto" />
                  </div>
                  
                </div>
              </div>
            )}
            
            {activeTab === 'Salon' && (
              <div className="tab-pane fade show active" id="vr-tab-pane" role="tabpanel">
                <div className="row mt-5 g-4">
                  <div className="col-12 col-md-4">
                    <img src={Salon_3} alt="" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-4">
                    <img src={Salon_1} alt="" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-4">
                    <img src={Salon_2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'Cuisine' && (
              <div className="tab-pane fade show active" id="vr-tab-pane" role="tabpanel">
                <div className="row mt-5 g-4">
                  <div className="col-12 col-md-4">
                    <img src={Cuisine_1} alt="" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-4">
                    <img src={Cuisine_2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
