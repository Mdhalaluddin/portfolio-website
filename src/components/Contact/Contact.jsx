import ".//Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="/src/assets/download.svg" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fa-solid fa-envelope"></i>
              <h2>halaldev.2000@gmail.com</h2>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-phone"></i>
              <h2>+8801813-581889</h2>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-location-dot"></i>
              <h2>Chittagong, Bangladesh</h2>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h1>Your Name</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
