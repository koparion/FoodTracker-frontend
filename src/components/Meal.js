import React, {useState, useEffect} from 'react';

export default function Meal( {meal} ){

    const [imageUrl,setImageUrl] = useState("");

    useEffect(()=>{
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=45b219a8dd0a4f418d941b5042e1345a&includeNutrition=false`
        ).then((response)=>response.json())
        .then((data)=>{
            setImageUrl(data.image)
        }).catch(()=>{
            console.log("error")
        })
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