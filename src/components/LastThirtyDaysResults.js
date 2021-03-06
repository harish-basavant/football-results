import React from 'react';
import CustomisableFootballFeed from '../HOC/CustomisableFootballFeed';
import { getResultTable } from '../utils/utilities';

function LastThirtyDaysResults({ loading, results, error }) {
  if (loading || error) {
    return loading ? 'Loading...' : error.message;
  }
  results = getResultTable(results);
  return (
    <div className="resultsContainer">
      <h1 className="title">Last 30 Days Results</h1>
      <ul>
        {results.map(({ id, name, won }) => (
          <li className="standings" key={id}>{`${name} - ${won}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomisableFootballFeed({
  numberOfDays: 30,
})(LastThirtyDaysResults);
