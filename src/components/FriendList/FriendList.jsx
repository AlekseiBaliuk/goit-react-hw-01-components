import { PropTypes } from 'prop-types';
import {
  FrienList,
  FriendListItem,
  FriendAvatar,
  FriendName,
  FrienStatus,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FrienList>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <FrienStatus status={friend.isOnline}>{friend.isOnline}</FrienStatus>
          <FriendAvatar src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </FriendListItem>
      ))}
    </FrienList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isFinite: PropTypes.bool,
    })
  ),
};
