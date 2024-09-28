import "./MyWork.css";

function MyWork() {
  return (
    <div id="work" className="myWork">
      <div className="myWork-title">
        <h1>My latest Work</h1>
        <img src="/src/assets/download.svg" alt="" />
      </div>
      <div className="myWork-Project">
        <img
          className="w-full"
          src="https://i.ibb.co.com/XS78D9h/Screenshot-2024-09-17-170947.jpg"
          alt=""
        />
        <img
          className="w-full"
          src="https://i.ibb.co.com/CKvkxTk/bistro-boss.jpg"
          alt=""
        />
        <img src="https://i.ibb.co.com/GQghqnK/donnate.png" alt="" />
        <img src="https://i.ibb.co.com/yd3pwp6/dragon-news.png" alt="" />
        <img src="https://i.ibb.co.com/3kDCmCx/phone-hanter.jpg" alt="" />
        <img src="https://i.ibb.co.com/zxhR4xw/summer.png" alt="" />
      </div>
      <div className="myWork-sowMore">
        <h2>See more</h2>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default MyWork;
