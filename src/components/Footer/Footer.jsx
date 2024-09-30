import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="https://i.ibb.co.com/VTvrq08/Name-Logo.png" alt="" />
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
        <div className="footer-bottom-left">
          <p>© 2024 Halal Uddin. All rights reserved.</p>
        </div>
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
