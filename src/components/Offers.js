import React, { useEffect, useState } from "react";
import getUrl from "../utils/url";

const baseUrl = getUrl();

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(baseUrl + "/offers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await result.json();
      setOffers(data.data);
      console.log(data);
      console.log(offers);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>OFERTAS</h1>
      {offers.map((item) => (
        <p>{item.name}</p>
      ))}
    </>
  );
};

export default Offers;
