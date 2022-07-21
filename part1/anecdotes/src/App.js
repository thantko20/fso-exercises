import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const setRandomAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);

    setSelected(randomNum);
  };

  const setVote = () => {
    setPoints((prev) => {
      const copy = [...prev];
      copy[selected] += 1;

      return copy;
    });
  };

  const findIndexOfMostVotes = () => {
    return points.indexOf(Math.max(...points));
  };

  return (
    <div>
      <AnecdoteOfTheDay
        anecdote={anecdotes[selected]}
        votes={points[selected]}
        setVote={setVote}
        next={setRandomAnecdote}
      />
      <AnecdoteWithMostVotes
        anecdotes={anecdotes}
        points={points}
        maxVotesIndex={findIndexOfMostVotes()}
      />
    </div>
  );
};

const AnecdoteOfTheDay = ({ anecdote, votes, setVote, next }) => {
  return (
    <div>
      <h2>Anecdote of The Day</h2>
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
      <button onClick={setVote}>vote</button>
      <button onClick={next}>next anecdote</button>
    </div>
  );
};

const AnecdoteWithMostVotes = ({ anecdotes, maxVotesIndex, points }) => {
  return (
    <div>
      <h2>Anecdote with Most Votes</h2>
      <div>{anecdotes[maxVotesIndex]}</div>
      <div>has {points[maxVotesIndex]} votes</div>
    </div>
  );
};

export default App;
