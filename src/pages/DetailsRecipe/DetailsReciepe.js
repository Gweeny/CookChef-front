import React, { useContext, useState, useEffect } from "react";
// import styles from "./DetailsRecipe.module.scss";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../context/ApiContext";

const DetailsRecipe = () => {
  let params = useParams();
  const [recipe, setRecipe] = useState([]);
  const url = useContext(ApiContext);
  const id = params.id;

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
    <div>
      <h2>{recipe.title}</h2>
    </div>
  );
};

export default DetailsRecipe;
