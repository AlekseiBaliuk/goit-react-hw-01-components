import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: ${props => `1px solid ${props.theme.colors.gray}`};
  width: 300px;
`;

export const StatsTitle = styled.h2`
  text-align: center;
  padding: 20px;
  font-size: 24px;
  color: ${props => `${props.theme.colors.gray}`};
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: #ccc;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  /* background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }}; */
`;

export const StatLabel = styled.span`
  margin-bottom: 7px;
  font-size: 12px;
  color: #fafafa;
`;

export const StatValue = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #fafafa;
`;
