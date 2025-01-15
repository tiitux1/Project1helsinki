import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ feedback }) => {
  const total = feedback.good + feedback.neutral + feedback.bad;

  if (total === 0) {
    return <p>Ei palautteita annettu.</p>;
  }

  const average = (feedback.good - feedback.bad) / total;
  const positivePercentage = (feedback.good / total) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="Hyvä" value={feedback.good} />
        <StatisticLine text="Neutraali" value={feedback.neutral} />
        <StatisticLine text="Huono" value={feedback.bad} />
        <StatisticLine text="Yhteensä" value={total} />
        <StatisticLine text="Keskiarvo" value={average.toFixed(2)} />
        <StatisticLine text="Positiivisia" value={`${positivePercentage.toFixed(2)} %`} />
      </tbody>
    </table>
  );
};

export default Statistics;
