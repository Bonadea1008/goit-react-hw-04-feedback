import PropTypes from 'prop-types';
import { Buttons } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <Buttons
        key={option}
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </Buttons>
    );
  });
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
