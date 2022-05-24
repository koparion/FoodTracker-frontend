import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Meal( {meal} ){

    const [imageUrl,setImageUrl] = useState("");

    useEffect(()=>{
        try{
            axios.get('http://localhost:80/FoodTracker-backend/meal.php',{params: { ingr: meal.id }})
            .then((data)=>{
                setImageUrl(data.data.image);
                console.log(data.data.image);
            })
        } catch(err){
            console.error(err.message);
        }
        
    },[meal.id])

    return (
    <article>
        <h1>{meal.title}</h1>
        <img src = {imageUrl} alt="recipe" />
        <ul className="instructions">
            <li>Preperation Time: { meal.readyInMinutes} minutes</li>
            <li>Number of Servings: {meal.servings}</li>
        </ul>
        <a href={meal.sourceUrl}> Go To Recipe</a>
    </article>
    );
}