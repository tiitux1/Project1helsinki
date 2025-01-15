import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    "If it works, don’t touch it.",
    "Programming is 10% writing code and 90% understanding why it doesn’t work.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "Code never lies, comments sometimes do.",
    "The best code is no code at all.",
    "There are only two hard things in computer science: cache invalidation and naming things.",
    "First, solve the problem. Then, write the code.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const showRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const voteForAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const mostVotedIndex = votes.indexOf(Math.max(...votes));
  const mostVotedAnecdote = anecdotes[mostVotedIndex];
  const mostVotes = votes[mostVotedIndex];

  return (
    <div>
      <h1>Ohjelmistotuotannon anekdootit</h1>
      <p>{anecdotes[selected]}</p>
      <p>Ääniä: {votes[selected]}</p>
      <button onClick={voteForAnecdote}>Äänestä</button>
      <button onClick={showRandomAnecdote}>Näytä satunnainen anekdootti</button>

      <h2>Eniten ääniä saanut anekdootti</h2>
      {mostVotes > 0 ? (
        <div>
          <p>{mostVotedAnecdote}</p>
          <p>Ääniä: {mostVotes}</p>
        </div>
      ) : (
        <p>Ei ääniä annettu vielä.</p>
      )}
    </div>
  );
};

export default App;
