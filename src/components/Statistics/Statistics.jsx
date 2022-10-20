import { randomBgColor } from 'utils';
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
        {stats.map(({ id, label, percentage }) => (
          <StatItem
            key={id}
            style={{ backgroundColor: randomBgColor(id) }}
            // color={stats}
          >
            <StatLabel>{label}</StatLabel>
            <StatValue>{`${percentage}%`}</StatValue>
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
