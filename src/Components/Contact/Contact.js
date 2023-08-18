import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contacts shadow ">
        <span className="btn  btn-success m-3 ">Home</span>
        <span className="btn  btn-secondary  ">Contact</span>
      </div>
      {/* section2 */}
      <div class="card m-5 d-flex justify-content-center">
        <div class="contact" id="contact">
          <div class="container">
            <h3 className="text-white mb-5 border-bottom shadow p-3 m-3 ">
              If you have any question, please contact us:
            </h3>
            <div class="column">
              <div class="text-field-name-1">
                <form>
                  <input
                    type="text"
                    class="text"
                    placeholder=" Enter your name"
                  />
                </form>
              </div>
              <div class="text-field-email-1">
                <form>
                  <input
                    type="text"
                    class="text"
                    placeholder="Enter your email"
                  />
                </form>
              </div>
              <div class="text-field-subject-1">
                <form>
                  <input type="text" class="text" placeholder=" Subject" />
                </form>
              </div>
            </div>
            <div class="column">
              <div class="text-field-area-">
                <form>
                  <textarea placeholder="Message:">Message</textarea>
                </form>
              </div>
              <div class="button">
                <form>
                  <button type="submit" className="btn btn-primary">send message</button>
                </form>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      
      <div className="row">       
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"             
              src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="3"
              scrolling="yes"
              marginheight="0"
              marginwidth="0"
            ></iframe>         

        </div>        
         </div> 
      </div>

        <div className="col-md-6">
        <p className="mt-3 pt-5">
          2nd Floor, Fair View # 2954 B&C MKK road, Near Navrang Circle
          Rajajinagar Bangalore - 560010, Karnataka
          <div>
            <i class="fa-solid fa-phone-volume fa-bounce"></i>
          </div>
        </p>
        </div>
     
    

      
    </>
  );
}

export default Contact;
