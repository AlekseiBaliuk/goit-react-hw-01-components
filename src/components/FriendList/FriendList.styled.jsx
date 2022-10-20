import styled from '@emotion/styled';

export const FrienList = styled.ul`
  display: grid;
  gap: 15px;
  justify-content: center;
  margin-top: 50px;
`;

export const FriendListLi = styled.li`
  display: flex;
  align-items: center;
  width: 360px;
  height: 100px;
  gap: 15px;
  border: 1px solid #858585;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
`;

export const FriendAvatar = styled.img`
  width: 80px;
  height: 80px;
  background-color: #858585;
  border-radius: 10px;
`;

export const FriendName = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

export const FrienStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 15px;
  font-size: 55px;

  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;
