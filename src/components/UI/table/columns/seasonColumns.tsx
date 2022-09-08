export const COLUMNS = [
  {
    Header: 'Round',
    accessor: 'round',
  },
  {
    Header: 'Driver',
    accessor: (d: any) =>
      d.Results[0].Driver.code +
      '/' +
      d.Results[0].Driver.givenName +
      ' ' +
      d.Results[0].Driver.familyName +
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
    accessor: 'Results[0].Driver.nationality',
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
    accessor: 'Results[0].Constructor.name',
    Cell: ({ value }: any) => {
      return (
        <>
          <div className="uppercase">{value}</div>
        </>
      )
    },
  },
  {
    Header: 'Circuit Name',
    accessor: 'Circuit.circuitName',
    Cell: ({ value }: any) => {
      return (
        <>
          <div className="uppercase">{value}</div>
        </>
      )
    },
  },
  {
    Header: 'Lap',
    accessor: 'Results[0].laps',
  },
  {
    Header: 'Time',
    accessor: 'Results[0].Time.time',
  },
  {
    Header: 'Location',
    accessor: 'Circuit.Location.locality',
    Cell: ({ value }: any) => {
      return (
        <>
          <div className="uppercase">{value}</div>
        </>
      )
    },
  },
]
