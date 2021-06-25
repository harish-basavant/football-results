const groupBy = (objectArray, property) => {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

export const getResultTable = (results) => {
  const winnerTeams = results?.reduce((acc, obj) => {
    const winner =
      obj.score.winner === 'HOME_TEAM'
        ? obj.homeTeam
        : obj.score.winner === 'AWAY_TEAM'
        ? obj.awayTeam
        : null;
    if (winner != null) {
      let key = winner.id;
      if (!acc[key]) {
        winner['won'] = 1;
        acc[key] = winner;
      } else {
        acc[key]['won'] = acc[key]['won'] + 1;
      }
    }
    return acc;
  }, {});

  const teams = [];
  winnerTeams &&
    Object.entries(winnerTeams).forEach(([key, value]) => {
      teams.push(value);
    });

  let groupedTeams = groupBy(teams, 'won');

  let resultTable = [];
  Object.values(groupedTeams).forEach((value) => resultTable.push(value));

  return resultTable.flat().reverse();
};

export const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};
