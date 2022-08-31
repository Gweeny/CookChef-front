import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../Admin/components/RecipeForm.module.scss";

const AuthForm = () => {
  let defaultValues = {
    email: "",
    password: "",
  };

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    clearErrors,
  } = useForm({ defaultValues });

  const submit = async (values) => {
    try {
      clearErrors();
      const response = await fetch("http://localhost:3333/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user);
      }
    } catch (error) {
      console.log(error);
      setError("generic", {
        type: "generic",
        message: "Generic error occurred",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${styles.recipe}`}
    >
      <h2>Se connecter</h2>
      <div className="d-flex flex-column mb-20">
        <label>Email</label>
        <input {...register("email")} type="text" placeholder="email"></input>
        <p>Error</p>
      </div>
      <div className="d-flex flex-column mb-20">
        <label>Mot de passe</label>
        <input
          {...register("password")}
          type="text"
          placeholder="Mot de passe"
        ></input>
        <p>Error</p>
      </div>
      <div>
        <button disabled={isSubmitting} className="btn btn-primary">
          Se connecter
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
