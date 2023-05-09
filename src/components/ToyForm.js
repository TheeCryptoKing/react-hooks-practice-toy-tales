import React, {useState} from "react";

function ToyForm({ onNewToy }) {
  const [ form, setForm ] = useState({
    "name" : "",
    "image" : "",
    "likes" : 0,
  })

  function handleChange(event) {
    setForm({...form, 
      [event.target.name] : event.target.value
    })
  }
  console.log(form)

  function handleSubmit(e) {
    e.preventDefault()
        fetch(`http://localhost:3001/toys`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                'name' : form.name,
                'image' : form.image,
                'likes' : form.likes,
            })
         })
         .then((resp) => resp.json())
         .then((newToy) => {
          onNewToy(newToy)
         })``
  }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value={form.name}
          className="input-text"
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={form.image}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
