import React from "react";
import classes from "./TeacherLogin.module.css";
const TeacherLogin = ({
  user,
  sendRequest,
  email,
  setEmail,
  password,
  setPassword,
  setRememberMe,
  rememberMe,
}) => {
  return (
    <div>
      {!user ? (
        <form>
          <div>
            <input
              placeholder="Введите E-mail"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              placeholder="Введите пароль"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => setRememberMe(false)}
            ></input>
            <span>Запомнить меня</span>
          </div>
          <div>
            <button
              onClick={(e) => {
                sendRequest(e);
              }}
            >
              Войти
            </button>
          </div>
        </form>
      ) : (
        <div className={classes.luckyEntry}>
          Вы успешно авторизованы! {user.userId}
        </div>
      )}
    </div>
  );
};

export default TeacherLogin;
