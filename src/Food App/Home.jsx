import React, { useState } from "react";
import {
  FaSearch,
  FaCartArrowDown,
  FaAlignCenter,
  FaAlignLeft,
  FaImage,
  FaAlignJustify,
} from "react-icons/fa";
import image from "./image.jpg";
import "./home.css";
import Display from "./Display";
import ScrollFood from "./ScrollFood";
import Login from "./Login";
function Home() {
  const data = [
    {
      id: 0,
      img: image,
      text: "Food Details",
    },
    {
      id: 1,
      img: image,
      text: "Food Details",
    },
    {
      id: 2,
      img: image,
      text: "Food Details",
    },
    {
      id: 3,
      img: image,
      text: "Food Details",
    },
    {
      id: 4,
      img: image,
      text: "Food Details",
    },
  ];
  const [clicked, setClicked] = useState(false);
  const [login, setLogin] = useState(false);
  const [status, setStatus] = useState("Login");

  const onSubmit = e => {
    setClicked(true);
    // setLogin(false);
  };
  return (
    <div className="design" id="home">
      <header id="home">
        <div className="logo">
          <h1>Tomato</h1>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#mobile">Mobile app</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
        <div className="header-right">
          <div className="children">
            <FaAlignJustify className="menu" />
            <FaSearch />
            <FaCartArrowDown />
            {clicked ? (
              <span>
                <FaImage />
              </span>
            ) : (
              <button
                style={{ cursor: "pointer" }}
                className="btn"
                onClick={() => {
                  setLogin(true);
                }}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </header>
      <main>
        <div className="food">
          <h1>
            Order your <br />
            favourite food here
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            eligendi repellendus veritatis similique quos? Voluptatibus quis
            vitae architecto natus doloremque!
          </p>
          <button className="btn">View Menu</button>
        </div>
      </main>

      <h1>PRODUCTS</h1>
      <div className="products-wrapper">
        <div className="products">
          {data.map((item, index) => {
            return (
              <div className="produce">
                <div className="menus">
                  <div className="menu-item">
                    <ScrollFood img={item.img} text={item.text} />
                  </div>
                </div>

                <div className="items">
                  <Display />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {login ? (
        <div className="container">
          <Login
            setStatus={setStatus}
            setLogin={setLogin}
            status={status}
            onSubmit={onSubmit}
            login={login}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
