import React from "react";
import "./Room.css";
import RoomBooking from "../RoomBooking/RoomBooking";

function Room() {
  return (
    <div>
      <section >
        <div className="stay shadow ">
          <span className="btn  btn-success m-3 ">Discover Our</span>
        </div>

        <div className="m-2 p-3">
          <div className="card-group  m-5">
            <div className="card room">
              <img
                className=" img-fluid"
                src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
                alt=""
              />
            </div>
            <div className="card  room ">
              <h1>Hotels Based In India</h1>
              <p>
                The Vivaan is one of the best hotels in Karnal with 5 star
                facilites. Embracing warm hospitality and absolute luxury as a
                core value, The Vivaan Hotel in Karnal stands tall on the
                Delhi-Chandigarh National Highway (NH-1). With an inviting
                ambiance, The Vivaan is a unique mélange of contemporary
                architecture and a touch of traditional royal essence.
                Strategically set amidst a vast expanse, the hotel in Karnal is
                the epitome of opulence. Experience first-class services,
                on-site dining options, well-appointed guest rooms, and much
                more at The VIVAAN. As the only midscale business and leisure
                luxury hotel on the GT Karnal Road, The Vivaan offers modern
                “Close to Home” accommodations with all the amenities and
                conveniences for a leisure or business stay. The rooms are built
                with modern-day comforts along with fresh and bright interiors
                without compromising on any factor. Along with this, we take
                pride in offering par-excellence services to our clients to
                ensure that they are always fully satisfied and always waiting
                to come back to our hotel.
              </p>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
        </div>

        <div className="m-5 p-3">
          <div className="card-group m-5">
            <div className="card room">
              <img
                className=" img-fluid"
                src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
                alt=""
              />
            </div>
            <div className="card  room ">
              <h1>Hotels Based In India</h1>
              <p>
                The Vivaan is one of the best hotels in Karnal with 5 star
                facilites. Embracing warm hospitality and absolute luxury as a
                core value, The Vivaan Hotel in Karnal stands tall on the
                Delhi-Chandigarh National Highway (NH-1). With an inviting
                ambiance, The Vivaan is a unique mélange of contemporary
                architecture and a touch of traditional royal essence.
                Strategically set amidst a vast expanse, the hotel in Karnal is
                the epitome of opulence. Experience first-class services,
                on-site dining options, well-appointed guest rooms, and much
                more at The VIVAAN. As the only midscale business and leisure
                luxury hotel on the GT Karnal Road, The Vivaan offers modern
                “Close to Home” accommodations with all the amenities and
                conveniences for a leisure or business stay. The rooms are built
                with modern-day comforts along with fresh and bright interiors
                without compromising on any factor. Along with this, we take
                pride in offering par-excellence services to our clients to
                ensure that they are always fully satisfied and always waiting
                to come back to our hotel.
              </p>
              <button className="btn btn-danger">Book Now</button>
            </div> 
          </div>
        </div>
        <RoomBooking/>
      </section>
    </div>
   
  );
}

export default Room;
