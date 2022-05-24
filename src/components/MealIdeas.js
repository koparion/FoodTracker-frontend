import React, {useState} from "react";
import MealList from "./MealList";
import "./MealIdeas.css"

export default function MealIdeas(){

    const [mealData,setMealData]=useState(null);
    const [calories,setCalories] = useState(2000);

    function handleChange (e){
        setCalories(e.target.value);

    }

    function getMealData(){
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=45b219a8dd0a4f418d941b5042e1345a&timeFrame=day&targetCalories=${calories}`
        )
        .then((response)=>response.json())
        .then((data)=>{
            setMealData(data);
            console.log(data);
        }).catch(()=>console.log("error"))
    }

    return(
        <div className="first">
            <h4>Enter your desired calorie intake for the day and see what looks appetizing!</h4>
            <section className="controls">
                <input 
                    type="number"
                    placeholder="calorie amount"
                    onChange={handleChange}
                />
            </section>
            <button onClick={getMealData}> Get Daily Meal Plan </button>
            {mealData && <MealList mealData={mealData}/>}
        </div>
    )
}
