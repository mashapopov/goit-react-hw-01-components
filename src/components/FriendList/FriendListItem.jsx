import PropTypes from 'prop-types';
import css from './Friend.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={`${css.status} ${isOnline && css.status__online}`}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
