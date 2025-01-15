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

  const total = feedback.good + feedback.neutral + feedback.bad;
  const average = total > 0 ? (feedback.good - feedback.bad) / total : 0;
  const positivePercentage = total > 0 ? (feedback.good / total) * 100 : 0;

  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={() => handleFeedback('good')}>Hyvä</button>
      <button onClick={() => handleFeedback('neutral')}>Neutraali</button>
      <button onClick={() => handleFeedback('bad')}>Huono</button>

      <h2>Tilastot</h2>
      {total > 0 ? (
        <div>
          <p>Hyvä: {feedback.good}</p>
          <p>Neutraali: {feedback.neutral}</p>
          <p>Huono: {feedback.bad}</p>
          <p>Yhteensä: {total}</p>
          <p>Keskiarvo: {average.toFixed(2)}</p>
          <p>Positiivisia: {positivePercentage.toFixed(2)} %</p>
        </div>
      ) : (
        <p>Ei palautteita annettu.</p>
      )}
    </div>
  );
};

export default App;
