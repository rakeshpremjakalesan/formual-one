export const COLUMNS = [
  {
    Header: 'Season',
    accessor: 'season',
    Cell: ({ value }: any) => {
      return (
        <>
          <div className="cell-large">{value}</div>
        </>
      )
    },
  },
  {
    Header: 'Driver',
    accessor: (d: any) =>
      d.DriverStandings[0].Driver.code +
      '/' +
      d.DriverStandings[0].Driver.givenName +
      ' ' +
      d.DriverStandings[0].Driver.familyName +
      '/',
    Cell: ({ value }: any) => {
      return (
        <>
          <div className="cell-large">{value.split('/')[0]}</div>
          <div className="cell-medium">{value.split('/')[1]}</div>
        </>
      )
    },
  },
  {
    Header: 'Nationality',
    accessor: 'DriverStandings[0].Driver.nationality',
    Cell: ({ value }: any) => {
      return (
        <>
          <div className="uppercase">{value}</div>
        </>
      )
    },
  },
  {
    Header: 'Car',
    accessor: (d: any) =>
      d.DriverStandings[0].Constructors[0].constructorId.replace('_', ' '),
    Cell: ({ value }: any) => {
      return (
        <>
          <div className="uppercase">{value}</div>
        </>
      )
    },
  },
  {
    Header: 'Wins',
    accessor: 'DriverStandings[0].wins',
  },
  {
    Header: 'Points',
    accessor: 'DriverStandings[0].points',
  },
]
