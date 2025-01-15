import React, { useState } from 'react';

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
      <p>Hyvä: {feedback.good}</p>
      <p>Neutraali: {feedback.neutral}</p>
      <p>Huono: {feedback.bad}</p>
    </div>
  );
};

export default App;
