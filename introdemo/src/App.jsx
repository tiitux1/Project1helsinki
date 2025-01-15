import React, { useState } from 'react';
import Statistics from './Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  };

  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={() => handleFeedback('good')}>Hyvä</button>
      <button onClick={() => handleFeedback('neutral')}>Neutraali</button>
      <button onClick={() => handleFeedback('bad')}>Huono</button>

      <h2>Tilastot</h2>
      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
