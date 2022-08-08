import React from "react";
import Banner from "../../components/Banner";
import ItemListContainer from "../ItemListContainer";
import "./style.css";

const Home = () => {
  return (
    <div className="homePageContainer">
      <Banner />
      <ItemListContainer />
    </div>
  );
};

export default Home;
