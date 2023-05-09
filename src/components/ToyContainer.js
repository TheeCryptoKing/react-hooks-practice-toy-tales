import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onLikes }) {

  //const to render all cards 
  const renderCards = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} onDelete={onDelete} onLikes={onLikes}/>})
    //makes an array of the toycard componenets and data 

  return (
    <div id="toy-collection">
    {renderCards}
    {/* renders all cards from variable */}
    </div>
  );
}

export default ToyContainer;
