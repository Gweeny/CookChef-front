import React, { useContext, useState, useEffect } from "react";
import styles from "./DetailsRecipe.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../../context/ApiContext";

const DetailsRecipe = () => {
  let navigate = useNavigate();
  let params = useParams();
  const [recipe, setRecipe] = useState([]);
  const url = useContext(ApiContext);
  const id = params.id;

  const navigateToMainPage = () => {
    navigate("/");
  };
  useEffect(() => {
    console.log("hello world");
    const fetchRecipe = async () => {
      const response = await fetch(`${url}/${id}`);
      console.log(response);
      if (response.ok) {
        const newRecipe = await response.json();
        console.log(newRecipe);
        setRecipe(newRecipe);
      }
    };
    fetchRecipe();
  }, [url, id]);
  return (
    <div className={`${styles.recette}`}>
      <button className="btn btn-primary" onClick={navigateToMainPage}>
        retour
      </button>
      <div className={`${styles.inside}`}>
        <img
          src={recipe.image}
          alt="image"
          className={`${styles.imageContainer}`}
        />
        <div className={`${styles.rightAll}`}>
          <h2>{recipe.title}</h2>
          <div className={`${styles.right}`}>
            <h2>Ingrédients</h2>
            <div className={`${styles.listeDesIngredients}`}>
              <p>Liste des Ingrédients</p>
              <p>Liste des Ingrédients</p>
              <p>Liste des Ingrédients</p>
              <p>Liste des Ingrédients</p>
              <p>Liste des Ingrédients</p>
              <p>Liste des Ingrédients</p>
              <p>Liste des Ingrédients</p>
              <p>Liste des Ingrédients</p>
              <p>Liste des Ingrédients</p>
            </div>
          </div>
        </div>
        <button>Modifier</button>
        <button>Supprimer</button>
      </div>
    </div>
  );
};

export default DetailsRecipe;
