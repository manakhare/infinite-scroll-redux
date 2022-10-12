import React from "react";
import "./card.css";

const Card = (props) => {
  // console.log(props);
  const {avatar, first_name, last_name, email, id} = props;

  return (
    <div className="card-container">
      <div className="img-container">
        <img src={avatar} />
      </div>

      <div className="heading">
        <div className="name">
          {first_name} {last_name}
        </div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
};

export default Card;
