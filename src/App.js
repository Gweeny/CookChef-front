import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./assets/styles/App.module.scss";
import { useState } from "react";
import Admin from "./pages/Admin/Admin";
import DetailsReciepe from "./pages/DetailsRecipe/DetailsReciepe";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
function App() {
  //   const [page, setPage] = useState("homepage");

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/recipe/:id" element={<DetailsReciepe />} />
        <Route path="/auth/login" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
