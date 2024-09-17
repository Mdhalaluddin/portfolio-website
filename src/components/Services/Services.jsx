import "./Services.css";

function Services() {
  return (
    <div className="service">
      <div className="service-title">
        <h1>Services</h1>
        <img src="/src/assets/download.svg" alt="" />
      </div>
      <div>
        <div className="services-container">
          <div className="services-format">
            <h3>1</h3>
            <h2>Web Development</h2>
            <p>
              Empowering businesses and individuals through the art of web
              development.
            </p>
            <a href="#" className="text-yellow-500 text-xl">
              Read more...
            </a>
          </div>
          <div className="services-format">
            <h3>2</h3>
            <h2>Web design</h2>
            <p>
              Creating intuitive and engaging user interfaces for modern web
              platforms.
            </p>
            <a href="#" className="text-yellow-500 text-xl">
              Read more...
            </a>
          </div>
          <div className="services-format">
            <h3>3</h3>
            <h2>UI/UX Designing</h2>
            <p>
              Crafting intuitive and visually captivating user experiences
              through UI/UX design.
            </p>
            <a href="#" className="text-yellow-500 text-xl">
              Read more...
            </a>
          </div>
          <div className="services-format">
            <h3>4</h3>
            <h2>App Development</h2>
            <p>
              Transforming concepts into powerful, user-friendly applications
              that make a difference.
            </p>
            <a href="#" className="text-yellow-500 text-xl">
              Read more...
            </a>
          </div>
          <div className="services-format">
            <h3>5</h3>
            <h2>Social media</h2>
            <p>
              Empowering your brand’s presence with creative and data-driven
              social content.
            </p>
            <a href="#" className="text-yellow-500 text-xl">
              Read more...
            </a>
          </div>
          <div className="services-format">
            <h3>6</h3>
            <h2>Content writing</h2>
            <p>
              My writing transforms ideas into clear, persuasive narratives that
              resonate with readers, build trust, and drive meaningful results.
            </p>
            <a href="#" className="text-yellow-500 text-xl">
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
