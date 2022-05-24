import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import Home from "./components/home";
import CalorieTracker from "./components/calorieTracker";
import Direct from "./components/direct";
import Loading from "./components/Loading";
import MealIdeas from "./components/MealIdeas";


function App (){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <>
            {loading === false ? (
                <div className="App">
                    <Router>
                        <Routes>
                            {/* Change the paths to the right user */}
                            <Route path="/" element={<Home />} />
                            <Route path="/direct" exact element={<Direct />} />
                            <Route path="/calorietracker" exact element={<CalorieTracker />} />
                            <Route path="/mealideas" exact element={<MealIdeas />} />
                        </Routes>
                    </Router>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );



}

export default App;
