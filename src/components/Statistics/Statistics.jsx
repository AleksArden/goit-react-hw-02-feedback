import PropTypes from 'prop-types'; 



export const Statistics = ({
  total,
  positivePercentage,
  good,
  neutral,
    bad,
  children
}) => {
  const state = {
    good,
    neutral,
    bad,
  };
  return (
    <>
      <h3>Statistics</h3>
     
        {total === 0 ? (children) : (
          <ul>
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
        )}
    </>
  );
};
Statistics.propTypes = {
     total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  children: PropTypes.node,
}
