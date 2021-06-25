import { useEffect, useState } from 'react';
import { url, requestOptions } from '../constants';
import { getResultTable } from '../utils/utilities';

const FootBallResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${url}?dateFrom=2021-06-20&dateTo=2021-06-25`, requestOptions)
      .then((response) => response.json())
      .then((results) => setResults(getResultTable(results.matches)))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <ul>
      {results.map((team) => (
        <li
          className="standings"
          key={team.id}
        >{`${team.name} - ${team.won}`}</li>
      ))}
    </ul>
  );
};

export default FootBallResults;
