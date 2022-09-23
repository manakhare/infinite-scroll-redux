import React, { useEffect } from "react";
import Card from "../Card/Card";
import { fetchCars } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import "./container.css";
// import { objectTraps } from "immer/dist/internal";

const Container = () => {
  const carData = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  });

  return (
    <div className="main-container">
      {carData.map((object) => {
        return <Card key={object.id} {...object} />;
      })}
    </div>
  );
};

export default Container;
