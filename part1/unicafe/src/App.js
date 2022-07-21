import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => setGood(good + 1)}>good</Button>
        <Button onClick={() => setNeutral(neutral + 1)}>neutral</Button>
        <Button onClick={() => setBad(bad + 1)}>bad</Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const numberOfCollectedFeedback = good + neutral + bad;

  const averageScore = () => {
    if (numberOfCollectedFeedback === 0) return 0;
    // good: 1, neutral: 0, bad: -1
    const totalScore = good * 1 + neutral * 0 + bad * -1;

    return totalScore / numberOfCollectedFeedback;
  };

  const positivePercentage = () => {
    if (numberOfCollectedFeedback === 0) return 0;

    return (good / numberOfCollectedFeedback) * 100;
  };

  return (
    <div>
      <h2>statistics</h2>
      {numberOfCollectedFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticsLine text='good' value={good} />
            <StatisticsLine text='neutral' value={neutral} />
            <StatisticsLine text='bad' value={bad} />
            <StatisticsLine text='all' value={numberOfCollectedFeedback} />
            <StatisticsLine text='average' value={averageScore()} />
            <StatisticsLine
              text='positive'
              value={positivePercentage()}
              unit='%'
            />
          </tbody>
        </table>
      )}
    </div>
  );
};

const StatisticsLine = ({ text, value, unit = '' }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        <span>{value}</span>
        <span>{unit}</span>
      </td>
    </tr>
  );
};

export default App;
