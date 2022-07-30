import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <Link to="/home">
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>
      <button>
        <Link to="/home">Главная</Link>
      </button>
      <div className={classes.containerSecond}>
        <button onClick={props.changeSetButtonClicked}>
          <Link to="/elementarySchool">Начальная школа</Link>
          <div className={classes.check}></div>
        </button>
      </div>
      <button>
        <Link to="/secondarySchool">Средняя школа</Link>
      </button>
      <button>
        <Link to="/ege">ЕГЭ</Link>
      </button>
      <button>
        <Link to="/aboutTeachers">О репетиторах</Link>
      </button>
      <button>
        <Link to="/faq">FAQ</Link>
      </button>
      <button>
        <Link to="/price">Цены</Link>
      </button>
      <button>
        <Link to="/reviews">Отзывы</Link>
      </button>

      <div className={classes.buttons}>
        <button className={classes.enroll}>Записаться на урок</button>
        {!props.user ? (
          <Link to="/prelogin">
            <button className={classes.login}>Войти</button>
          </Link>
        ) : (
          <button
            className={classes.logout}
            onClick={() => props.setUser(null)}
          >
            Выйти
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
