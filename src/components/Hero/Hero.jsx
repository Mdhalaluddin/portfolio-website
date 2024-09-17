import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src="/src/assets/Profile Picture.png" alt="halal profile photo" />
      <h1>
        <span>I'm MD Halal Uddin,</span> And I am a frontend Developer
      </h1>
      <p>
        MERN Stact Developer with knowledge of ReactJs NextJs, Redux,
        Typescript, ExpressJs, Node, MongoDB, Mongoose.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
