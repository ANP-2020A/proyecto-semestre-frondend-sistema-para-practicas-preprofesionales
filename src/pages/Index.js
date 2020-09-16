import React from "react";
import OfferList from "../components/OfferList";
import { useOfferList } from "../data/useOfferList";
import ShowError from "../components/ShowError";

const HomePage = () => {
  const offers = useOfferList();

  return (
    <>
      <h1 className="page-title">
        <a href="https://es.reactjs.org/">React</a> boilerplate con{" "}
        <a href="https://ant.design/docs/react/introduce">Antd</a>
      </h1>

      <p>Este es el contenido de la página principal.</p>

      <h2>Lista de Artículos</h2>
      {offers.isLoading ? (
        "Cargando..."
      ) : offers.isError ? (
        <ShowError error={offers.isError} />
      ) : (
        <OfferList articles={offers.articles} />
      )}
    </>
  );
};

export default HomePage;
