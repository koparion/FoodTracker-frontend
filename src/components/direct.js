import React, { useState, Fragment } from "react";
import { Navigate, Link} from "react-router-dom";
import "./direct.css";
import axios from "axios";

export default function Direct(){
    return(
        <div className="actualMain">
        <div className="main">
            <div className="text">
                <h1>Where would you like to head to?</h1>
            </div>

            <div className = "calorieTracker">
                <Link
                    className="btn btn-primary"
                    to={{
                        pathname: "/calorieTracker",
                    }}
                >
                <button> Calorie Tracker </button>
                </Link>
            </div>

            <div className ="mealTracker">
                <Link
                    className="btn btn-primary"
                    to={{
                        pathname: "/mealideas",
                    }}
                 >
                 <button> Meal Ideas</button>
                </Link>
            </div>
        </div>
        </div>
    )

}