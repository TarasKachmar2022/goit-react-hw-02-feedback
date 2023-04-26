import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option[0].toUpperCase() + option.substring(1)}
      </button>
    );
  });

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
