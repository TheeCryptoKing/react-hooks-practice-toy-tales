import React, { useState , useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys , setToys] = useState([])

  function handleDeleteToy(deletedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }
  function handleNewToy(newToy) {
    setToys([...toys, newToy])
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((resp) => resp.json())
    .then((data) => {  
      setToys(data)
    }) 
  }, [])//DONT FUCKING FORGET YOUR DEPENEDENCY = WIZARDLEO
  console.log(toys)
  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleLikes(likedToy) {
    const updatedToy = toys.map((toy) => 
      toy.id === likedToy.id ? likedToy : toy)
      setToys(updatedToy)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDeleteToy} onLikes={handleLikes}/>
    </>
  );
}

export default App;
