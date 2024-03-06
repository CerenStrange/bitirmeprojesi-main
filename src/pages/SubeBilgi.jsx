import React, { useEffect, useState } from "react";
import Burfassube from "../data/Burfassubeler";
import { v4 as uuidv4 } from "uuid";

const SubeBilgi = () => {
  return (
    <div className="text-center ">
      {Burfassube.map((item) => (
        <div key={uuidv4()} className="card">
          <h2>{item.baslik}</h2>
          <img className="rounded mx-auto d-block" src={item.thumb} width="65%" />
          <h4>Adres: {item.adres}</h4>
          <p>Telefon No: {item.telefon}</p>
          <p>Faks: {item.fax}</p>
          <p>E-Posta: {item.eposta}</p>
        </div>
      ))}
    </div>
  );
};

export default SubeBilgi;
