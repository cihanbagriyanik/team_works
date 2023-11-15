import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import { MdDelete } from "react-icons/md";

import axios from "axios";

const URL = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [curentUser, setCurentUser] = useState("");
  const [text, setText] = useState({ title: "", value: "" });
  const [list, setList] = useState([]);

  const getData = async () => {
    const veri = await axios.get(URL);
    const user = veri.data.results[0];
    setCurentUser(user);
    setText({
      title: "My name is",
      value: user?.name?.first,
    });
    // console.log(veri.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const renew = () => {
    getData();
  };

  const add = () => {
    setList([...list, curentUser]);
  };

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={curentUser?.picture?.medium || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">{text.title}</p>
          <p className="user-value">{text.value}</p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img
                src={womanSvg}
                alt="user"
                id="iconImg"
                onMouseOver={() =>
                  setText({
                    title: "My name is",
                    value: curentUser?.name?.first,
                  })
                }
              />
            </button>
            <button className="icon" data-label="email">
              <img
                src={mailSvg}
                alt="mail"
                id="iconImg"
                onMouseOver={() =>
                  setText({ title: "My mail is", value: curentUser?.email })
                }
              />
            </button>
            <button className="icon" data-label="age">
              <img
                src={womanAgeSvg}
                alt="age"
                id="iconImg"
                onMouseOver={() =>
                  setText({ title: "My age is", value: curentUser?.dob?.age })
                }
              />
            </button>
            <button className="icon" data-label="street">
              <img
                src={mapSvg}
                alt="map"
                id="iconImg"
                onMouseOver={() =>
                  setText({
                    title: "My city is",
                    value: curentUser?.location?.city,
                  })
                }
              />
            </button>
            <button className="icon" data-label="phone">
              <img
                src={phoneSvg}
                alt="phone"
                id="iconImg"
                onMouseOver={() =>
                  setText({ title: "My phone is", value: curentUser?.cell })
                }
              />
            </button>
            <button className="icon" data-label="password">
              <img
                src={padlockSvg}
                alt="lock"
                id="iconImg"
                onMouseOver={() =>
                  setText({
                    title: "My password is",
                    value: curentUser?.login?.password,
                  })
                }
              />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={() => renew()}>
              new user
            </button>
            <button className="btn" type="button" onClick={() => add()}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
                <th className="th">Del</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => {
                return (
                  <tr className="body-tr">
                    <th> {item?.name?.first} </th>
                    <th> {item?.email} </th>
                    <th> {item?.cell} </th>
                    <th> {item?.dob?.age} </th>
                    <th> <MdDelete size={30} role="button" /> </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
