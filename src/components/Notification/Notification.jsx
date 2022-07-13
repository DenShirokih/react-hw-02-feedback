import PropTypes from 'prop-types';
import { Ntf } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <>
      <Ntf>{message}</Ntf>
    </>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
