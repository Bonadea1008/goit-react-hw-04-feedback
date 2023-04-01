import PropTypes from 'prop-types';
import { StatisticsDescription } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticsDescription>Good: {good}</StatisticsDescription>
      <StatisticsDescription>Neutral: {neutral}</StatisticsDescription>
      <StatisticsDescription>Bad: {bad}</StatisticsDescription>
      <StatisticsDescription>Total: {total}</StatisticsDescription>
      <StatisticsDescription>
        Positive: {positivePercentage} %{' '}
      </StatisticsDescription>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
