import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  total,
  positivePercentage,
  good,
  neutral,
  bad,
}) => {
  const state = {
    good,
    neutral,
    bad,
  };
  return (
    <>
      <h3 className={css.title}>Statistics</h3>
      <ul className={css.list}>
        {Object.keys(state).map(key => (
          <li key={key}>
            <p>
              {key}: {state[key]}
            </p>
          </li>
        ))}
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage || 0}%</p>
        </li>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
