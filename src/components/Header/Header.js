import React, { useState } from "react";
import logo from "../../assets/images/cookchef-d.png";
import styles from "./Header.module.scss";
import HeaderMenuResponsive from "./HeaderMenuResponsive";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = ({ setPage }) => {
  const [showMenu, setShowMenu] = useState(false);
  //   let navigate = useNavigate();

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      {/* <div onClick={navigate("/")} className="flex-fill">
        <img src={logo} alt="cookchef logo" />
      </div> */}
      <NavLink to="/" className="flex-fill">
        <img src={logo} alt="cookchef logo" />
      </NavLink>
      <ul className={styles.headerList}>
        {/* <button onClick={navigate("/admin")} className="btn btn-primary mr-15">
          Ajouter une recette
        </button> */}
        <NavLink to="/admin" className="btn btn-primary mr-15">
          Ajouter une recette
        </NavLink>
        <button className="mr-15 btn btn-reverse-primary">Wishlist</button>
        <button className="btn btn-primary">connexion</button>
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
