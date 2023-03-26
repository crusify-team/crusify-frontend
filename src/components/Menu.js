import React from "react";
import Link from "next/link";

const Menu = ({ active }) => {
  return (
    <div id="menu" className={active ? "active" : ""}>
      <div id="balls">
        <span
          style={{
            "--left": "25%",
            "--top": "10%",
            "--background": "linear-gradient(45deg, #21d4fd 0%, #b721ff 100%)",
            "--size": "80px",
            "--delay": "-1s",
          }}
        >
          {" "}
        </span>
        <span
          style={{
            "--left": "85%",
            "--top": "37%",
            "--background": "linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)",
            "--size": "120px",
            "--delay": "-2s",
          }}
        ></span>
        <span
          style={{
            "--left": "15%",
            "--top": "65%",
            "--background": "linear-gradient(135deg, #00dbde 0%, #fc00ff 100%)",
            "--size": "90px",
            "--delay": "-5s",
          }}
        ></span>
        <span
          style={{
            "--left": "75%",
            "--top": "90%",
            "--background": "linear-gradient(145deg, #ffe53b 0%, #ff2525 100%)",
            "--size": "70px",
            "--delay": "-3s",
          }}
        ></span>
      </div>
      <div id="menu-background">
        <span className="title">You can follow me from these links</span>
        <div id="follow-links">
          <Link
            target="_blank"
            className="follow-link"
            href="https://www.linkedin.com/in/busenuradibelli/"
          >
            <img src="img/icon/linkedin.svg" alt="linkedin-icon" width="40px" />
          </Link>
          <Link
            target="_blank"
            className="follow-link"
            href="https://github.com/badblli"
          >
            <img src="img/icon/github.svg" alt="github-icon" width="40px" />
          </Link>
          <Link
            target="_blank"
            className="follow-link"
            href="https://www.behance.net/bsnradblli5f34"
          >
            <img src="img/icon/behance.svg" alt="behance-icon" width="40px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
