import React from "react";

const Card = ({ id, name, image, handleCardClick }) => {
  return (
    <>
      <div className="card" onClick={()=>handleCardClick(id)}>
        <img src={image} alt={`${name}-image`} />
        <p>{name}</p>
      </div>
    </>
  );
};

export default Card;
