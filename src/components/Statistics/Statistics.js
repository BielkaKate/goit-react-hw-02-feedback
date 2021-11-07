import react from "react";
import { Component } from "react";

const Statistics = ({good, neutral, bad, total, positive="0"}) => {
    return(
        <div>
            <ul>
                <li>Good:{good}</li>
                <li>Neutral:{neutral}</li>
                <li>Bad:{bad}</li>
                <li>Total:{total}</li>
                <li>Positive feedback:{positive}%</li>
            </ul>
        </div>
    )
}

export default Statistics