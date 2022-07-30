import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Partners from "./components/aboutTeachers/AboutTeachers";
import Ege from "./components/ege/Ege";
import ElementarySchool from "./components/elementarySchool/ElementarySchool";
import English from "./components/elementarySchool/english/English";
import Math from "./components/elementarySchool/math/Math";
import Programming from "./components/elementarySchool/programming/Programming";
import RussianLanguage from "./components/elementarySchool/russianLanguage/RussianLanguage";
import Faq from "./components/faq/Faq";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ParentLogin from "./components/login/ParentLogin";
import TeacherLogin from "./components/login/TeacherLogin";
import Prelogin from "./components/prelogin/Prelogin";
import Career from "./components/price/Price";
import Reviews from "./components/reviews/Reviews";
import SecondarySchool from "./components/secondarySchool/SecondarySchool";
import axios from "axios";

let state = [
  { name: "Главная", id: 1, link: "/home" },
  { name: "Начальная школа", id: 2, link: "/elementarySchool" },
  { name: "Средняя школа", id: 3, link: "/secondarySchool" },
  { name: "ЕГЭ", id: 4, link: "/ege" },
  { name: "О репетиторах", id: 5, link: "/aboutTeachers" },
  { name: "Стоимость", id: 6, link: "/price" },
  { name: "FAQ", id: 7, link: "/faq" },
  { name: "Отзывы", id: 8, link: "/reviews" },
];
let stateDivided = [
  { id: 1, name: "Английский язык", link: "/english" },
  { id: 2, name: "Математика", link: "/math" },
  { id: 3, name: "Программирование", link: "/programming" },
  { id: 4, name: "Русский язык", link: "/russianLanguage" },
];

function App() {
  // LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [user, setUser] = useState(null);
  const sendRequest = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://social-network.samuraijs.com/api/1.0/auth/login",
      params: { email: email, password: password, rememberMe: rememberMe },
    }).then((response) => {
      setUser(response.data);
    });
  };

  const [buttonClicked, setButtonClicked] = useState(false);
  let changeSetButtonClicked = () => {
    buttonClicked ? setButtonClicked(false) : setButtonClicked(true);
  };
  return (
    <div>
      <Header
        state={state}
        buttonClicked={buttonClicked}
        changeSetButtonClicked={changeSetButtonClicked}
        user={user}
        setUser={setUser}
      />
      <div className={classes.context}>
        <Routes>
          <Route
            path="/elementarySchool"
            element={
              <ElementarySchool
                state={stateDivided}
                buttonClicked={buttonClicked}
                changeSetButtonClicked={changeSetButtonClicked}
              />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/secondarySchool" element={<SecondarySchool />} />
          <Route path="/ege" element={<Ege />} />
          <Route path="/aboutTeachers" element={<Partners />} />
          <Route path="/price" element={<Career />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/reviews" element={<Reviews user={user} />} />
          <Route path="/English" element={<English />} />
          <Route path="/math" element={<Math />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/russianLanguage" element={<RussianLanguage />} />
          <Route path="/prelogin" element={<Prelogin />} />
          <Route
            path="/parentLogin"
            element={
              <ParentLogin
                sendRequest={sendRequest}
                user={user}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                rememberMe={rememberMe}
                setRememberMe={setRememberMe}
              />
            }
          />
          <Route
            path="/teacherLogin"
            element={
              <TeacherLogin
                sendRequest={sendRequest}
                user={user}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                rememberMe={rememberMe}
                setRememberMe={setRememberMe}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
