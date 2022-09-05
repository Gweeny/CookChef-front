import React, { useContext, useState } from "react";
import logo from "../../assets/images/cookchef-d.png";
import styles from "./Header.module.scss";
import HeaderMenuResponsive from "./HeaderMenuResponsive";
// import { useNavigate } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import Cookies from "js-cookie";

const Header = ({ setPage }) => {
  let navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [, setCurrentUser] = useContext(UserContext);

  const [showMenu, setShowMenu] = useState(false);

  const handleClickLogout = async () => {
    try {
      const response = await fetch(`http://localhost:3333/api/users/logout`);
      if (response.ok) {
        setAuth(Cookies.remove("jwt"));
        setCurrentUser(localStorage.removeItem("currentUser"));
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <NavLink to="/" className="flex-fill">
        <img src={logo} alt="cookchef logo" />
      </NavLink>
      <ul className={styles.headerList}>
        <NavLink to="/admin" className="btn btn-primary mr-15">
          Ajouter une recette
        </NavLink>
        <button className="mr-15 btn btn-reverse-primary">Wishlist</button>
        {auth && auth[0] ? (
          <button onClick={handleClickLogout} className="btn btn-primary">
            Déconnexion
          </button>
        ) : (
          <NavLink to="/auth/login" className="btn btn-primary">
            connexion
          </NavLink>
        )}
      </ul>
      <i
        onClick={() => setShowMenu(!showMenu)}
        className={`${styles.headerXs} fa-solid fa-bars`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenuResponsive setPage={setPage} />
        </>
      )}
    </header>
  );
};

export default Header;
