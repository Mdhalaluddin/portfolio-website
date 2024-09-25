import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Halal Uddin</h1>
          <img src="/src/assets/download.svg" alt="" />
          <p>I am a MERN stack developer from, Bangladesh</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type="email" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
