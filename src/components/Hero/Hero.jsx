import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        src="https://i.ibb.co.com/WzjxmqJ/Profile-Picture.png"
        alt="halal profile photo"
      />
      <h1>
        <span>I'm Halal Uddin,</span> MERN stack Developer based in Bangladesh
      </h1>
      <p>
        MERN Stack Developer with knowledge of ReactJs NextJs, Redux,
        Typescript, ExpressJs, Node, MongoDB, Mongoose.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
