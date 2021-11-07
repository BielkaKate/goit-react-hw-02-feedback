import react from "react";
import propTypes from "prop-types"


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
<div>
    {/* <button type="button" name="good" onClick={onLeaveFeedback}>"good"</button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>"neutral"</button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>"bad"</button> */}
   {options.map((option)=>{
       return(
        <button type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
        )
    }
       )
       } 
</div>
    )
}

FeedbackOptions.propTypes = {
    onButtonIncrement: propTypes.func 
 }

export default FeedbackOptions;