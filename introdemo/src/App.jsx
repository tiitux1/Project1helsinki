import React, { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

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
      <Button handleClick={() => handleFeedback('good')} text="Hyvä" />
      <Button handleClick={() => handleFeedback('neutral')} text="Neutraali" />
      <Button handleClick={() => handleFeedback('bad')} text="Huono" />

      <h2>Tilastot</h2>
      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
