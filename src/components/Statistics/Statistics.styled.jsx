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
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;

  background-color: ${({ color }) => {
    const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
    return `${colorArray[Number(color.id.replace(/[^0-9]/g, '')) % 5]}`;
  }};
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
