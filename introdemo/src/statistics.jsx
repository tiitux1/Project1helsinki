import React from 'react';

const Statistics = ({ feedback }) => {
  const total = feedback.good + feedback.neutral + feedback.bad;
  const average = total > 0 ? (feedback.good - feedback.bad) / total : 0;
  const positivePercentage = total > 0 ? (feedback.good / total) * 100 : 0;

  if (total === 0) {
    return <p>Ei palautteita annettu.</p>;
  }

  return (
    <div>
      <p>Hyvä: {feedback.good}</p>
      <p>Neutraali: {feedback.neutral}</p>
      <p>Huono: {feedback.bad}</p>
      <p>Yhteensä: {total}</p>
      <p>Keskiarvo: {average.toFixed(2)}</p>
      <p>Positiivisia: {positivePercentage.toFixed(2)} %</p>
    </div>
  );
};

export default Statistics;
