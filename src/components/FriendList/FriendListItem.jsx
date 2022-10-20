import { PropTypes } from 'prop-types';
import {
  FriendListLi,
  FriendAvatar,
  FriendName,
  FrienStatus,
} from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendListLi>
      <FrienStatus status={isOnline}>{isOnline}</FrienStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendListLi>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
