import React, {useState} from "react";
import MealList from "./MealList";
import axios from "axios";
import "./MealIdeas.css"

export default function MealIdeas(){

    const [mealData,setMealData]=useState(null);
    const [calories,setCalories] = useState(2000);

    function handleChange (e){
        setCalories(e.target.value);

    }

    function getMealData(){
        try{
            axios.get('http://localhost:80/FoodTracker-backend/recipe.php',{params: { ingr: calories }})
            .then((data)=>{
                setMealData(data.data);
                console.log(data.data);
            })
        } catch(err){
            console.error(err.message);
        }
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
