import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { Wrapper } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={addFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given =(" />
      )}
    </Wrapper>
  );
}

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const result = good + neutral + bad;
//     return result;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const result = this.countTotalFeedback();
//     const { good } = this.state;
//     const percentage = (good * 100) / result;
//     return Math.round(percentage);
//   };

//   onLeaveFeedback = e => {
//     const name = e.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     const objKey = Object.keys(this.state);

//   }
// }
