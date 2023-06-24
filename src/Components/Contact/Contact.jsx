import './Contact.css'


const Contact = () => {
    
    
    return (
        <>
    <div id="contact" className="contact-us">
      <div className=" text-center">
    
        <div className="contact-body">
          <div className="contacts">
            <div className="row">
              <div data-aos="fade-up" className="col-md-4">
                <div className="card-contacts">
                  <i  className="fa-solid fa-phone contacts-icon"></i>
                  <div className="card-body-contact">
                    <h5 className="card-contacts-title">Call On</h5>
                    <p className="card-contacts-text">+8801839-027207</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-md-4">
                <div className="card-contacts">
                  <i  className="fa-sharp fa-solid fa-location-dot fa-beat  contacts-icon"></i>
                  <div className="card-body-contact">
                    <h5 className="card-contacts-title">Address</h5>
                    <p className="card-contacts-text">Dhaka,Bangladesh.</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-md-4">
                <div className="card-contacts">
                  <i  className="fa-solid fa-envelope  contacts-icon"></i>
                  <div className="card-body-contact">
                    <h5 className="card-contacts-title">Email</h5>
                    <p className="card-contacts-text">rokib4000@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="contact-form">
        
          <form action="https://formspree.io/f/mnqyrybn" method="POST" className="contact-form">
            <input type="text" id="name" placeholder="Name:" name="name" required /><br/>
            <input type="email" name="email" id="email" placeholder="Email:" required /><br/>
            <textarea name="text-box" id="text-box" placeholder="Your message..." required></textarea><br/>
            <button  type="submit" className="btn btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    
      </div>
    </div>
    
    </>
      )
    }
    
    export default Contact
    
