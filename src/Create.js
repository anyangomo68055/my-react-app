import React from 'react'
import { UseState } from 'react'
import { useHistory } from 'react-router-dom'
const create = () => {
    const [title, setTitle] = UseState("");
    const [body, setBody] = UseState("");
    const [actor, setActor] = UseState("");
    const [isPending, setIspending] = UseState(false)
    const History = useHistory(); 
    const handleSubmit =(e)=>{
        e.preventDefault();
        const movie ={title, body, actor}

        isPending(true);

        fetch('http://localhost:8000/movies', {
            method:"POST",
            headers:{"Content type": "application/json"},
            body: JSON.stringify (movie)

        })  .then(() => {
            console.log('New Movie Added');
            setIspending(false);
            History.push("/");
        });
        
    }



  return (
    <div className="create">
    <h1>Add A New Movie</h1>
    <form onSubmit={handleSubmit}>
        <label>Movie Title</label>
        <input type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Movie's Body:</label>
        <textarea>
        required={body}
        onChange={(e) => setBody(e.target.value)}
        </textarea>
        <label>Movie's Actor:</label>
        <select>
            value={actor}
            onChange={(e) => setActor(e.target.value)}
            <option value="Arnold">Arnold</option>
            <option value="Lara Craft">Lara Craft</option>    
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
    </form>
    </div>
  )
}

export default create