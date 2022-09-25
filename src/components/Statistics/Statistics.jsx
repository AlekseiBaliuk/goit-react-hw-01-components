import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatsTitle,
  StatList,
  StatItem,
  StatLabel,
  StatValue,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            // style={{ backgroundColor: randomBgColor(stat) }}
            color={stat}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatValue>{`${stat.percentage}%`}</StatValue>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

Statistics.defaultProps = {
  title: '',
};
