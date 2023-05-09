import React from "react";

function ToyCard({ toy, onDelete, onLikes}) {

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}` , {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      onDelete(data)
    })
  }

  function handlePatch() {
    const likingThemToys = {likes : toy.likes + 1}
        fetch(`http://localhost:3001/toys/${toy.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(likingThemToys)
         })
         .then((resp) => resp.json())
         .then(onLikes)}
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handlePatch}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
