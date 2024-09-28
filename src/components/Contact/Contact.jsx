import ".//Contact.css";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "32462b91-6e45-4042-bb64-f9d2a4d588e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your submitted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      data.Swal.fire("Your submitted is  Error!");
    }
  };

  return (
    <div id="contact" className="contact">
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
              <h2>halaluddin2000.dev@gmail.com</h2>
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
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your massage"
            id=""
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
