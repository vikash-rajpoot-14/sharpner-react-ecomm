import React, { useContext } from 'react';
import classes from './Movie.module.css';
import { Context } from '../App';

const Movie = ({ id, title, openingText, releaseDate }) => {
const {loading,setLoading} = useContext(Context);

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      const response = await fetch(`https://movies-5dbce-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: "DELETE"
      });
       setLoading(false)
      if (!response.ok) {
        throw new Error(`Failed to delete movie with ID ${id}`);
      }

      // Handle success or additional logic here
    } catch (error) {
      console.log("Error:", error);
      // Handle error or show a user-friendly message
    }
  }

  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default Movie;
