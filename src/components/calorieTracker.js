import {useState} from "react";
import axios from "axios";

function CalorieTracker() {

    const[food, setFood] = useState([]);
    const[input, setInput] = useState({});

    const getFood = async (event) =>  {
        event.preventDefault();
        try{
            await axios.get('http://localhost:80/FoodTracker-backend/foodapi.php',{params: { ingr: input }})
                .then(r => {
                    setFood(r.data);
                },[]);
        }catch(err){
            console.error(err.message);
        }
    }
    const handleChange = (event) => {
        //console.log(event.target.value);
        event.preventDefault();
        setInput(event.target.value);
    };

    const foodArray = Array.from(food);
    let jsonQuery = require('json-query')
    let parsed = jsonQuery('hints[]', {data: food}).value

    // console.log(parsed);
    return (

        <div className="App">
            <div className="container">
                <div className="title mt-5">
                    <h1> Food Tracker</h1>
                </div>
                <div className="row mt-5 justify-content-md-center">
                    <form className="d-flex col-6 " onSubmit={getFood}>
                        <input
                            onChange={handleChange}
                            className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div>
                    {
                        parsed.map((item) => {
                            return (
                                <ol key={item}>
                                    <li  >
                                        {console.log(item.food.label)}
                                        label: {item.food.label}
                                    </li>
                                    <li  >
                                        calories: {item.food.nutrients.ENERC_KCAL}
                                    </li>
                                    <img src={item.food.image}/>
                                </ol>
                            )
                        } )}
                </div>
            </div>
        </div>
    );
}

export default CalorieTracker;