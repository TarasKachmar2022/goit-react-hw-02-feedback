import PropTypes from 'prop-types';
import Notification from 'components/notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <div>
      <p>Statistics</p>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
