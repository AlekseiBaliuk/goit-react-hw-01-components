import PropTypes from 'prop-types';
import {
  UserProfile,
  UserDescription,
  UserImg,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsList,
  StatLabel,
  StatValue,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <StatsList>
          <StatLabel>Followers</StatLabel>
          <StatValue>{followers}</StatValue>
        </StatsList>
        <StatsList>
          <StatLabel>Views</StatLabel>
          <StatValue>{views}</StatValue>
        </StatsList>
        <StatsList>
          <StatLabel>Likes</StatLabel>
          <StatValue>{likes}</StatValue>
        </StatsList>
      </UserStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
