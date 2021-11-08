import react, {Component} from "react";
import './App.css';
import Section from './components/Section/Section'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import propTypes from "prop-types"

class App extends Component {
static propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number
}

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

onButtonClick = e => {
console.log(e.target.name);
this.setState(prevState => {
  return ({[e.target.name]: prevState[e.target.name] + 1 })   
})
  }

countTotalFeedback(){
return(
  this.state.good + this.state.neutral + this.state.bad
)

}

countPositiveFeedbackPercentage(){
return(
  Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)
)
}

  render(){
    return (
      <div className="container">
      <Section title="Please, leave feedback">
        <FeedbackOptions 
        options = {['good', 'neutral', 'bad']}
        onLeaveFeedback={this.onButtonClick}/>
      </Section>

<Section title="Statistics">
{this.state.good || this.state.bad || this.state.neutral === true ? (

<Statistics
good={this.state.good}
neutral={this.state.neutral}
bad={this.state.bad}
total = {this.countTotalFeedback()}
positive = {this.countPositiveFeedbackPercentage()}
/>
) : (
  <Notification message="No feedback given" />
)
}

         </Section>
      </div>
    )
  }
}

export default App;
