import PropTypes from 'prop-types';
import { StatisticsDescription } from 'components/Statistics/Statistics.styled';

const Notification = ({ message }) => {
  return <StatisticsDescription>{message}</StatisticsDescription>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
