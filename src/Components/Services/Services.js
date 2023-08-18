import React from "react";
import "./Services.css";

function Services() {
  return (
    <>
      <section className=" text-center services">
        <div className="container-fluid  ">
          <h2 className="section-title">Our Services</h2>
          <div className="container">
            <div className="card-group ">
              <div className="card m-2 ">
                <img
                  src="https://img.freepik.com/free-vector/wireless-network-symbol_1284-42447.jpg?w=2000"
                  alt="Petcare Tips"
                />
                <h5 className="card-footer">Wifi</h5>
                <p>Free Wifi Services</p>
              </div>
              <div className="card  m-2  ">
                <img
                  src="https://c8.alamy.com/comp/T9M54J/car-parking-hotel-service-business-flat-line-filled-icon-vector-banner-template-T9M54J.jpg"
                  alt="Training"
                />
                <h5 className="card-footer">Parking</h5>
                <p>Parking Area Facility</p>
              </div>

              <div className="card m-2  ">
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/21/75/security-agency-icon-flat-design-vector-13502175.jpg"
                  alt="Veterinary Care"
                />
                <h5 className="card-footer">Security </h5>
                <p>Security 24x7</p>
              </div>

              <div className="card m-2  ">
                <img
                  src="https://img.freepik.com/premium-photo/female-is-grooming-trimming-pomeranian-spitz-salon_175086-1197.jpg"
                  alt="Grooming"
                />
                <h5>Room Services</h5>
                <p> Staying Facility</p>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid  ">
          <h2 className="section-title border pt-3">Food Services</h2>
          <div className="container">
            <div className="card-group ">
              <div className="card m-2 ">
                <img
                  src="https://img.freepik.com/free-vector/wireless-network-symbol_1284-42447.jpg?w=2000"
                  alt="Petcare Tips"
                />
                <h5>Online Food Delivery</h5>
                <p>Online Food Delivery</p>
              </div>
              <div className="card  m-2  ">
                <img
                  src="https://c8.alamy.com/comp/T9M54J/car-parking-hotel-service-business-flat-line-filled-icon-vector-banner-template-T9M54J.jpg"
                  alt="Training"
                />
                <h5>Dining Facility</h5>
                <p>Bulk Dining Facility</p>
              </div>

              <div className="card m-2  ">
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/21/75/security-agency-icon-flat-design-vector-13502175.jpg"
                  alt="Veterinary Care"
                />
                <h5>Security </h5>
                <p>Security 24x7</p>
              </div>

              <div className="card m-2  ">
                <img
                  src="https://img.freepik.com/premium-photo/female-is-grooming-trimming-pomeranian-spitz-salon_175086-1197.jpg"
                  alt="Grooming"
                />
                <h5>Room Services</h5>
                <p> Staying Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
