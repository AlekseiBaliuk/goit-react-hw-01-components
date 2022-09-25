import styled from '@emotion/styled';

export const UserProfile = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
`;

export const UserDescription = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-align: center;
  display: block;
  border-bottom: 1px solid #9e9e9e;
`;

export const UserImg = styled.img`
  margin: 35px auto;
  border: 1px solid #9e9e9e;
  border-radius: 50%;
  max-width: 100px;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  color: #212121;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  color: #535353;
`;

export const UserLocation = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  color: #535353;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 15px 0px;
  width: 100px;
  color: #9e9e9e;
  background-color: rgba(227, 225, 225, 0.973);

  &:nth-of-type(2n) {
  border-right: 1px solid #9e9e9e;
  border-left: 1px solid #9e9e9e;
`;

export const StatLabel = styled.span`
  margin-bottom: 4px;
  font-size: 14px;
  color: #535353;
`;

export const StatValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #212121;
`;
