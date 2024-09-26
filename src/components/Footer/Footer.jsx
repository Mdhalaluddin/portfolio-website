import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="/src/assets/Name_Logo.png" alt="" />
          <p>I am a MERN stack developer from, Bangladesh</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <i className="fa-regular fa-user"></i>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Halal Uddin. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
